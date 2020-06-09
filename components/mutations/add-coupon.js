import gql from "graphql-tag";

const ADD_COUPON = gql`
mutation ($input: ApplyCouponInput!) {
    applyCoupon(input: $input) {
        clientMutationId
    }
}`;

export default ADD_COUPON;