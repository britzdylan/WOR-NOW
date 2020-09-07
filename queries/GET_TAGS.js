
import gql from 'graphql-tag'

const GET_TAGS_1 = gql`query get_queries {
    productTags(where: { shouldOnlyIncludeConnectedItems: true, shouldOutputInFlatList: true, hideEmpty: true, exclude: "787,986,1145,1137,1151,1152" }, first: 999) {
        edges {
            node {
                id
                name
                databaseId
            }
        }
    }
    }`

export default GET_TAGS_1;