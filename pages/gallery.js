import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Layout from '../components/mainLayout/layout'

const useStyles = makeStyles((theme) => ({
    rootB: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "60%",
        margin: "0 auto",
        [theme.breakpoints.down('md')]: {
            width: '70%',
            justifyContent: "center",
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    rootA: {
        margin: "128px 0 128px 0"
    },
    image: {
        margin: "25px 0",
        borderRadius: "10px",
        objectFit: "cover",
        boxShadow: "0px 0px 19px -1px rgba(0,0,0,0.35)",
        [theme.breakpoints.down('md')]: {
            margin: "25px 10px"
        },
    }
}));

const images = []

for (let i = 1; i <= 25; i++) {
    images.push(i);
}

const gallery = () => {
    const classes = useStyles();
    return (
        <Layout>
        <div className={classes.rootA}>
            <div className={classes.rootB}>
                {images.map((item, index) =>
                    <img loading="lazy" className={classes.image} width="350px" height="350px" src={`/gallery/${item}.jpg`} alt={`image-${index}`} key={index} />
                )}
            </div>
        </div>
        </Layout>

    )
}

export default gallery;