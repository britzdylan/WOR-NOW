import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
    maxWidth: 250,
    overflow: 'hidden',
    height: '400px',
    flex: '0 0 auto',
    margin: '8px',
    [theme.breakpoints.down('sm')] : {
        height: 'auto',
        width: '150px',
      },
  },
  content: {
    paddingBottom: '0'
  },
  title: { 
    [theme.breakpoints.down('sm')] : {
        fontSize: 16,
      },
  },
  price: {
    [theme.breakpoints.down('sm')] : {
        fontSize: 14,
        marginBottom: '0px'
      },
  },
  imgContainer: {
        maxWidth: '100%',
        maxHeight: '235px',
        overflow: 'hidden'
  },
  img: {
      maxWidth: '100%'
  }
}));

const productCard = (props) => {
    const classes = useStyles();


    return (
    <Card className={classes.root} elevation='6'>
        <CardContent className={classes.content}  >
            <div className={classes.imgContainer}>
                <img src="https://www.sportprosa.co.za/wp-content/uploads/2020/05/4.jpg" className={classes.img} />
            </div>
            <Typography
                variant="h6"
                component="p"
                className={classes.title}
            >
                Product Name goes here that is very long
            </Typography>
            <Typography
                variant="subtitle1"
                component="p"
                color="primary"
                className={classes.price}
            >
                R 2999.98 inc. Vat
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    )
}

export default productCard;