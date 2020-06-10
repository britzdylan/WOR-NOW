import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({

    banner: {
        width: '1280px',
        height: '720px',
        padding: '0',
        margin: '12px auto',
        backgroundColor: 'black',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            width: '960px',
            height: '540px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '768px',
            height: '423px',
            padding: '0'
        },
        [theme.breakpoints.down('xs')]: {
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
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '960px',
            height: '540px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '768px',
            height: '423px',
            padding: '0'
        },
        [theme.breakpoints.down('xs')]: {
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
    const { banner } = props;
    console.log("banner", banner);
    const newBanner = banner.banners;
    return (
        <div className={classes.banner} style={{ backgroundImage: `url(http://localhost:1337${newBanner[0].image.url})` }}>
            <div className={classes.hero}>
                <Link href={`${newBanner[0].url}`}><Button className={classes.btn} variant="outlined" size="large" color="white">Shop Now</Button></Link>
            </div>
        </div>
    )
}

export default hero