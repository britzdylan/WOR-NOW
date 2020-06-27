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
const description = "Relax in style and comfort when you buy Worldofrugby's own leisure range. From Hoodies for the winter to shorts, Chill with your mates at a braai or use them for your own gym training. Either way we got you covered."

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
                title="Clothing"
                description={description}
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Clothing",
                    description: description,
                    images: ""
                }}
            />
            <NavTabs index="1" />
            <div className="description">
                <Typography variant="h2" component="h1" align="center" gutterBottom="true">Clothing</Typography>
                <ReactMarkdown className="descriptionMarkdown" source={description} />            </div>
            <div className={classes.catBar} >
                <Typography className={classes.catName} align="center" variant="subtitle2">Browse</Typography>
            </div>
            <CatGrid parent={'clothing'} data={result.data.productCategories.edges} />
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
    const ID = 886
    const result = await client.query({ query: CAT_QUERY, variables: { ID } });

    return {
        props: {
            result
        }
    }
}

export default categoryView