import gql from 'graphql-tag'

  const GET_FANGEAR_CAT = gql`query{
    productCategories(where: {parent: 744}) {
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

  export default GET_FANGEAR_CAT;