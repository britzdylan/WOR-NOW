import gql from "graphql-tag";

const ADD_TO_CART = gql`
mutation ($input: ApplyCouponInput!) {
  addToCart(input: $input) {
    cart {
      isEmpty
    }
  }
}

`;

export default ADD_TO_CART;