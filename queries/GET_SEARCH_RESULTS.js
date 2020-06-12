import gql from 'graphql-tag'


const SEARCH_RESULTS = gql`query search( $term: String! ){
    products(where: {search: $term, stockStatus: IN_STOCK, category: "worldofrugby"}, first: 500) {
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
            type
          }
          cursor
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
          hasPreviousPage
        }
      }
}`;

export default SEARCH_RESULTS;