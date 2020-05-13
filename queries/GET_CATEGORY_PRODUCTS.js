import gql from 'graphql-tag'

const BESTSALES_QUERY = gql`query Sub_Category( $next: String!, $filter : ProductsOrderByEnum!, $Onsale: Boolean! ) {
    products(first: 20, where: {category: "worldofrugby", orderby: {field: $filter, order: DESC},onSale: $Onsale, stockStatus: IN_STOCK}, after: $next) {
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