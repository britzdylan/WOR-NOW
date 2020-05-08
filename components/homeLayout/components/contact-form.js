import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12px',
        margin: '32px 0',
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
            [theme.breakpoints.down('md')] : {
                maxWidth: '100%',
              },
              [theme.breakpoints.down('sm')] : {
                maxWidth: '100%',
              },
        },
      '& > *': {
        margin: theme.spacing(1),
        //width: '100%',
      }
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

const contactForm = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.root}  autoComplete="on">
             <TextField     required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your name"
                            label="name"
                            fullWidth
                            type='text'
                            variant="outlined" />
            <TextField     required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your email"
                            label="email"
                            fullWidth
                            type='email'
                            variant="outlined" />
            <TextField     required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your message"
                            label="message"
                            fullWidth
                            type='text'
                            multiline
                            rows={4}
                            variant="outlined" />
            <div className={classes.btnControl}>
                <TextField  className={classes.submit}
                        type='submit'
                        color="primary"
                        variant="outlined" />
            </div>
        </form>
    )
}

export default contactForm