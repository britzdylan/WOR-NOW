import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { Typography, Button, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
    // ErrorContainerA: {
    //   display: "flex",
    //   justifyContent: "space-evenly",
    //   alignItems: "center",
    //   flexWrap: "wrap",
    //   maxWidth: "70%",
    //   margin: "0 auto",

    // },
    ErrorContainerB: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "no-wrap",
        maxWidth: "70%",
        margin: "0 auto",
        height: "100vh",
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "100%"
        }
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "100%",
            alignItems: "center"
        }
    },
    divider: {
        height: "250px",
        margin: "0 64px"
    },
    img: {
        maxWidth: "50%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%"
        }
    }
}));

export default function Custom404() {
    const classes = useStyles();
    return (
        // <div className={classes.ErrorContainerA}>
        <div className={classes.ErrorContainerB}>
            <img src="/404.png" className={classes.img} alt="South Africa is the best team" />
            <Hidden smDown>
                <Divider orientation="vertical" className={classes.divider} />
            </ Hidden>
            <div className={classes.content}>
                <Typography variant="h1" gutterBottom={true}>Well...</Typography>
                <Typography variant="body1" gutterBottom="true">Seems like we can't find what you're looking for</Typography>
                <Link href="/shop"><a><Button variant="outlined" size="large">Go Shop Instead</Button></a></Link>
            </div>

        </div>
        // </div>
    )
}