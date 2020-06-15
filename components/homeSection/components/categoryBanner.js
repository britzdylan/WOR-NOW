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
    maxWidth: '640px',
    height: "360px",
    margin: '8px',
    [theme.breakpoints.down('sm')] : {
        maxWidth: '300px' ,
        height: "168px"      
    },
    '&::after' : {
        content : " ",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity : "0.5"
    }
    },
    content: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "flex-end",
        width: "100%",
        height: "100%",
        [theme.breakpoints.down('sm')] : {
                 
        },
        '&::after': {
            content : " ",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity : "0.5"
        }
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
    Actions: {
        opacity: "1",
        color: "white",
        paddingLeft: '0px'
    },
    btn : {
        color: "white",
        borderColor: "white",
    },
    description : {
        color : "white",
        display: "block"
    }
  }));
  


const categoryBanner = (props) => {
    const classes = useStyles();
    const { banner, products, catName, slug, filter, sale, parent, parentID, description } = props;

    return (
        <Card style={{ backgroundImage: `url(/${banner}.jpg)` }} className={classes.root} elevation='12'>
            <CardContent className={classes.content}  >
                <div>
                    <CardActions className={classes.Actions}>
                        <Typography variant="h5" className={classes.description}>{description}</Typography>
                        <Link href={{ pathname: `/shop/category/${parent}/${slug}/view`, query: { pageName: ``, page: `1`, curCursor: ``, field: `${filter}`, sale: `${sale}`, parentID: `${parentID}` } }}><Button size="small" variant="outlined" className={classes.btn}>Shop Now</Button></Link>
                    </CardActions>
                    </div>
            </CardContent>
            
        </Card>
    )

}

export default categoryBanner