import gql from 'graphql-tag'


const POSTS_QUERY = gql`query{
  posts(first: 1000, where: {status: PUBLISH, categoryName: "Hockey"}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        excerpt(format: RENDERED)
        title(format: RENDERED)
        slug
        id
        postId
        featuredImage {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
  }

`;

export default POSTS_QUERY;