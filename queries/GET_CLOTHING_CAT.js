import gql from 'graphql-tag'

  const GET_CLOTHING_CAT = gql`query{
    productCategories(where: {parent: 886, hideEmpty: true, orderby: NAME}) {
      edges {
        node {
          id
          name
          productCategoryId
          count
          products(first: 4, where: {stockStatus: IN_STOCK}) {
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

  export default GET_CLOTHING_CAT;