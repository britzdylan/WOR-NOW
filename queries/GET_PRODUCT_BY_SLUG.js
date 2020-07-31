import gql from 'graphql-tag'

const GET_PRODUCT_BY_SLUG = gql`query Product_by_slug($ID: ID!) { 
    product(id: $ID, idType: SLUG) {
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
    }
    ... on SimpleProduct {
      id
      sku
      regularPrice(format: FORMATTED)
      salePrice(format: FORMATTED)
      stockQuantity
    }
  }
}`

export default GET_PRODUCT_BY_SLUG;