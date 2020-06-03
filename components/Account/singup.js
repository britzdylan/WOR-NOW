import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMutation } from "@apollo/react-hooks";
import { v4 } from 'uuid';
import SIGN_UP from '../mutations/create-user';
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E8E8E8!important',
            },
            '&:hover fieldset': {
              borderColor: '#C4C4C4!important',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#C4C4C4!important',
            },
        },
      '& > *': {
        margin: theme.spacing(1),
        //width: '100%',
       
        },
    marginTop : "32px"
    },
    formContainer: {
        padding: '12px',
        maxWidth: '30%',
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            height: 'auto',
            maxWidth: '60%',
            margin: '32px auto'
          },
          [theme.breakpoints.down('sm')] : {
            height: 'auto',
            maxWidth: '100%',
          },
      },
      submit: {
        '& .MuiInputBase-root': {
            '& .MuiInputBase-input': {
                width: ' 100px',
                height: '36px',
                padding: '4px 8px',
            },
          },
      },
      btnControl: {
            display: 'flex',
          justifyContent: 'flex-end',
          margin: '0',
      },
  }));

const SignUp = (props) => {

    const classes = useStyles();

    const [username, setUsername ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [ifSuccessFull, setSuccess ] = useState(false);
    const [ requestError, setRequestError ] = useState( null );

    const custQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        password: password,
        username: username,
        email: email
    }


     // Sign up Mutation.
	const [ signUpAttempt, { data: signUpAttemptRes, loading: signUpAttemptLoading, error: signUpAttemptError }] = useMutation( SIGN_UP, {
		variables: {
			input: custQryInput,
		},
		onCompleted: ( data ) => {
			

			// If error.
			if ( signUpAttemptError ) {
                setRequestError( signUpAttemptError.graphQLErrors[ 0 ].message );
            }
            
            // On Success:
            setSuccess(true);
            window.location.href = "/account"

		},
		onError: ( error ) => {
			if ( error ) {
                setRequestError( error.graphQLErrors[ 0 ].message );

            }
		}
    } );


    const emailHandle = ( event ) => {
        setUsername(event.target.value);
        setEmail(event.target.value);
    }

    const passHandle = ( event ) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {
        if (username.length > 0 && password.length > 0) {
            signUpAttempt();
        }
    }

    return (
        <div className={classes.formContainer}>
            <Typography
                variant="h2"
                component="h1"
            >
                Sign up
            </Typography>
            <form className={classes.root}  autoComplete="on">
                <TextField  required  
                            error
                            id="email"
                            helperText="Please enter your email"
                            label="email"
                            fullWidth
                            type='email'
                            variant="outlined"
                            onChange={( event ) => emailHandle(event)}
                             />
                 <TextField  required  
                            error
                            id="password"
                            helperText="Please enter your password"
                            label="Password"
                            fullWidth
                            type='password'
                            variant="outlined"
                            onChange={( event ) => passHandle(event)}
                             />
                <div className={classes.btnControl}>
                    {signUpAttemptLoading ? <CircularProgress color="inherit" />
                        :  <Button className={classes.submit}
                        onClick={handleClick}
                        color="primary"
                        size="large"
                        variant="contained" >Sign Up</Button>

                    }
                  
                </div>
                { signUpAttemptError ? <Alert severity="error">{signUpAttemptError.graphQLErrors[ 0 ].message.replace("_", " ")}</Alert> 
                    : null }
                { signUpAttemptLoading ? <Alert severity="info">Creating your account...</Alert> 
                    : null }
                { ifSuccessFull ? <Alert severity="success">Your account has been created, redirecting you to the log in page...</Alert> : null}
            </form>
            <Typography variant="p">Already have an account ?</Typography> 
            <Link href="/account"><Button>Log In here</Button></Link>
            <br/>
            <Typography variant="p">Forgot your password ?</Typography> 
            <Link href="/"><Button>Reset Password</Button></Link>
        </div>
    )
}

export default SignUp;