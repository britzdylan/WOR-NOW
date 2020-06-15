import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    overflow: 'hidden',
    height: '400px',
    flex: '0 0 auto',
    margin: '8px',
    [theme.breakpoints.down('sm')]: {
      width: "160px",
      height: "300px"
    }

  },
  content: {
    padding: "0",
    width: "300px",
    overflow: 'hidden',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      width: "160px",
      height: "300px"
    }
  },
  title: {
    margin: "24px 0 0 0",
    textTransform: "capitalize",
    fontWeight: "300",
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  price: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      marginBottom: '0px'
    },
  },
  regPrice: {
    textDecoration: 'line-through',
    color: 'grey',
    fontSize: 12,
    lineHeight: 1

  },
  imgContainer: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: "160px",
      height: "200px"
    }
  },
  img: {
    maxWidth: '100%'
  },
  Actions: {
    paddingLeft: '16px'
  },
  overlay : {
    width: "300px",
    height: "400px",
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "relative",
    top: "-100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0",
    transition: "all 0.2s ease-in",
    [theme.breakpoints.down('sm')]: {
      width: "160px",
      height: "300px"
    },
    '&:hover' : {
      opacity: 1
    }
  },
  btn: {
    color: "white",
    borderColor: "white"
  }
}));

const productCard = (props) => {
  const classes = useStyles();
  const { title, price, image, productId, slug, salePrice, type } = props;

  const itemsTemp = [];

  itemsTemp.push(salePrice ? salePrice : '');
  const regPrice = itemsTemp[0].split(' ');


  return (
    image ? (
    <Card className={classes.root} elevation='0'>
      <CardContent className={classes.content}  >
        <div className={classes.imgContainer}>
          <img src={image} className={classes.img} alt={title} />
        </div>
        <Typography
          variant="body2"
          component="h3"
          className={classes.title}
          align="center"
        >
          {title.toLowerCase()}
        </Typography>
        {regPrice[2] ?

          <Typography
            variant="subtitle1"
            component="h4"
            color="primary"
            className={classes.regPrice}
            align="center"
          >
            {regPrice[2]}
          </Typography>

          : ''}
        <Typography
          variant="subtitle1"
          component="h4"
          color="primary"
          className={classes.price}
          align="center"
        >
          {price}
        </Typography>
      </CardContent>
      <Link href={{ pathname: `/shop/product/${slug}`, query: { id: `${productId}`, type: `${type}` } }}>
      <div className={classes.overlay}>
        <CardActions className={classes.Actions} >
          <Link href={{ pathname: `/shop/product/${slug}`, query: { id: `${productId}`, type: `${type}` } }}><Button className={classes.btn} size="medium" variant="outlined" >Buy Now</Button></Link>
        </CardActions>
      </div>
      </Link>
    </Card>
    )
    : 
    <Skeleton variant="rect" width={300} height={400} />
    )
}

export default productCard;