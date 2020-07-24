import { setUserSessionData } from "../../functions";
import { useState, useContext } from 'react';
import LogIn from './logIn';
import AccountTabs from './nav-tabsAccount';
import LOG_IN from '../mutations/log-in';
import { v4 } from 'uuid';
import { AppContext } from "../context/appContext";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12px',
        maxWidth: '30%',
        margin: '64px auto',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            maxWidth: '60%',
            margin: '32px auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            maxWidth: '100%',
        },
    }
}));


const AccountContainer = () => {

    const classes = useStyles();

    const { value2, value3 } = React.useContext(AppContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [requestError, setRequestError] = useState(null);
    const [isUserLoggedIn, setUserLogIn] = value2;


    const emailHandle = (event) => {
        setUsername(event.target.value);
    }

    const passHandle = (event) => {
        setPassword(event.target.value);
    }

    // sessionStorage.setItem('woo-user-session', "false");

    //  if (process.browser) {
    //     if (sessionStorage.getItem('authToken')) {
    //         if (sessionStorage.getItem('authToken') != "" ) {
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
    const [logInAttempt, { data: logInAttemptRes, loading: logInAttemptLoading, error: logInAttemptError }] = useMutation(LOG_IN, {
        variables: {
            input: loginQryInput,
        },
        onCompleted: (data) => {


            // If error.
            if (logInAttemptError) {
                setRequestError(logInAttemptError.graphQLErrors[0].message);
            }

            // On Success:
            const newData = setUserSessionData(data);
            sessionStorage.setItem('userData', JSON.stringify(newData));
            setUserLogIn(true);
        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);

            }
        }
    });

    const handleClick = () => {
        if (username.length > 0 && password.length > 0) {
            logInAttempt();
        }
    }

    return (
        <>
            {isUserLoggedIn ? <AccountTabs userData={sessionStorage.getItem('userData') ? JSON.parse(sessionStorage.getItem('userData')) : ""} /> :
                <div className={classes.root}>
                    <LogIn handleClick={handleClick} logInAttemptLoading={logInAttemptLoading} emailHandle={emailHandle} passHandle={passHandle} />
                    {logInAttemptError ? <Alert severity="error">{logInAttemptError.graphQLErrors[0].message.replace("_", " ")}</Alert>
                        : null}
                    {logInAttemptLoading ? <Alert severity="success">Logging you in...</Alert>
                        : null}
                </div>

            }
        </>
    )
};

export default AccountContainer;