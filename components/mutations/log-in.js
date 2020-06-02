import gql from "graphql-tag";

const LOG_IN = gql`
mutation ($input: LoginInput!) {
    login(input: $input) {
    authToken
    clientMutationId
    refreshToken
    customer {
      firstName
      lastName
      billing {
        firstName
        lastName
        company
        country
        address1
        address2
        city
        state
        postcode
        phone
        email
      }
      email
      id
      orders {
        edges {
          node {
            currency
            customerNote
            date
            dateCompleted
            datePaid
            discountTotal(format: FORMATTED)
            id
            needsPayment
            orderId
            orderKey
            orderNumber
            orderVersion
            paymentMethod
            paymentMethodTitle
            shippingTotal(format: FORMATTED)
            status
            subtotal(format: FORMATTED)
            total(format: FORMATTED)
            totalTax(format: FORMATTED)
            transactionId
            shipping {
              address1
              address2
              city
              company
              country
              email
              firstName
              lastName
              postcode
              state
              phone
            }
            lineItems {
              edges {
                node {
                  itemId
                  productId
                  quantity
                  subtotal
                  total
                  totalTax
                  variationId
                  product {
                    name
                  }
                }
              }
            }
          }
        }
      }
      customerId
      date
      username
      shipping {
        address1
        address2
        company
        city
        email
        country
        firstName
        lastName
        phone
        postcode
        state
      }
    }
    }
}`;

export default LOG_IN;