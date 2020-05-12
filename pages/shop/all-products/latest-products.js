import React from 'react';
import Layout from '../../../components/mainLayout/layout'
import { makeStyles } from '@material-ui/core/styles';
import client from '../../../components/ApolloClient';
import PRODUCT_QUERY from '../../../queries/GET_FIRST_10';
import ProductCard from '../../../components/global/product-card';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { Typography } from '@material-ui/core';


let currentPage = '2';
  

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: '70%',
        margin: '64px auto',
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        gridRowGap: '32px',
        gridColumnGap: '24px',
        justifyItems: 'center',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '6px',
            justifyItems: 'center',
          },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '100%',
            margin: '24px 0',
            gridTemplateColumns: 'auto auto',
          },
    },
    title: {
        marginTop: '32px'
    }


}));


const latestProducts = (props) => {
    const classes = useStyles();
    const { products, curCursor } = props;
    currentPage++
    return (
        <Layout>
            <div>
                <Typography component="h1" variant="h1" align="center" gutterBottom="true" className={classes.title}>Latest products</Typography>
            
                <div className={classes.root}>
                { products.length ? (
                        products.map( product =>  <ProductCard key={ product.node.id } title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                            sourceUrl} productId={product.node.productId} slug={product.node.slug} onSale={product.node.onSale} /> )
                        ) : '' }
                 <Link href={{ pathname: `/shop/all-products/latest-products/page=${currentPage}`, query:  {curCursor: `${curCursor}` }}}  ><Button color="primary">View More</Button></Link>
                </div>
            </div>
        </Layout>
    )
}

latestProducts.getInitialProps = async function (context) {

    let { curCursor } = context;
    
    const id = curCursor ? curCursor : '' 

    const result = await client.query( { query:PRODUCT_QUERY,variables: { id } });

    return{
      products: result.data.products.edges,
      curCursor: result.data.products.edges[19].cursor
    }
  }



export default latestProducts;