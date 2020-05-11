import gql from 'graphql-tag'

const GET_SUB_CAT = gql`query Sub_Category( $id: Int ! ) {
    productCategories(where: {parent: $id, hideEmpty: true, orderby: NAME}) {
      edges {
        node {
          id
          name
          productCategoryId
          count
          products(first: 10, where: {stockStatus: IN_STOCK}) {
            edges {
              node {
                id
                name
                ... on VariableProduct {
                  id
                  regularPrice
                  salePrice
                }
                image {
                  sourceUrl(size: WOOCOMMERCE_SINGLE)
                }
                productId
                slug
                onSale
                ... on SimpleProduct {
                  name
                  regularPrice
                  salePrice
                }
              }
            }
          }
        }
      }
    }
  }
  
  `

  export default GET_SUB_CAT;