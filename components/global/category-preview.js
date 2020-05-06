import React from 'react';
import ProductCard from './product-card'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: "75%",
        margin: '0 auto',
        [theme.breakpoints.down('md')] : {
            maxWidth: '100%'
          },
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    catBar: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        
    },
    catName: {
        width: '25%',
        [theme.breakpoints.down('sm')] : {
            fontSize: 14,
          },
    },
    catPreview: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        padding: '',
        scrolling: "touch",
        '&::-webkit-scrollbar' : {
            //height: '5px',
            [theme.breakpoints.down('sm')] : {
                    display: 'none',
                },
        },
        [theme.breakpoints.up('md')] : {
            justifyContent: 'flex-start',
            overflow: 'hidden',
          },
    },
    empty: {
            width: '12px',
            height: '100%',
            color: 'white',
            display: 'block'    
    },
  }));

const catPreview = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.paper} >

            <div className={classes.catBar} >
                <Typography className={classes.catName} variant="h4"> Latest Products </Typography>
                <Link href="/"><Button color="primary">View More</Button></Link>
            </div>
            <div className={classes.catPreview}>
                {/* call product cards */}
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                <ProductCard  />
                {/* ========== */}
                {/* scroll fix */}
                <div
                    className={classes.empty}
                >
                    <p>!</p>
                </div>
                {/* ========== */}
            </div>
        </div>
        
    )
    
}

export default catPreview;