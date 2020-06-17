import React from 'react';
import ProductCard from './product-card'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: "75%",
        margin: '64px auto',
        [theme.breakpoints.down('md')]: {
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
        margin: "16px 0",
        letterSpacing: "2px",
        [theme.breakpoints.down('md')]: {
            padding: '16px 32px'
        },


    },
    catName: {
        margin: "0 16px",
        fontSize: "18px",
        color: "#6b6b6b",
        textAlign: "center",
        fontWeight: "400",
        '&::after': {
            position: "relative",
            display: "block",
            width: "40px",
            height: "3px",
            background: "red",
            borderRadius: "50px",
            margin: "1rem auto",
            content: '" "',
            transform: "rotate(-5deg)"
        }
    },
    catPreview: {
        justifyContent: "center",
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        padding: '',
        scrolling: "touch",
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 64px 0 0'
        }
    },
    empty: {
        width: '12px',
        height: '100%',
        color: 'white',
        display: 'block'
    },
    link: {
        textAlign: "center"
    }
}));

const catPreview = (props) => {
    const classes = useStyles();
    const { products, catName, slug, filter, sale, parent, parentID } = props;
    console.log(products[0]);

    return (
        <div className={classes.paper} >
            {/* categroy top bar */}
            <div className={classes.catBar} >
                <Typography className={classes.catName} align="center" variant="subtitle2">{catName.toUpperCase()}</Typography>
            </div>
            {/* =============== */}
            {/* category preview row */}
            <div className={classes.catPreview}>
                {/* call product cards */}
                {products.length ? (
                    products.map(product => <ProductCard parent={parent} key={product.node.id} title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image != null ? product.node.image.sourceUrl : '/placeholder-image.jpg'} productId={product.node.productId} type={product.node.type} slug={product.node.slug} />)
                ) : ''}
            </div>
            {/* ================== */}
        </div>

    )

}

export default catPreview;