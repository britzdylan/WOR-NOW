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
        fontSize: 16,
        marginBottom: '0px'
      },
  },
  regPrice: {
    textDecoration: 'line-through',
    color: 'grey',
    fontSize: 14

  },
  imgContainer: {
        maxWidth: '100%',
        maxHeight: '235px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')] : {
            maxHeight: '123px',
          },
  },
  img: {
      maxWidth: '100%'
  },
  Actions: {
      paddingLeft: '16px'
  },
}));

const productCard = (props) => {
    const classes = useStyles();
    const { title, price, image, productId, slug, salePrice, onSale } = props;

    const itemsTemp= [];

    itemsTemp.push(salePrice ? salePrice : '');
    const regPrice = itemsTemp[0].split(' ');


    return (
    <Card className={classes.root} elevation='2'>    
        <CardContent className={classes.content}  >
            <div className={classes.imgContainer}>
                <img src={image} className={classes.img} alt={title} />
            </div>
            <Typography
                variant="h6"
                component="p"
                className={classes.title}
                noWrap
            >
                {title}
            </Typography>
            {regPrice[2] ?  
            
            <Typography
            variant="subtitle1"
            component="p"
            color="primary"
            className={classes.regPrice}
            > 
            {regPrice[2]}
            </Typography>
        
            : ''}     
            <Typography
                variant="subtitle1"
                component="p"
                color="primary"
                className={classes.price}
            >
                {price}
            </Typography>
        </CardContent>
        <CardActions className={classes.Actions} >
            <Button size="small" variant="contained" color="primary" href={slug}>Buy Now</Button>
        </CardActions>
    </Card>
    )
}

export default productCard;