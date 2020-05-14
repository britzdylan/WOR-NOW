import gql from 'graphql-tag'

const GET_PRODUCTS_BY_CATEGORY = gql`query Sub_Category( $next: String!, $filter : ProductsOrderByEnum!, $Onsale: Boolean!, $ID: Int! ) {
    products(first: 20, where: {categoryId: $ID, orderby: {field: $filter, order: DESC},onSale: $Onsale, stockStatus: IN_STOCK}, after: $next,  search: "") {
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

  export default GET_PRODUCTS_BY_CATEGORY;