import React from 'react'
import Subscribe from '../global/subscribe'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 24px',
        maxWidth: '30%',
        margin: '0 auto',
        [theme.breakpoints.down('md')] : {
            maxWidth: '60%',
            margin: '32px auto'
          },
          [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',
          },
    },
}));

const subscribe = () => {
    const classes = useStyles();
    return (
        <div>
                <Subscribe/>
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom='true'>
                    What to expect
                </Typography>
                <Typography variant="body1">
                - Our weekly Deals
                </Typography>
                <Typography variant="body1">
                - Latest Product arrivals
                </Typography>
                <Typography variant="body1">
                - Important News & Information
                </Typography>
            </div>
        </div>
      

    )
}

export default subscribe;