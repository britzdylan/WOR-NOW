import gql from 'graphql-tag'

const GET_CATEGORIES_1 = gql`query get_queries( $ID: Int!){
    productCategories(where: {parent: $ID}) {
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