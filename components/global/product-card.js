import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    overflow: 'hidden',
    height: '450px',
    flex: '0 0 auto',
    margin: '8px',
    [theme.breakpoints.down('sm')]: {
      height: '450px',
      width: '250px',
      maxWidth: "100%"
    },
    [theme.breakpoints.down('xs')]: {
      height: '450px',
      width: '100%',
    },

  },
  content: {
    paddingBottom: '0',
    paddingTop: 0
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  price: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginBottom: '0px'
    },
  },
  regPrice: {
    textDecoration: 'line-through',
    color: 'grey',
    fontSize: 14,
    lineHeight: 1

  },
  imgContainer: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
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
  const { title, price, image, productId, slug, salePrice, type } = props;

  const itemsTemp = [];

  itemsTemp.push(salePrice ? salePrice : '');
  const regPrice = itemsTemp[0].split(' ');


  return (
    <Card className={classes.root} elevation='0' variant="outlined">
      <CardContent className={classes.content}  >
        <div className={classes.imgContainer}>
          <img src={image} className={classes.img} alt={title} />
        </div>
        <Typography
          variant="h5"
          component="p"
          className={classes.title}
          noWrap
        >
          {title}
        </Typography>
        {regPrice[2] ?

          <Typography
            variant="overline"
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
        <Link href={{ pathname: `/shop/product/${slug}`, query: { id: `${productId}`, type: `${type}` } }}><Button size="medium" variant="contained" color="primary" >Buy Now</Button></Link>
      </CardActions>
    </Card>
  )
}

export default productCard;