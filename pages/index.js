import Head from 'next/head'
import Layout from '../components/mainLayout/layout'
import client from './../components/ApolloClient'
import gql from 'graphql-tag'

const PRODUCT_QUERY =  gql`query{
  products {
    nodes {
      productId
      name
    }
  }
}`;

const Home = (props) => {
  const { products } = props;
  console.log(products)
  return (
     <Layout>
       <div className="product-container">
          <h1>Hello World</h1>
          {products.length ? (
            products.map( product => <p key={ product.id }>{ product.name }</p>)
          ) : ''}
          {/* <p>{products}</p> */}
			</div>
     </Layout>
   
    
  )
};

Home.getInitialProps = async () => {
  const result = await client.query( { query:PRODUCT_QUERY });

  return{
    products: result.data.products.nodes
  }
};

export default Home;
