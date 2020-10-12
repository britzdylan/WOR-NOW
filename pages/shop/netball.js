import React from 'react'
import ReactMarkdown from 'react-markdown'
import client from '../../components/ApolloClient';
import PRODUCT_QUERY from '../../queries/GET_PRODUCTS_BY_CATEGORY'
import Layout from '../../components/mainLayout/layout'
import NavTabs from '../../components/shopSection/navTabs-shop'
import CategoryVieComponenet from '../../components/global/categorie-view'
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo';
const description = "Get your perfect fit hockey stick to dominate the pitch, with the Geocentric Core Technology from Grays hockey sticks and the carbon-tech from Malik we guarentee we have the right fit for your game."

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
            backgroundColor: "#7200F6",
            borderRadius: "50px",
            margin: "1rem auto",
            content: '" "',
            transform: "rotate(-5deg)"
        }
    },
}));

const categoryView = (props) => {
    const { products, arrayCursor, hasNextPage, curPage, hasPreviousPage } = props
    const classes = useStyles();

    function handleClick(event) {
        event.preventDefault();
        window.history.back();
    }

    return (
        <Layout>
            <NextSeo
                title="Netball Gear & Equipment"
                description={description}
                canonical="https://www.worldofnetball.co.za"
                openGraph={{
                    title: "Netball Gear & Equipment",
                    description: description,
                    images: ""
                }}
            />
            {/* <NavTabs index="0" /> */}
            <div className="description">
                <Typography variant="h2" component="h1" align="center" gutterBottom="true">Netball Gear & Equipment</Typography>
                <ReactMarkdown className="descriptionMarkdown" source={description} />            </div>
            <div className={classes.catBar} >
                <Typography className={classes.catName} align="center" variant="subtitle2">Browse</Typography>
            </div>
            {products.length > 0 ?
                <CategoryVieComponenet Order="DESC" parentID={232} parent={'worldofnetball'} sale={false} field={"DATE"} slug={"netball"} page={"Netball gear and accessories"} hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} products={products} arrayCursor={arrayCursor} curPage={curPage} />
                :
                <div className="categoryError">
                    <div className="categoryError">
                        <Typography variant="subtitle1" component="h1">Sorry seems like we do not have any more products left</Typography>
                    </div>
                </div>}
        </Layout>
    )
}

categoryView.getInitialProps = async function (context) {
    const next = "";
    const i = 1;
    const filter = "DATE";
    const Onsale = false;
    const ID = 308;
    const newOrder = "DESC";
    const result = await client.query({ query: PRODUCT_QUERY, variables: { next, filter, Onsale, ID, newOrder } });

    return {
        products: result.data.products.edges,
        arrayCursor: result.data.products.edges,
        hasNextPage: result.data.products.pageInfo.hasNextPage,
        hasPreviousPage: result.data.products.pageInfo.hasPreviousPage,
        curPage: i
    }
}

export default categoryView