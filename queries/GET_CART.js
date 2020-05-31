import gql from "graphql-tag";

const GET_CART = gql`
  query {
    cart {
      chosenShippingMethod
      totalTax
      total
      subtotal
      contents {
        productCount
        edges {
          node {
            variation {
              name
              regularPrice(format: FORMATTED)
              salePrice(format: FORMATTED)
              sku
              variationId
              id
              stockQuantity
            }
            extraData {
              key
              value
            }
            quantity
            total
            tax
            product {
              image {
                sourceUrl(size: LARGE)
              }
              name
              id
              description
              productId
              sku
              shortDescription(format: RENDERED)
            }
            key
          }
        }
        itemCount
      }
      availableShippingMethods {
        rates {
          cost
          label
          id
        }
      }
      appliedCoupons {
        edges {
          node {
            amount
            code
            couponId
            description
            id
          }
        }
      }
    }
  }
`;

export default GET_CART;