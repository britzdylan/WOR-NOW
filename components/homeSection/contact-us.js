import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContactForm from './components/contact-form';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '24px auto 64px auto',
        maxWidth: '60%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '8px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    }
}));

const contactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h1' gutterBottom={true}>
                Contact Us
            </Typography>
            <Typography variant='body1' paragraph={true}>
                got any questions or reccomendations for us? fill out this form and we will get back to you asap.
            </Typography>

            <ContactForm />

            <Typography variant='h3' gutterBottom={true}>
                Our contact details
            </Typography>
            <div className={classes.info}>
                <Typography variant='body2'>
                    Information:
                </Typography>
                <Typography variant='body1'>
                    info@sportprosa.co.za
                </Typography>
            </div>
            <div className={classes.info}>
                <Typography variant='body2'>
                    Call centre:
                </Typography>
                <Typography variant='body1'>
                    011 781 3308
                </Typography>
            </div>
            <div className={classes.info}>
                <Typography variant='body2'>
                    Online Orders:
                </Typography>
                <Typography variant='body1'>
                    orders@sportprosa.co.za
                </Typography>
            </div>
            <div className={classes.info}>
                <Typography variant='body2'>
                    Corporate Orders:
                </Typography>
                <Typography variant='body1'>
                    corporate@sportprosa.co.za
                </Typography>
            </div>
        </div>
    )
}

export default contactUs;