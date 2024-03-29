import gql from 'graphql-tag'


const SALE_QUERY = gql`query{
    products(where: {category: "worldofrugby", stockStatus: IN_STOCK, onSale: true}, first: 4, after: "") {
      edges {
        node {
          name
          slug
          type
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
          productTags {
            nodes {
              name
            }
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