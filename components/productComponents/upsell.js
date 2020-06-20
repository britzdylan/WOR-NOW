import React from 'react'
import ProductCard from '../global/product-card'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: "70%",
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '16px 32px'
        },


    },
    catName: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
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
        '&::-webkit-scrollbar': {
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

const Upsell = (props) => {

    const classes = useStyles();
    const { products, slug, filter, sale, parent, parentID } = props;
    return (
        <div className={classes.paper} >
            {/* categroy top bar */}
            <div className={classes.catBar} >
                <Typography className={classes.catName} variant="h4">You might be interested in</Typography>
            </div>
            {/* =============== */}

            {/* category preview row */}
            <div className={classes.catPreview}>
                {/* call product cards */}
                {products.length ? (
                    products.map(product => <ProductCard parent={parent} key={product.id} title={product.name} price={product.regularPrice} salePrice={product.salePrice} image={(product.image != null) ? product.image.sourceUrl : '/placeholder-image.jpg'} productId={product.productId} type={product.type} slug={product.slug} />)
                ) : ''}
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



export default Upsell