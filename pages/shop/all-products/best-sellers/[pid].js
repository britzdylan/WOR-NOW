import React from 'react';
import Layout from '../../../../components/mainLayout/layout'
import { makeStyles } from '@material-ui/core/styles';
import client from '../../../../components/ApolloClient';
import PRODUCT_QUERY from '../../../../queries/GET_BEST_SELLERS_WITH_PAGINATION';
import ProductCard from '../../../../components/global/product-card';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import PaginationItem from '@material-ui/lab/PaginationItem';

function handleClick(event) {
    event.preventDefault();
    window.history.back();
  }



const useStyles = makeStyles((theme) => ({

    roota: {
        maxWidth: '70%',
        margin: '64px auto',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',
            margin: '0',
          },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '100%',
            margin: '24px 0',
          },
    },
    rootb: {
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
            gridColumnGap: '3px',
            gridRowGap: '12px',
            gridTemplateColumns: '50% 50%',
          },
    },
    title: {
        marginTop: '32px'
    },
    breadCrumbsLink: {
        color: '#C4C4C4'
        
    },
    breadCrumbs: {
        padding: '12px'
    },
    pagination: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '8px 0 78px 0'
    }


}));


const bestSellersPagination = (props) => {
    const classes = useStyles();
    const { products, curCursor, curPage,hasNextPage } = props;
    const itemNumA = curPage;
    const itemNumB = (parseInt(itemNumA) - 1).toString();
    const itemNumC = (parseInt(itemNumA) +1).toString();

    return (
        <Layout>
            <div className={classes.roota}>
                <Typography component="h1" variant="h1" align="center" gutterBottom="true" className={classes.title}>Best Selling Products</Typography>
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
                    <Link className={classes.breadCrumbsLink}  href="/shop">
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
                    </Link>
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">All Products</Typography>
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">Best Selling Products</Typography>
                </Breadcrumbs>
                <div className={classes.rootb}>
                { products.length ? (
                        products.map( product =>  <ProductCard key={ product.node.id } title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                            sourceUrl} productId={product.node.productId} slug={product.node.slug} onSale={product.node.onSale} /> )
                        ) : '' }
                 
                </div>
                <div className={classes.pagination}>
                    <Button onClick={handleClick} color="primary">Previous</Button>
                    <PaginationItem page={itemNumB} selected={false} disabled={true}/>
                    <PaginationItem page={itemNumA} selected={true} disabled={true}/>
                    {hasNextPage ?  
                        <PaginationItem page={itemNumC} selected={false} disabled={true}/>
                    : '' }
                    { hasNextPage ?
                    <Link href={{ pathname: `/shop/all-products/best-sellers/view`, query:  { page: `${itemNumC}`, curCursor: `${curCursor}`}}}  ><Button  color="primary">Next</Button></Link>
                    : "" }
                </div>
               
            </div>
        </Layout>
    )
}

bestSellersPagination.getInitialProps = async function (context) {

    let { query: { curCursor, page }  } = context;
    const next = curCursor;
    const i = page
    const result = await client.query( { query:PRODUCT_QUERY,variables: { next } });

    return{
      products: result.data.products.edges,
      curCursor: result.data.products.edges[19].cursor,
      hasNextPage: result.data.products.pageInfo.hasNextPage,
      curPage: i
    }
  }
export default bestSellersPagination;