import gql from "graphql-tag";

const ADD_TO_CART = gql`
mutation ($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      isEmpty
    }
  }
}

`;

export default ADD_TO_CART;