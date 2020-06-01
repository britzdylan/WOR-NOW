import { setUserSessionData } from "../../functions";
import { useState } from 'react';
import LogIn from './logIn';
import AccountTabs from './nav-tabsAccount';
import LOG_IN from '../mutations/log-in';
import { v4 } from 'uuid';
import { useQuery, useMutation } from "@apollo/react-hooks";

const AccountContainer = () => {

    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [checkIfUserIsLoggedIn, setUserLogInState ] = useState(false);
    const [ requestError, setRequestError ] = useState( null );
    const [userData, setUserData ] = useState("");

    const emailHandle = ( event ) => {
        setUsername(event.target.value);
    }

    const passHandle = ( event ) => {
        setPassword(event.target.value);
    }

    // localStorage.setItem('woo-user-session', "false");

    //  if (process.browser) {
    //     if (localStorage.getItem('authToken')) {
    //         if (localStorage.getItem('authToken') != "" ) {
    //             setUserLogInState(true);
    //         }
    //     }
    //  }



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
		onCompleted: ( data ) => {
			

			// If error.
			if ( logInAttemptError ) {
				setRequestError( logInAttemptError.graphQLErrors[ 0 ].message );
            }
            
            // On Success:
           const newData = setUserSessionData(data);
           localStorage.setItem('user-session-data', JSON.stringify(newData));
           setUserData(newData);
           setUserLogInState(true);
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

    console.log(userData);

    
	return (
        <>
			{  checkIfUserIsLoggedIn ? <AccountTabs /> : <LogIn handleClick={handleClick} emailHandle={emailHandle} passHandle={passHandle} /> }
        </>
	)
};

export default AccountContainer;