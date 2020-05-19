import gql from 'graphql-tag'

const GET_PRODUCT_BY_ID = gql`query Sub_Category( $ID: ID! ) {
  product(id: $ID, idType: DATABASE_ID) {
    name
    id
    dateOnSaleFrom
    dateOnSaleTo
    description(format: RENDERED)
    productId
    sku
    slug
    image {
      sourceUrl(size: LARGE)
    }
    galleryImages {
      nodes {
        sourceUrl(size: LARGE)
      }
    }
    ... on SimpleProduct {
      id
      sku
      regularPrice(format: FORMATTED)
      salePrice(format: FORMATTED)
      stockQuantity
      related(first: 4) {
        nodes {
          name
          id
          productId
          sku
          slug
          ... on VariableProduct {
            name
            regularPrice(format: FORMATTED)
            salePrice(format: FORMATTED)
          }
          ... on SimpleProduct {
            id
            name
            salePrice(format: FORMATTED)
            regularPrice(format: FORMATTED)
          }
          image {
            sourceUrl(size: LARGE)
          }
          type
        }
      }
    }
    shortDescription(format: RENDERED)
  }
  }
  
  `

  export default GET_PRODUCT_BY_ID;