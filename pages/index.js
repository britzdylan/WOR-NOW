import Head from 'next/head'
import Layout from '../components/mainLayout/layout'
import client from './../components/ApolloClient'
import gql from 'graphql-tag'
import NavTabs from './../components/navTabs';

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
       <NavTabs />
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
