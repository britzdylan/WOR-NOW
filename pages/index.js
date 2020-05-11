import Layout from '../components/mainLayout/layout'
import client from './../components/ApolloClient'
import gql from 'graphql-tag'
import NavTabs from './../components/homeSection/components/navTabs-home';

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
    edges {
      node {
        name
        slug
        ... on VariableProduct {
          regularPrice
          salePrice(format: FORMATTED)
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

const BESTSALES_QUERY = gql`query {
  products(first: 10, where: {category: "worldofrugby", orderby: {field: TOTAL_SALES, order: DESC}, stockStatus: IN_STOCK}) {
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

}

`


const Home = (props) => {
  const { products, featuredProduct, saleProducts, bestSales } = props;
  return (
     <Layout>
       <NavTabs products={products} featuredProduct={featuredProduct} saleProducts={saleProducts} bestSales={bestSales} />
     </Layout>
  )
};

Home.getInitialProps = async () => {
  const result = await client.query( { query:PRODUCT_QUERY });
  const result2 = await client.query( { query: FEATURED_QUERY });
  const result3 = await client.query( {query: SALE_QUERY});
  const result4= await client.query( {query:BESTSALES_QUERY});

  return{
    products: result.data.products.edges,
    featuredProduct: result2.data.products.edges,
    saleProducts: result3.data.products.edges,
    bestSales: result4.data.products.edges
  }
};

export default Home;
