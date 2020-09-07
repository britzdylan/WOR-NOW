import gql from 'graphql-tag'

const GET_PRODUCTS_BY_CATEGORY = gql`query Sub_Category( $next: String!, $filter : ProductsOrderByEnum!, $Onsale: Boolean!, $ID: Int!, $isFeatured: Boolean!, $newOrder: OrderEnum! ) {
    products(first: 20, where: {categoryId: $ID, orderby: {field: $filter, order: $newOrder},onSale: $Onsale,featured: $isFeatured, stockStatus: IN_STOCK,  search: ""}, after: $next) {
      edges {
        node {
          name
          id
          productId
          image {
            sourceUrl(size: WOOCOMMERCE_SINGLE)
          }
          slug
          type
          ... on VariableProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            regularPrice
            salePrice(format: FORMATTED)
          }
          productTags(where: {shouldOutputInFlatList: true, shouldOnlyIncludeConnectedItems: true}) {
            nodes {
              name
            }
          }
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
  
  }
  
  `

export default GET_PRODUCTS_BY_CATEGORY;