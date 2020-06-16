import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({

    banner: {
        maxWidth: '100%',
        height: '720px',
        padding: '0',
        margin: '0 auto ',
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '621px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            padding: '0'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            padding: '0'
        },
    },
    hero: {
        padding: '0',
        margin: '0 auto',
        maxWidth: '100%',
        height: '720px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '621px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0',
            height: '432px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0',
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
    const { banner } = props;
    console.log("banner", banner.banners[0].image);
    const newBanner = banner.banners;
    return (
        <div className={classes.banner} style={{ backgroundImage: `url(${newBanner[0].image.url})` }}>
            <div className={classes.hero}>
                <Link href={`${newBanner[0].url}`}><Button className={classes.btn} variant="outlined" size="large" color="white">Shop Now</Button></Link>
            </div>
        </div>
    )
}

export default hero