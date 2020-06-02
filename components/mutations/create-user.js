import gql from "graphql-tag";

const CREATE_USER = gql`
mutation ($input: RegisterUserInput!) { 
    registerUser(input: $input) {
      user {
        email
        username
      }
    }
  }`;

export default CREATE_USER;