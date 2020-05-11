import gql from 'graphql-tag'

  const GET_EQUIPMENT_CAT = gql`query{
    productCategories(where: {parent: 230}) {
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

  export default GET_EQUIPMENT_CAT;