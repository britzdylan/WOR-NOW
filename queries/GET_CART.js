import gql from "graphql-tag";

const GET_CART = gql`
  query Var_Id( $Id: [Int] ) {
    cart {
      appliedCoupons {
        nodes {
          amount
          code
          couponId
          description
        }
      }
      availableShippingMethods {
        rates {
          cost
          id
          label
        }
      }
      chosenShippingMethod
      totalTax
      total
      subtotal
      contents {
        productCount
        nodes {
          key
          quantity
          total
          tax
          product {
            image {
              sourceUrl(size: LARGE)
            }
            productId
            ... on VariableProduct {
              name
              productId
              regularPrice(format: FORMATTED)
              salePrice(format: FORMATTED)
              variations(where: {include: $Id}) {
                nodes {
                  sku
                  variationId
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
              productId
              sku
              regularPrice(format: FORMATTED)
              salePrice(format: FORMATTED)
            }
          }
        }
      }
    }
  }
`;

export default GET_CART;