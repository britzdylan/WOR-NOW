import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  const subscribe = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.formContainer}>
            <Typography
                variant="h4"
                component="p"
            >
                Subscribe for special offers
            </Typography>
            <Typography
                variant="body2"
                component="p"
            >
                We promise to keep your information secure
            </Typography>
            <form className={classes.root}  autoComplete="on">
                <TextField  required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your email address."
                            label="Email"
                            fullWidth
                            type='email'
                            variant="outlined" />
                <div className={classes.btnControl}>
                    <TextField  className={classes.submit}
                            type='submit'
                            color="primary"
                            variant="outlined" />
                </div>
            </form>
        </div>
        
    )
  }

  export default subscribe