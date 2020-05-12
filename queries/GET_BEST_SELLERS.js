import gql from 'graphql-tag'

const BESTSALES_QUERY = gql`query {
    products(first: 10, where: {category: "worldofrugby", orderby: {field: TOTAL_SALES, order: DESC}, stockStatus: IN_STOCK}) {
      edges {
        node {
          name
          id
          productId
          image {
            sourceUrl(size: LARGE)
          }
          slug
          ... on VariableProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
        }
      }
    }
  
  }
  
  `

  export default BESTSALES_QUERY;