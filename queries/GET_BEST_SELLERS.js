import gql from 'graphql-tag'

const BESTSALES_QUERY = gql`query {
    products(first: 4, where: {category: "worldofrugby", orderby: {field: TOTAL_SALES, order: DESC}, stockStatus: IN_STOCK}, after: "") {
      edges {
        node {
          name
          id
          productId
          type
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
  
  }
  
  `

  export default BESTSALES_QUERY;