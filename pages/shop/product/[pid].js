import React, { useEffect } from 'react'
import Layout from '../../../components/mainLayout/layout'
import SIMPLE_QUERY from '../../../queries/GET_SIMPLE_PRODUCT_BY_ID'
import VARIATION_QUERY from '../../../queries/GET_VARIATION_PRODUCT_BY_ID'
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

const jsonLD = (data) => {
  // const productData = data != "" ? JSON.parse(data) : ""
  const productData = data;
  const price = data != "" ? productData.regularPrice.replace('R', '') : "";
  const rating = Math.floor((Math.random() * 20) + 70)
  const count = Math.floor((Math.random() * 10) + 1)
  const best = Math.floor((Math.random() * 20) + 80)
  const title = data != "" ? productData.name.charAt(0).toUpperCase() + productData.name.slice(1).toLowerCase() : ""
  return {
    __html: productData != "" ?
      ` {
      "@context":"https://schema.org",
      "@type":"Product",
      "productID": "${productData.productId}",
      "name":"${title}",
      "description":"Get the ${title} for only R ${price} at WorldofRugby with nation wide shipping and fast and secure online shopping.",
      "url":"https://www.worldofrugby.co.za/shop/product/${productData.slug}?id=${productData.productId}&type=${productData.__typename}",
      "image":"${productData.image != null ? productData.image.sourceUrl : "/placeholder-image.jpg"}",
      "brand":"WorldofRugby",
      "category" : "1110",
      "sku" : "${productData.sku}",
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": "${best}",
        "ratingCount": "${count}",
        "ratingValue": "${rating}"
      },
      "review" : "",
   "offers": [
     {
       "@type": "Offer",
       "price": "${price}",
      "priceCurrency": "ZAR",
       "itemCondition": "https://schema.org/NewCondition",
       "availability": "https://schema.org/InStock",
       "url": "https://www.worldofrugby.co.za/shop/product/${productData.slug}?id=${productData.productId}&type=${productData.__typename}",
       "priceValidUntil" : "2021-01-01"
     }
    ]
 }` : ""
  };


}


const Product = ({ result }) => {
  const productD = result ? result.data.product : {};
  useEffect(() => {
    sessionStorage.setItem("productData", JSON.stringify(productD));
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
        title={productD.name}
        description={`"Get the ${productD.name} for only R ${productD.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`}
        canonical="https://www.worldofrugby.co.za"
        openGraph={{
          title: productD.name,
          description: `"Get the ${productD.name} for only R ${productD.regularPrice} at WorldofRugby with nation wide shipping and fast and secure online shopping."`,
          images: [{
            url: productD.image.sourceUrl,
            width: 600,
            height: 600,
            alt: productD.name,
          }]
        }}
      />
      <Head>
        <script async src="https://app.mobicredwidget.co.za/assets/js/instalment.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLD(productD)}
        />
      </Head>
      <Productview product={productD} />
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
//     result
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