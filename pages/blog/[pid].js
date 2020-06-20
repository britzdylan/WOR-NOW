import Layout from '../../components/mainLayout/layout'
import client from '../../components/ApolloClient'
import POST_QUERY from '../../queries/GET_POST';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    rootA : {
        maxWidth: '70%',
        margin: '64px auto', 
        [theme.breakpoints.down('md')] : {
            maxWidth: '80%',
          },
        [theme.breakpoints.down('sm')] : {
            maxWidth: '95%',
          },
    },
    title: {
        textAlign: "center",
    },
    content: {
        maxWidth: "750px",
        margin: "64px auto",
        overflow: "hidden"
    },
    image: {
        maxWidth: "750px",
        margin: "0 auto"
    }
}));

const article = (props) => {
  const { post } = props;
  const classes = useStyles();
  return (
     <Layout>
         <div className={classes.rootA}>
            <h1 className={classes.title}
                dangerouslySetInnerHTML={ {
                    __html: post.title,
                } }
            />
            <div className={classes.image}>
                <img width="100%" height="100%" alt={post.title} src={post.featuredImage != null ? post.featuredImage.sourceUrl : '/placeholder-image.jpg'} />
            </div>
            <Divider/>
            <div className={classes.content}
             dangerouslySetInnerHTML={ {
                __html: post.content,
            } }
            />
         </div>
     </Layout>
  )
};

article.getInitialProps = async (context) => {
    let { query: { id }  } = context;
    const ID = id
    const result = await client.query( { query:POST_QUERY,variables: { ID } } );

  return{
    post: result.data.postBy
  }
};

export default article;
