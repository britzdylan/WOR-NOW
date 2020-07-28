import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({

    banner: {
        maxWidth: '1680px',
        height: '720px',
        padding: '0',
        margin: '0 auto ',
        backgroundPosition: 'center center',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            width: '960px',
            height: '411.43px',
        },
        [theme.breakpoints.down('sm')]: {
            width: "600px",
            height: '257.14px',
            padding: '0'
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: '202.5px',
            padding: '0'
        },
    },
    hero: {
        padding: '0',
        margin: '0 auto',
        maxWidth: '1680px',
        height: '720px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '960px',
            height: '411.43px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0',
            width: "600px",
            height: '257.14px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            width: "100%",
            height: '202.5px',
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
        <div className={classes.banner} style={{ backgroundImage: `url(/banner.jpg)` }}>
            <div className={classes.hero}>
                <Link href="/shop"><Button className={classes.btn} variant="outlined" size="large">Shop Now</Button></Link>
            </div>
        </div>
    )
}

export default hero