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
        padding: " 0"
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    whyUs: {
        margin: '0 0 64px 0',
    },
    reviewsHeading: {
        color : "black",
        position: "relative",
        top: "100px",
        zIndex: "2",
        [theme.breakpoints.down('sm')] : {
            position: 'static',
            top: 0,
            fontSize: "28px"

        },  
    },
    whyUsHeading : {
        [theme.breakpoints.down("md")] : {
            
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: '1.9rem'
        },
    },
    Float: {
        transform: "translatey(0px)",
        //animation: " float 6s ease-in-out infinite",
        width: "100%",
        display : 'flex',
        justifyContent: "flex-end",
        margin : '0 auto 32px auto',
        opacity: "0.5",
        [theme.breakpoints.down('sm')] : {
            display: 'block',
            width: "100%",
            margin: "32px 0" ,
            opacity: "1"  ,
            margin: "0 0 32px 0" 
        },
    },
    FloatAlt : {
        transform: "translatey(0px)",
       // animation: " floatAlt 6s ease-in-out infinite",
        width: "100%",
        display : 'flex',
        justifyContent: "flex-start",
        margin : '0 auto 32px auto',
        opacity: "0.5",
        [theme.breakpoints.down('sm')] : {
            display: 'block',
            width: "100%" ,
            opacity: 1 ,
            margin: "0 0 32px 0"     
        },
    },
    ourMission : {
        width: "50%",
        margin : '64px auto',
        opacity: "0.9"
    }


}));

const whyUs = (props) => {
const classes = useStyles();

    return (
        <div className={classes.root} id="why-us">
            <div className={classes.reviews}>
                <Typography align='left' variant='h2' gutterBottom='true' component='h1' className={classes.reviewsHeading}>We love Rugby - Like a lot</Typography>
                <div className={classes.Float}>
                    <img src="/loverugby.svg" alt="we love rugby" width="300px" />
                </div>
                {/* <ReviewCard /> */}
            </div>
            <div className={classes.reviews}>
                <Typography align='right' variant='h2' gutterBottom='true' component='h2' className={classes.reviewsHeading}>We love retail a bit more</Typography>
                <div className={classes.FloatAlt}>
                    <img src="/business.svg" alt="we love rugby" width="300px" />
                </div>
                {/* <ReviewCard /> */}
            </div>
            <div>
                <Typography align='center' variant='overline' gutterBottom='true' component='h3' >Thats why</Typography>
                <Typography align='center' color="primary" variant='h2' gutterBottom='true' component='h3' >OUR MISSION:</Typography>
                <Typography align='center' variant='h5' gutterBottom='true' component='h4' >Is to bring you the best online rugby retail experience to shop #everythingrugby</Typography>
                <div className={classes.ourMission}>
                    <img src="/webshopping.svg" alt="we love rugby" width="100%" />
                </div>
                {/* <ReviewCard /> */}
            </div>
            <div className={classes.whyUs}>
                <Typography variant='body1' paragraph='true' component='p'>With over 5 years experience in the Sports industry, we moved from our retail shops to online e-commerce in 2017 with the launch of WorldofRugby, now the world’s largest online rugby store.</Typography>
                <Typography variant='body1' paragraph='true' component='p'>Since then, WorldofRugby has maintained the excellent service levels first achieved over 5 years ago. We also take pride in the fact that we don’t just sell goods we spasialize, with all our staff being trained on the latest trends
                </Typography>
                <Typography variant='body1' paragraph='true' component='p'>We hope you enjoy shopping with us.</Typography>
            </div>
        </div>
    )
}

export default whyUs;