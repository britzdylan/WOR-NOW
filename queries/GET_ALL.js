import gql from 'graphql-tag'

const GET_ALL_QUERY = gql`query {
    products(first: 999, where: {category: "worldofrugby", stockStatus: IN_STOCK}) {
        edges {
          node {
            productId
            name
            ... on VariableProduct {
              regularPrice(format: RAW)
            }
            ... on SimpleProduct {
              regularPrice(format: RAW)
            }
            slug
            image {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
  `;

export default GET_ALL_QUERY;