import React from 'react'
import client from '../../components/ApolloClient';
// import CategoryVieComponenet from '../../../../../components/global/categorie-view'
import GET_SEARCH from '../../queries/GET_SEARCH_RESULTS';
import { useRouter } from 'next/router'
import Layout from '../../components/mainLayout/layout'
import ProductCard from '../../components/global/product-card';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    roota: {
        maxWidth: '70%',
        margin: '64px auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80%',
            margin: '0 auto',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '90%',
            margin: '24px auto',
        },
    },
    rootb: {
        maxWidth: '100%',
        margin: '64px auto',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridRowGap: '32px',
        gridColumnGap: '12px',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '6px',
            justifyItems: 'center',
            gridTemplateColumns: '33% 33% 33%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '6px',
            justifyItems: 'center',
            gridTemplateColumns: '50% 50%',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            margin: '24px 0',
            gridColumnGap: '3px',
            gridRowGap: '12px',
            gridTemplateColumns: '100%',
        },
    },
    title: {
        marginTop: '0px',
        lineHeight: '1'
    },
    breadCrumbsLink: {
        color: '#C4C4C4',
        textDecoration: 'underline',
        cursor: 'pointer'

    },
    breadCrumbs: {
        padding: '12px 0',
        margin: '24px 0 0 0'
    },
    pagination: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '8px 0 78px 0'
    },
    altTitle: {
        margin: "128px 0 128px 0"
    }


}));


const searchResults = (props) => {
    const { data } = props
    const products = data.data.products.edges;
    const classes = useStyles();



    return (
        <Layout>
            <div className={classes.roota}>
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
                    <Link className={classes.breadCrumbsLink} href="/shop">
                        <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
                    </Link>
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">Search Results</Typography>
                </Breadcrumbs>
                <Typography component="p" variant="subtitle" align="left" gutterBottom="true" className={classes.title}>Showing products on page</Typography>
                <Typography component="h1" variant="h2" align="left" gutterBottom="true" className={classes.title}>Search Results</Typography>

                {products.length ?
                    <div className={classes.rootb}>
                        {
                            products.map(product => <ProductCard key={product.node.id} title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                                sourceUrl} productId={product.node.productId} type={product.node.type} slug={product.node.slug} />)
                        } </div> : <Typography component="p" variant="h4" align="center" className={classes.altTitle} gutterBottom="true">Sorry we couldn't find what you were looking for</Typography>
                }


            </div>


        </Layout>

    )
}

searchResults.getInitialProps = async function (context) {
    let { query: { value } } = context;
    const term = value;

    let result = await client.query({ query: GET_SEARCH, variables: { term } });

    return {
        data: result
    }
}


export default searchResults