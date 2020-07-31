import gql from 'graphql-tag'

const GET_PRODUCTS_SLUGS = gql`query Sub_Category {
    products(first: 1500, where: {categoryId: 216, stockStatus: IN_STOCK}) {
      nodes {
        slug
      }
    }
  }
  
  `

export default GET_PRODUCTS_SLUGS;