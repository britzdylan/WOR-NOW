import Layout from '../components/mainLayout/layout'
import client from '../components/ApolloClient'
import NavTabs from '../components/blogSection/nav-tabs-blog';
import POST_QUERY from '../queries/GET_POSTS';


const Blog = (props) => {
  const { posts } = props;
  return (
     <Layout>
       <NavTabs posts={posts}  />
     </Layout>
  )
};

Blog.getInitialProps = async () => {
    const result = await client.query( { query:POST_QUERY });

  return{
    posts: result.data.posts.edges
  }
};

export default Blog;
