import gql from 'graphql-tag'

const GET_PRODUCT_BY_ID = gql`query Sub_Category( $id: ID! ) {
  product(id: $id, idType: ID) {
    id
    name
    dateOnSaleFrom
    dateOnSaleTo
    description(format: RENDERED)
    shortDescription(format: RENDERED)
    slug
    ... on VariableProduct {
      id
      price(format: FORMATTED)
      regularPrice(format: FORMATTED)
      variations {
        nodes {
          price(format: FORMATTED)
          regularPrice(format: FORMATTED)
          sku
          variationId
          stockQuantity
          attributes {
            nodes {
              value
            }
          }
        }
      }
    }
    ... on SimpleProduct {
      name
      regularPrice(format: FORMATTED)
      price(format: FORMATTED)
      sku
      id
      stockQuantity
      defaultAttributes {
        nodes {
          value
        }
      }
    }
    image {
      sourceUrl(size: LARGE)
    }
    galleryImages {
      nodes {
        srcSet(size: LARGE)
      }
    }
  }
  }
  
  `

  export default GET_PRODUCT_BY_ID;