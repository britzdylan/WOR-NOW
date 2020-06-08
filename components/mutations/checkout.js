import gql from "graphql-tag";

const CHECKOUT_MUTATION = gql`
mutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    order {
      id
      orderId
      refunds {
        nodes {
          amount
        }
      }
      status
      orderKey
      orderNumber
      paymentMethod
      paymentMethodTitle
      needsPayment
      customerNote
      cartHash
      shippingAddressMapUrl
      shippingTotal(format: FORMATTED)
      transactionId
    }
    result
    redirect
  }
}
`;

export default CHECKOUT_MUTATION;