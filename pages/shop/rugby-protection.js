import React from 'react'
import ReactMarkdown from 'react-markdown'
import client from '../../components/ApolloClient';
import CAT_QUERY from '../../queries/GET_CATEGORIES_1'
import Layout from '../../components/mainLayout/layout'
import NavTabs from '../../components/shopSection/navTabs-shop'
import CatGrid from '../../components/shopSection/cat-grids'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo';
const description = "Keep injuries on the pitch to a minimum with our wide range of protective rugby gear. Make practicality your main aim with our collection of Canterbury head guards, renowned for their tough protection. Take advantage of our flavoured mouth guards so your victory tastes that bit sweeter, and don’t forget body armour. With comfortable padding in all the right places, this lightweight solution keeps your focus on the game. Shop the full protective range now."
const useStyles = makeStyles((theme) => ({
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
}));

const categoryView = ({ result }) => {
    const classes = useStyles();

    return (
        <Layout>
            <NextSeo
                title="Rugby Protection"
                description={description}
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Rugby Protection",
                    description: description,
                    images: ""
                }}
            />
            <NavTabs index="3" />
            <div className="description">
                <Typography variant="h2" component="h1" align="center" gutterBottom="true">Rugby Protection</Typography>
                <ReactMarkdown className="descriptionMarkdown" source={description} />            </div>
            <div className={classes.catBar} >
                <Typography className={classes.catName} align="center" variant="subtitle2">Browse</Typography>
            </div>
            <CatGrid parent={'rugby-protection'} data={result.data.productCategories.edges} />
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
    const ID = 746
    const result = await client.query({ query: CAT_QUERY, variables: { ID } });

    return {
        props: {
            result
        }
    }
}

export default categoryView