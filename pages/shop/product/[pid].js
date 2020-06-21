import React, { useEffect } from 'react'
import Layout from '../../../components/mainLayout/layout'
import SIMPLE_QUERY from '../../../queries/GET_SIMPLE_PRODUCT_BY_ID'
import VARIATION_QUERY from '../../../queries/GET_VARIATION_PRODUCT_BY_ID'
import client from '../../../components/ApolloClient';
import Productview from '../../../components/global/product';

const Product = (props) => {
  const { product } = props
  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(product));
  })
  
    return (
        <Layout >
          <Productview product={product} />
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