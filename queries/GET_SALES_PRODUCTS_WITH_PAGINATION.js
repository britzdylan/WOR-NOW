import gql from 'graphql-tag'


const SALE_QUERY = gql`query Sub_Category( $next: String! ){
    products(where: {category: "worldofrugby", stockStatus: IN_STOCK, onSale: true}, first: 20, after: $next) {
      edges {
        node {
          name
          slug
          ... on VariableProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          id
          productId
          image {
            sourceUrl(size: WOOCOMMERCE_SINGLE)
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

  export default SALE_QUERY;