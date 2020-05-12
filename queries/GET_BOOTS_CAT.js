import gql from 'graphql-tag'

  const GET_BOOT_CAT = gql`query{
    productCategories(where: {parent: 224, hideEmpty: true, orderby: NAME}) {
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
          slug
          parent {
            name
          }
        }
      }
    }
  }
  
  `

  export default GET_BOOT_CAT;