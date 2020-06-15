import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { Typography, Button, Divider } from '@material-ui/core';

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
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "70%",
        margin: "0 auto",
        height: "100vh"
      },
      divider : {
          height: "250px",
          margin: "0 64px"
      }
  }));

export default function Custom404() {
    const classes = useStyles();
    return (
        // <div className={classes.ErrorContainerA}>
        <div className={classes.ErrorContainerB}>
                <img src="/404.png" width="500px" alt="england loses the rugby world cup" />
                <Divider orientation="vertical" className={classes.divider} />
                <div>
                <Typography variant="h1" gutterBottom="true">Well...</Typography>
                <Typography variant="body1" gutterBottom="true">Seems like we can't find what you're looking for</Typography>
                <Link href="/shop"><a><Button variant="outlined" size="large">Go Shop Instead</Button></a></Link>
                </div>
                
        </div>
        // </div>
    )
  }