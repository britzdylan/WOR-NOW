import gql from 'graphql-tag'


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

  export default PRODUCT_QUERY;