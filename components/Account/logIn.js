import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';




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


const LogIn = (props) => {

    const classes = useStyles();
    const { passHandle, emailHandle, handleClick } = props;
   
    return (
        <div className={classes.formContainer}>
            <Typography
                variant="h2"
                component="h1"
            >
                Log In
            </Typography>
            <form className={classes.root}  autoComplete="on">
                <TextField  required  
                            error
                            id="username"
                            helperText="Please enter your username"
                            label="Username"
                            fullWidth
                            type='text'
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
                    <Button className={classes.submit}
                            onClick={handleClick}
                            color="primary"
                            size="large"
                            variant="contained" >Sign In</Button>
                </div>
            </form>
            <Typography>Not Registered ? <Link href="/">Sign up here</Link></Typography>
        </div>
    )
}

export default LogIn;