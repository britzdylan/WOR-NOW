import gql from 'graphql-tag'


const POST_QUERY = gql`query Post( $ID: ID! ){
  postBy(id: $ID) {
    id
    content(format: RENDERED)
    title(format: RENDERED)
    featuredImage {
      sourceUrl(size: LARGE)
    }
  }
  }

`;

export default POST_QUERY;