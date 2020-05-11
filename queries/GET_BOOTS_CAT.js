import gql from 'graphql-tag'

  const GET_BOOT_CAT = gql`query{
    productCategories(where: {parent: 224}) {
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

  export default GET_BOOT_CAT;