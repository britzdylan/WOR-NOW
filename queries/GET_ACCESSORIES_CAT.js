import gql from 'graphql-tag'

  const GET_ACCESSORIES_CAT = gql`query{
    productCategories(where: {parent: 707}) {
        edges {
          node {
            id
            name
            productCategoryId
            count
          }
        }
      }
  }
  
  `

  export default GET_ACCESSORIES_CAT;