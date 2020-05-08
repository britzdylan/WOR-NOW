import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
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

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'StaticForms - Contact Form',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: '3ce1d936-e54b-4092-bb3a-0b0200c3d8fc' // get your access key from https://www.staticforms.xyz
      });

      const [response, setResponse] = useState({
        type: '',
        message: ''
      });

      const handleChange = e =>
            setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
        });

        const json = await res.json();

        if (json.success) {
            setResponse({
            type: 'success',
            message: 'Thank you for reaching out to us.'
            });
        } else {
            setResponse({
            type: 'error',
            message: json.message
            });
        }
        } catch (e) {
        console.log('An error occurred', e);
        setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
        });
        }
    };


    return (
        <form className={classes.root}  autoComplete="on" action='https://api.staticforms.xyz/submit'
        method='post'
        onSubmit={handleSubmit}>
             <TextField     required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your name"
                            label="name"
                            fullWidth
                            type='text'
                            onChange={handleChange}
                            variant="outlined" />
            <TextField     required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your email"
                            label="email"
                            fullWidth
                            type='email'
                            onChange={handleChange}
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
                            onChange={handleChange}
                            variant="outlined" />
            <div className={classes.btnControl}>
                <TextField  className={classes.submit}
                        type='submit'
                        color="primary"
                        variant="outlined" />
            </div>
            <p>{response.message}</p>
        </form>
    )
}

export default contactForm