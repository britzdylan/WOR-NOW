import React from 'react'
import Subscribe from '../global/subscribe'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

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
    list : {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    listText : {
        margin: "0 6px"
    },
    icon : {
        color: "green"
    },
    rootA: {
        margin: "0 0 128px 0"
    }
}));

const subscribe = () => {
    const classes = useStyles();
    return (
        <div className={classes.rootA}>
                <Subscribe/>
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom='true'>
                    What to expect
                </Typography>
                <div className={classes.list}> 
                    <CheckCircleRoundedIcon className={classes.icon}/>
                    <Typography variant="body1" className={classes.listText}>
                    
                        Our weekly Deals
                    </Typography>
                </div>
                <div className={classes.list}> 
                    <CheckCircleRoundedIcon className={classes.icon}  />
                    <Typography variant="body1" className={classes.listText}>
                    
                    Latest Product arrivals
                    </Typography>
                </div>
                <div className={classes.list}> 
                    <CheckCircleRoundedIcon  className={classes.icon} />
                    <Typography variant="body1" className={classes.listText}>
                    
                    Important News & Information
                    </Typography>
                </div>
            </div>
        </div>
      

    )
}

export default subscribe;