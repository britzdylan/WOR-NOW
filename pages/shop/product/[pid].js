import React, { useEffect } from 'react'
import Layout from '../../../components/mainLayout/layout'
// import SIMPLE_QUERY from '../../../queries/GET_SIMPLE_PRODUCT_BY_ID'
// import VARIATION_QUERY from '../../../queries/GET_VARIATION_PRODUCT_BY_ID'
// import client from '../../../components/ApolloClient';
import client from '../../../components/ApolloClient';
import Productview from '../../../components/global/product';
import Head from 'next/head';
import GetProductBySlug from '../../../queries/GET_PRODUCT_BY_SLUG';
import { getProductsSlugs } from '../../../api/products';
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

export async function getStaticPaths() {

  const data = await getProductsSlugs();
  const products = data.data.products.nodes;

  return {
    paths: products?.map((product) => `/shop/product/${product.slug}`).reverse() || [],
    fallback: true,
  }
}


const Product = ({ result }) => {
  const product = result.data.product
  useEffect(() => {
    sessionStorage.setItem("productData", JSON.stringify(product));
  })
  const router = useRouter()
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <Layout >
      <NextSeo
        title={product.name}
        description={`"Get the ${product.name} for only R ${product.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`}
        canonical="https://www.worldofrugby.co.za"
        openGraph={{
          title: product.name,
          description: `"Get the ${product.name} for only R ${product.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`,
          images: [{
            url: product.image != null ? product.image.sourceUrl : "/placeholder-image.jpg", width: 800,
            height: 600,
            alt: product.name,
          }]
        }}
      />
      <Head>
        <script async src="https://app.mobicredwidget.co.za/assets/js/instalment.js" />
      </Head>
      <Productview product={product} />
    </Layout>

  )
}

// Product.getInitialProps = async function (context) {
//   let { query: { id, type } } = context;
//   const ID = id
//   const Type = type
//   let result = undefined
//   if (type == "SIMPLE") {
//     result = await client.query({ query: SIMPLE_QUERY, variables: { ID } });
//   } else {
//     result = await client.query({ query: VARIATION_QUERY, variables: { ID } });
//   };


//   return {
//     product: result.data.product
//   }
// }

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const ID = params.pid;
  const result = await client.query({ query: GetProductBySlug, variables: { ID } });
  //const product = await result.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      result,
    },
    unstable_revalidate: 1,
  }
}

export default Product;