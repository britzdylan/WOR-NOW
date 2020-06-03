import gql from "graphql-tag";

const UPDATE_BILING = gql`
mutation ($input: UpdateCustomerInput!) { 
    updateCustomer(input: $input) {
        clientMutationId
        customer {
        email
        billing {
            address1
            address2
            city
            company
            email
            firstName
            lastName
            phone
            postcode
            state
            country
        }
    }
  }
}`;

export default UPDATE_BILING;