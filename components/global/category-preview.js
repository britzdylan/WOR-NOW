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
            margin: '24px auto',
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
            fontSize: 24,
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
    const { products, comTitle, catLink } = props;

    return (
        <div className={classes.paper} >
            {/* categroy top bar */}
            <div className={classes.catBar} >
                <Typography className={classes.catName} variant="h4">{comTitle}</Typography>
                <Link href={`/shop/${catLink}`} as={`/shop/${comTitle}/${catLink}`}><Button color="primary">View More</Button></Link>
            </div>
            {/* =============== */}

            {/* category preview row */}
            <div className={classes.catPreview}>
                {/* call product cards */}
                { products.length ? (
                    products.map( product =>  <ProductCard key={ product.node.id } title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                        sourceUrl} productId={product.node.productId} slug={product.node.slug} onSale={product.node.onSale} /> )
                    ) : '' }
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