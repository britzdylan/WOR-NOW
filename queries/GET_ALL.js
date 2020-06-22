import gql from 'graphql-tag'

const GET_ALL_QUERY = gql`query {
    products(first: 999, where: {categoryId: 224, stockStatus: IN_STOCK}) {
        edges {
          node {
            productId
            name
            ... on VariableProduct {
              regularPrice(format: FORMATTED)
            }
            ... on SimpleProduct {
              regularPrice(format: FORMATTED)
            }
            slug
            image {
              sourceUrl(size: LARGE)
            }
            productTags {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `;

export default GET_ALL_QUERY;