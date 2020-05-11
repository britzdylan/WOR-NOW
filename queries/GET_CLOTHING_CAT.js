import gql from 'graphql-tag'

  const GET_CLOTHING_CAT = gql`query{
    productCategories(where: {parent: 886}) {
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

  export default GET_CLOTHING_CAT;