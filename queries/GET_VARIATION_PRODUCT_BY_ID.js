import gql from 'graphql-tag'

const GET_PRODUCT_BY_ID = gql`query Sub_Category( $ID: ID! ) {
  product(id: $ID, idType: DATABASE_ID) {
    name
    id
    dateOnSaleFrom
    dateOnSaleTo
    description(format: RENDERED)
    productId
    slug
    image {
      sourceUrl(size: LARGE)
    }
    galleryImages {
      nodes {
        sourceUrl(size: LARGE)
      }
    }
    shortDescription(format: RENDERED)
    ... on VariableProduct {
      id
      name
      salePrice(format: FORMATTED)
      regularPrice(format: FORMATTED)
      sku
      variations {
        nodes {
          id
          regularPrice(format: FORMATTED)
          salePrice(format: FORMATTED)
          sku
          stockQuantity
          attributes {
            nodes {
              value
              name
              id
            }
          }
          stockQuantity
          sku
          variationId
        }
        edges {
          node {
            id
          }
        }
      }
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
  }
  }
  
  
  `

  export default GET_PRODUCT_BY_ID;