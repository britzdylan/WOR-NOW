import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

    banner:{
        width: '1280px',
        height: '720px',
        padding: '0',
        margin: '12px auto',
        backgroundColor: 'black',
        [theme.breakpoints.down('md')] : {
            width: '960px',
            height: '540px',
        },
        [theme.breakpoints.down('sm')] : {
            width: '768px',
            height: '423px',
            padding: '0'
        },
        [theme.breakpoints.down('xs')] : {
            width: '320px',
            height: '180px',
            padding: '0'
        },

    },
    hero: {
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100%',
        backgroundImage : `url("Test.jpg")`,
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'contain',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')] : {
            width: '960px',
            height: '540px',
        },
        [theme.breakpoints.down('sm')] : {
            width: '768px',
            height: '423px',
            padding: '0'
        },
        [theme.breakpoints.down('xs')] : {
            width: '320px',
            height: '180px',
            padding: '0'
        },
    },
    btn: {
        maxHeight: '64px',
        color: 'white',
        borderColor: 'white',   
    },

}));


const hero = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <div className={classes.hero}>
                <Button className={classes.btn} variant="outlined" size="large" color="white">Shop Now</Button>
            </div>
        </div>
    )
}

export default hero