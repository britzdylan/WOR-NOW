import gql from 'graphql-tag'

  const GET_PROTECTION_CAT = gql`query{
    productCategories(where: {parent: 746}) {
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

  export default GET_PROTECTION_CAT;