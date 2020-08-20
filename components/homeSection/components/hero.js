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
        backgroundSize: 'contain',
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
        backgroundColor: 'rgba(0,0,0,0)',
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
    const { src, link } = props
    return (
        <Link href={link}>
            <div className={classes.banner} style={{ backgroundImage: `url(${src})` }}>

            </div>
        </Link >
    )
}

export default hero