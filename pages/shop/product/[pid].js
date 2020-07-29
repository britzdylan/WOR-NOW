import React, { useEffect } from 'react'
import Layout from '../../../components/mainLayout/layout'
import SIMPLE_QUERY from '../../../queries/GET_SIMPLE_PRODUCT_BY_ID'
import VARIATION_QUERY from '../../../queries/GET_VARIATION_PRODUCT_BY_ID'
import client from '../../../components/ApolloClient';
import Productview from '../../../components/global/product';
import Head from 'next/head';

import { NextSeo } from 'next-seo';
const Product = (props) => {
  const { product } = props
  useEffect(() => {
    sessionStorage.setItem("productData", JSON.stringify(product));
  })

  return (
    <Layout >
      <NextSeo
        title={product.name}
        description={`"Get the ${product.name} for only R ${product.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`}
        canonical="https://www.worldofrugby.co.za"
        openGraph={{
          title: product.name,
          description: `"Get the ${product.name} for only R ${product.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`,
          images: [product.image.sourceUrl]
        }}
      />
      <Head>
        <script async src="https://app.mobicredwidget.co.za/assets/js/instalment.js" />
      </Head>
      <Productview product={product} />
    </Layout>

  )
}

Product.getInitialProps = async function (context) {
  let { query: { id, type } } = context;
  const ID = id
  const Type = type
  let result = undefined
  if (type == "SIMPLE") {
    result = await client.query({ query: SIMPLE_QUERY, variables: { ID } });
  } else {
    result = await client.query({ query: VARIATION_QUERY, variables: { ID } });
  };


  return {
    product: result.data.product
  }
}

export default Product;