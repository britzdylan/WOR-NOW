import gql from 'graphql-tag'

  const GET_EQUIPMENT_CAT = gql`query{
    productCategories(where: {parent: 230, hideEmpty: true, orderby: NAME}) {
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
                  sourceUrl
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

  export default GET_EQUIPMENT_CAT;