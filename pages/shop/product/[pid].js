import React from 'react';
import Layout from '../../../components/mainLayout/layout'
import SIMPLE_QUERY from '../../../queries/GET_SIMPLE_PRODUCT_BY_ID'
import VARIATION_QUERY from '../../../queries/GET_VARIATION_PRODUCT_BY_ID'
import client from '../../../components/ApolloClient';
import Productview from '../../../components/global/product';

const Product = (props) => {
  const { product } = props
  console.log(product);
  
  // we have added a new function to return the JSON-LD
  const addJSONLD = (product) => {
    return {
      __html: `{
        "@context":"https://schema.org",
        "@type":"Product",
        "productID": "${product.id}",
        "name":"${product.name}",
        "description":"${product.description}",
        "url":"https://www.worldofrugby.co.za/shop/product/${product.slug}?id=${product.productId}&type=${product.__typename}",
        "image":"${product.image.sourceUrl}",
        "brand":"",
        "offers": [
          {
            "@type": "Offer",
            "price": "${product.regularPrice}",
            "priceCurrency": "ZAR",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
          }
        ],
      }`
    };
  }

    return (
        <Layout >
          <Productview product={product} />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJSONLD(product)}
        />
        </Layout>
        
    )
}

Product.getInitialProps = async function (context) {
    let { query: { id, type }  } = context;
    const ID = id
    const Type = type
    let result = undefined
    if (type == "SIMPLE") {
       result = await client.query( { query:SIMPLE_QUERY,variables: { ID } });
    } else {
       result = await client.query( { query:VARIATION_QUERY,variables: { ID } });
    };
   

    return{
      product: result.data.product
    }
  }

export default Product;