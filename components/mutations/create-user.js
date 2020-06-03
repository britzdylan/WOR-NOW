import gql from "graphql-tag";

const CREATE_USER = gql`
mutation ($input: RegisterCustomerInput!) { 
  registerCustomer(input:$input) {
    customer {
      customerId
    }
    }
  }`;

export default CREATE_USER;