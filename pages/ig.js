import Layout from '../components/mainLayout/layout'
import { makeStyles } from '@material-ui/core/styles';
import { IgFetch } from "../ig-api"
import { Typography, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "64px auto",
    maxWidth: "960px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  item: {
    width: "300px",
    height: "300px",
    overflow: "hidden",
    padding: "12px",
    [theme.breakpoints.down('sm')]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "150px",
      height: "150px",
    }
  },
  heading: {
    textAlign: "center",
    margin: "64px 0 0 0"
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    [theme.breakpoints.down('sm')]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "150px",
      height: "150px",
    }
  }
}));

const Blog = ({ result }) => {
  const classes = useStyles();

  console.log(result)
  return (
    <Layout>
      <div className={classes.heading}>

        <Typography gutterBottom={true} variant="h1">Shop on our Instagram</Typography>

        <a href="https://www.instagram.com/worldofrugby_sa/" target="_blank"><Button variant="contained" color="primary" size="large" >Go to Instagram</Button></a>
      </div>
      <div className={classes.container}>
        {result.data.length ? (
          result.data.map((item, index) =>

            <a href={item.permalink} target="_blank">
              <div className={classes.item}>
                <img alt="" className={classes.image} src={item.thumbnail_url ? item.thumbnail_url : item.media_url} key={index} />
              </div>
            </a>
          )
        ) : null}
      </div>
    </Layout>
  )
};

export async function getStaticProps() {
  const result = await IgFetch();
  return {
    props: {
      result
    }
  }
}


export default Blog;
