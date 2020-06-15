import gql from 'graphql-tag'


const PRODUCT_QUERY =  gql`query{
  products(first: 4, where: {category: "worldofrugby", stockStatus: IN_STOCK, orderby: {field: DATE, order: DESC}}, after: "") {
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

  export default PRODUCT_QUERY;