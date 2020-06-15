import gql from 'graphql-tag'

const FEATURED_QUERY = gql`query{
    products(first: 1, where: {category: "worldofrugby", featured: true}) {
      edges {
        node {
          name
          id
          productId
          type
          image {
            sourceUrl(size: WOOCOMMERCE_SINGLE)
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
  }`;

  export default FEATURED_QUERY;