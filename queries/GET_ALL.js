import gql from 'graphql-tag'

const GET_ALL_QUERY = gql`query {
  products(where: {stockStatus: IN_STOCK, categoryId: 216}, first: 999, after: "") {
    edges {
      node {
        productId
        name
        slug
        image {
          sourceUrl(size: LARGE)
        }
        ... on VariableProduct {
          id
          name
          regularPrice(format: FORMATTED)
        }
        ... on SimpleProduct {
          name
          regularPrice(format: FORMATTED)
        }
        productTags {
          nodes {
            name
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
    }
  `;

export default GET_ALL_QUERY;