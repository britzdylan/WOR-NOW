import gql from 'graphql-tag'


const GET_PRODUCTS_BY_PARENT = gql`query Top_Level_Query( $ID: ID! ){
    productCategory(id: $ID) {
        products(first: 20, where: {stockStatus: IN_STOCK, orderby: {order: DESC, field: DATE}}) {
          edges {
            node {
              name
              id
              productId
              image {
                sourceUrl(size: WOOCOMMERCE_SINGLE)
              }
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
        children {
          edges {
            node {
              name
              id
              image {
                sourceUrl(size: WOOCOMMERCE_SINGLE)
              }
            }
          }
        }
      }
  }

`;

export default GET_PRODUCTS_BY_PARENT;