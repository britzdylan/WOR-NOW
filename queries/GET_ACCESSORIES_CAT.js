import gql from 'graphql-tag'

  const GET_ACCESSORIES_CAT = gql`query{
    productCategories(where: {parent: 707, hideEmpty: true, orderby: NAME}) {
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
                type
                ... on SimpleProduct {
                  name
                  regularPrice
                  salePrice
                }
              }
            }
          }
          slug
          parent {
            name
          }
        }
      }
    }
  }
  
  `

  export default GET_ACCESSORIES_CAT;