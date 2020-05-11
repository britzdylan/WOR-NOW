import gql from 'graphql-tag'

  const GET_CATEGORIES_1 = gql`query{
    productCategories(where: {parent: 216}) {
        edges {
          node {
            id
            name
            productCategoryId
          }
        }
      }
  }
  
  `

  export default GET_CATEGORIES_1;