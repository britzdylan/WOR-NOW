import gql from 'graphql-tag'


const SALE_QUERY = gql`query{
    products(where: {category: "worldofrugby", stockStatus: IN_STOCK, onSale: true}, first: 10) {
      edges {
        node {
          name
          slug
          ... on VariableProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          id
          productId
          image {
            sourceUrl(size: WOOCOMMERCE_SINGLE)
          }
        }
      }
    }
  }
  `

  export default SALE_QUERY;