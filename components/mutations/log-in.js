import gql from "graphql-tag";

const LOG_IN = gql`
mutation ($input: LoginInput!) {
    login(input: $input) {
        authToken
        refreshToken
        user {
            email
            firstName
            lastName
            username
            databaseId
          }
    }
}`;

export default LOG_IN;