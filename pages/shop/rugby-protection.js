import React from 'react'
import ReactMarkdown from 'react-markdown'
import client from '../../components/ApolloClient';
import CAT_QUERY from '../../queries/GET_CATEGORIES_1'
import Layout from '../../components/mainLayout/layout'
import NavTabs from '../../components/shopSection/navTabs-shop'
import CatGrid from '../../components/shopSection/cat-grids'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const description = "Keep injuries on the pitch to a minimum with our wide range of protective rugby gear. Make practicality your main aim with our collection of Canterbury head guards, renowned for their tough protection. Take advantage of our flavoured mouth guards so your victory tastes that bit sweeter, and don’t forget body armour. With comfortable padding in all the right places, this lightweight solution keeps your focus on the game. Shop the full protective range now."


const useStyles = makeStyles(() => ({

    description: {
        width: "450px",
    }

}));


const categoryView = ({ result }) => {
    console.log(result);
    const classes = useStyles();

    return (
        <Layout>
            <NavTabs index="3" />
            <Typography variant="h2" component="h1" align="center" gutterBottom="true">Rugby Protection</Typography>
            <Typography classname={classes.description} variant="body1" paragraph="true" align="center">{description}</Typography>
            <CatGrid data={result.data.productCategories.edges} />
            {/* <CategoryVieComponenet parent="fan-gear" slug={"fan-gear"} pageName="Fan Gear" hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} products={products} arrayCursor={arrayCursor} curPage={curPage} /> */}
        </Layout>
    )
}

// categoryView.getStaticProps = async function (context) {

//     let { query: { curCursor, page } } = context;
//     const next = curCursor;
//     const i = page
//     const filter = "DATE"
//     const Onsale = false
//     const ID = 744
//     const result = await client.query({ query: PRODUCT_QUERY, variables: { next, filter, Onsale, ID } });

//     return {
//         products: result.data.products.edges,
//         arrayCursor: result.data.products.edges,
//         hasNextPage: result.data.products.pageInfo.hasNextPage,
//         hasPreviousPage: result.data.products.pageInfo.hasPreviousPage,
//         curPage: i
//     }
// }

export async function getStaticProps() {
    const ID = 230
    const result = await client.query({ query: CAT_QUERY, variables: { ID } });

    return {
        props: {
            result
        }
    }
}

export default categoryView