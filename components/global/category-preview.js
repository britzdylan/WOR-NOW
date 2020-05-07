import React from 'react';
import ProductCard from './product-card'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: "75%",
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            maxWidth: '100%',
            margin: '32px auto',
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
        [theme.breakpoints.down('md')] : {
            padding: '16px 32px'
          },
       
        
    },
    catName: {
        width: '25%',
        [theme.breakpoints.down('sm')] : {
            fontSize: 14,
            width: 'auto'
          },
    },
    catPreview: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        padding: '',
        scrolling: "touch",
        '&::-webkit-scrollbar' : {
            display: 'none',
        },
        [theme.breakpoints.up('md')] : {
            justifyContent: 'flex-start',
            overflowX: 'auto',
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
            {/* categroy top bar */}
            <div className={classes.catBar} >
                <Typography className={classes.catName} variant="h4"> Latest Products </Typography>
                <Link href="/"><Button color="primary">View More</Button></Link>
            </div>
            {/* =============== */}

            {/* category preview row */}
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
                <div className={classes.empty} >
                    <p>!</p>
                </div>
                {/* ========== */}
            </div>
            {/* ================== */}
        </div>
        
    )
    
}

export default catPreview;