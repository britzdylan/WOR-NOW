import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
    maxWidth: '500px',
    margin: '24px auto',
    [theme.breakpoints.down('sm')] : {
        maxWidth: '300px' ,
        margin: '32px auto'       
    },
    },
    content: {
        display: 'flex',
        [theme.breakpoints.down('sm')] : {
            display: 'block'        
        },
    },
    line: {
        margin: '0',
        lineHeight: '0'
    },
    title: { 
        margin: '0 0 12px 0',
      [theme.breakpoints.down('sm')] : {
          
        },
    },
    price: {
        margin: '0 0 12px 0',
      [theme.breakpoints.down('sm')] : {
          
        },
    },
    imgContainer: {
          display: 'inline-block',
          maxWidth: '50%',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',        
        },
    },
    img: {
        width: '100%'
    },
    Actions: {
        paddingLeft: '0px'
    }
  }));
  


const featuredItem = (props) => {
    const classes = useStyles();
    const { title, price, image, productId, slug, salePrice, type } = props;

    return (
        <Card className={classes.root} elevation='12'>
            <CardContent className={classes.content}  >
                <div className={classes.imgContainer}>
                    <img src={image} alt={title} className={classes.img} />
                </div>
                <div>
                    <Typography
                        variant="overline"
                        component="p"
                        classes={classes.line}
                        
                    >
                        Featured Item
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        color=""
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h4"
                        component="p"
                        color=""
                        className={classes.price}
                    >
                        {price}
                    </Typography>
                    <CardActions className={classes.Actions}>
                    <Link href={{ pathname: `/shop/product/${slug}`, query:  {id: `${productId}`, type: `${type}`}}}><Button size="small" variant="contained" color="primary" >Buy Now</Button></Link>
                    </CardActions>
                </div>
            </CardContent>
            
        </Card>
    )

}

export default featuredItem