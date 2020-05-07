import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '500px',
        margin: '0 auto'
    },
    content: {
        display: 'flex'
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
          maxWidth: '50%'
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
    const { title, price, image, productId, slug } = props;

    return (
        <div>
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
                        <Button size="" variant="contained" color="primary" href={slug} >Buy Now</Button>
                    </CardActions>
                </div>
            </CardContent>
            
        </Card>
        </div>
    )

}

export default featuredItem