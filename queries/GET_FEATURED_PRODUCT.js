import gql from 'graphql-tag'

const FEATURED_QUERY = gql`query{
    products(first: 1, where: {category: "worldofrugby", featured: true}) {
      edges {
        node {
          name
          id
          productId
          type
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

  export default FEATURED_QUERY;