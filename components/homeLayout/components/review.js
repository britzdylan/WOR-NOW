import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '12px 8px',
        maxWidth: '350px',
        margin: '0 auto'
    },
    rating: {
        display: 'block',
        marginTop: '0',
        lineHeight: '0',
        marginBottom: '16px',
        color: '#E8E8E8'
    }
}));



const reviewCard = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);
    
    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant='h5' >Jean Venter</Typography>
            <Rating  name="read-only" value={value} readOnly size="small"/>
            <Typography className={classes.rating} variant='caption' gutterBottom="true">reviews by google</Typography>
            <Typography variant='body1' gutterBottom="true">Awesome place with great rugby memorabilia and supporters gear for sale.</Typography>
        </Paper>
    )
}

export default reviewCard;