import React from 'react';
import Layout from "../components/mainLayout/layout";
import { isUserLoggedIn } from "../functions";
import { useState } from 'react';
import LogIn from '../components/Account/logIn';
import AccountTabs from '../components/Account/nav-tabsAccount';
import LOG_IN from '../components/mutations/log-in';
import { v4 } from 'uuid';
import { useQuery, useMutation } from "@apollo/react-hooks";

const Account = () => {

    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [ requestError, setRequestError ] = useState( null );

    let checkIfUserIsLoggedIn = isUserLoggedIn();

    const emailHandle = ( event ) => {
        setUsername(event.target.value);
    }

    const passHandle = ( event ) => {
        setPassword(event.target.value);
    }

    const loginQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        password: password,
        username: username
    }

     // Log In Mutation.
	const [ logInAttempt, { data: logInAttemptRes, loading: logInAttemptLoading, error: logInAttemptError }] = useMutation( LOG_IN, {
		variables: {
			input: loginQryInput,
		},
		onCompleted: () => {
			

			// If error.
			if ( logInAttemptError ) {
				setRequestError( logInAttemptError.graphQLErrors[ 0 ].message );
			}

			// On Success:
            checkIfUserIsLoggedIn = isUserLoggedIn(true);
            console.log("user logged in")
		},
		onError: ( error ) => {
			if ( error ) {
                //setRequestError( error.graphQLErrors[ 0 ].message );
                console.log(error);
			}
		}
    } );

    const handleClick = () => {
        if (username.length > 0 && password.length > 0) {
            logInAttempt();
        }
    }

	return (
		<Layout>
			{ checkIfUserIsLoggedIn ? <AccountTabs /> :<LogIn handleClick={handleClick} emailHandle={emailHandle} passHandle={passHandle} /> }
		</Layout>
	)
};

export default Account;