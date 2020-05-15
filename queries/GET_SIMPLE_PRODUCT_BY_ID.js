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
    }
    shortDescription(format: RENDERED)
  }
  }
  
  `

  export default GET_PRODUCT_BY_ID;