import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
        margin: '32px 0',
        [theme.breakpoints.down('xs')] : {
            display: 'block',
    },
    },
    container: {
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        marginBottom: '8px',
    },
    Type: {
        marginLeft: '12px',
        display: 'inline-block',
        
    }

}));


const infoCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <CachedIcon/>
                <Typography className={classes.Type} variant="body2">Quick and easy Returns</Typography>
            </div>
            <div className={classes.container}>
                <LocalShippingIcon/>
                <Typography className={classes.Type} variant="body2">order before 2pm for faster delivery</Typography>
            </div>
            <div className={classes.container}>
                <CallIcon/>
                <Typography className={classes.Type} variant="body2">Call centre open 7 days per week</Typography>
            </div>
        </div>
    )
}

export default infoCard