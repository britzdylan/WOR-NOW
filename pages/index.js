import Head from 'next/head'
import Layout from '../components/mainLayout/layout'
import client from './../components/ApolloClient'
import gql from 'graphql-tag'
import NavTabs from './../components/navTabs';
import featuredItem from '../components/homeLayout/components/featured-item';

const PRODUCT_QUERY =  gql`query{
  products(first: 10, where: {category: "worldofrugby"}) {
    edges {
      node {
        name
        id
        productId
        image {
          sourceUrl(size: LARGE)
        }
        slug
        ... on VariableProduct {
          regularPrice
        }
      }
    }
  }
}`;

const SALE_QUERY = gql`query{
  products(where: {category: "worldofrugby", stockStatus: IN_STOCK, onSale: true}, last: 10) {
    edges{
      node {
        name
        slug
        ... on VariableProduct {
          regularPrice
          salePrice
        }
        id
        productId
        image {
          sourceUrl(size: WOOCOMMERCE_SINGLE)
        }
      }
    }
  }
}

`

const FEATURED_QUERY = gql`query{
  products(first: 1, where: {category: "worldofrugby", featured: true}) {
    edges {
      node {
        name
        id
        productId
        image {
          sourceUrl(size: LARGE)
        }
        slug
        ... on VariableProduct {
          price
        }
      }
    }
  }
}`;


const Home = (props) => {
  const { products, featuredProduct, saleProducts } = props;
  return (
     <Layout>
       <NavTabs products={products} featuredProduct={featuredProduct} saleProducts={saleProducts} />
     </Layout>
  )
};

Home.getInitialProps = async () => {
  const result = await client.query( { query:PRODUCT_QUERY });
  const result2 = await client.query( { query: FEATURED_QUERY });
  const result3 = await client.query( {query: SALE_QUERY});

  return{
    products: result.data.products.edges,
    featuredProduct: result2.data.products.edges,
    saleProducts: result3.data.products.edges
  }
};

export default Home;
