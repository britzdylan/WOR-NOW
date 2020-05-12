import gql from 'graphql-tag'

const GET_SUB_CAT = gql`query Sub_Category( $id: Int ! ) {
  products(first: 20, where: {stockStatus: IN_STOCK, orderby: {field: DATE, order: DESC}, categoryId: $id}, after: "") {
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

  export default GET_SUB_CAT;