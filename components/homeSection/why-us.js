import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ReviewCard from './components/review';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '720px',
        margin: '64px auto',
        [theme.breakpoints.down("md")] : {
            maxWidth: '640px'
        },
        [theme.breakpoints.down("sm")] : {
            maxWidth: '300px'
        },
    },
    reviews: {
        margin: '0 0 64px 0',
    },
    whyUs: {
        margin: '0 0 64px 0',
    },
    reviewsHeading: {
        [theme.breakpoints.down("md")] : {
            
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: '2.1rem'
        },
    },
    whyUsHeading : {
        [theme.breakpoints.down("md")] : {
            
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: '1.9rem'
        },
    }


}));

const whyUs = (props) => {
const classes = useStyles();

    return (
        <div className={classes.root} id="why-us">
            <div className={classes.reviews}>
                <Typography align='center' variant='h1' gutterBottom='true' component='h1' className={classes.reviewsHeading}>What Our Customers Say</Typography>
                <ReviewCard />
            </div>
            <div className={classes.whyUs}>
                <Typography variant='h2' gutterBottom='true' component='h2' className={classes.whyUsHeading}>Why Buy From Us</Typography>
                <Typography variant='body1' paragraph='true' component='p'>With over 5 years experience in the Sports industry, we moved from our retail shops to online e-commerce in 2017 with the launch of WorldofRugby, now the world’s largest online rugby store.</Typography>
                <Typography variant='body1' paragraph='true' component='p'>Since then, WorldofRugby has maintained the excellent service levels first achieved over 5 years ago. We also take pride in the fact that we don’t just sell goods we spasialize, with all our staff being trained on the latest trends
                </Typography>
                <Typography variant='body1' paragraph='true' component='p'>We hope you enjoy shopping with us.</Typography>
            </div>
        </div>
    )
}

export default whyUs;