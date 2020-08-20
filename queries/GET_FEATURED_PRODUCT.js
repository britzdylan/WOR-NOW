import gql from 'graphql-tag'

const FEATURED_QUERY = gql`query{
    products(first: 4, where: {category: "worldofrugby", featured: true, stockStatus: IN_STOCK, orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          name
          id
          productId
          image {
            sourceUrl(size: WOOCOMMERCE_SINGLE)
          }
          slug
          ... on VariableProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          type
        }
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
    }
  }`;

export default FEATURED_QUERY;