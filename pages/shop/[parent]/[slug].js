import React from 'react'
import client from '../../../components/ApolloClient';
import CategoryVieComponenet from '../../../components/global/categorie-view'
import PRODUCT_QUERY from '../../../queries/GET_PRODUCTS_BY_CATEGORY'
import { useRouter } from 'next/router'
import Layout from '../../../components/mainLayout/layout'
import { Typography, Button } from '@material-ui/core';

import { NextSeo } from 'next-seo';


const categoryView = (props) => {
  const router = useRouter()
  const { products, arrayCursor, hasNextPage, curPage, hasPreviousPage } = props
  const { slug } = router.query
  const { field } = router.query
  const { sale } = router.query
  const { parent } = router.query
  const { parentID } = router.query

  const string = slug.replace("-", " ");
  const page = string.charAt(0).toUpperCase() +
    string.slice(1);

  function handleClick(event) {
    event.preventDefault();
    window.history.back();
  }

  return (
    <Layout>
      <NextSeo
        title={page}
        description={`Shop our range of ${page} with Nation wide delivery`}
        canonical="https://www.worldofrugby.co.za"
        openGraph={{
          title: page,
          description: `Shop our range of ${page} with Nation wide delivery`,
          images: [`/category-images/${slug}.jpg`]
        }}
      />
      {products.length > 0 ?
        <CategoryVieComponenet parentID={parentID} parent={parent} sale={sale} field={field} slug={slug} page={page} hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} products={products} arrayCursor={arrayCursor} curPage={curPage} />
        :
        <div className="categoryError">
          <div className="categoryError">
            <Typography variant="subtitle1" component="h1">Sorry seems like we do not have any more products left</Typography>
            <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button>
          </div>
        </div>}
    </Layout>

  )
}

categoryView.getInitialProps = async function (context) {

  let { query: { curCursor, page, field, sale, parentID } } = context;
  const next = curCursor;
  const i = page
  const filter = field
  const Onsale = JSON.parse(sale)
  const ID = JSON.parse(parentID)
  const result = await client.query({ query: PRODUCT_QUERY, variables: { next, filter, Onsale, ID } });

  return {
    products: result.data.products.edges,
    arrayCursor: result.data.products.edges,
    hasNextPage: result.data.products.pageInfo.hasNextPage,
    hasPreviousPage: result.data.products.pageInfo.hasPreviousPage,
    curPage: i
  }
}

export default categoryView