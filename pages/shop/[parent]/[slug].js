import { useRouter } from 'next/router';
import ProductCard from '../../../components/global/product-card';
import client from '../../../components/ApolloClient';
import Layout from '../../../components/mainLayout/layout'
import { makeStyles } from '@material-ui/core/styles';
import GET_SUB_CAT from '../../../queries/GET_SUB_CAT';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

  root: {
      maxWidth: '70%',
      margin: '64px auto',
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      gridRowGap: '32px',
      gridColumnGap: '24px',
      justifyItems: 'center',
      [theme.breakpoints.down('sm')] : {
          maxWidth: '100%',
          margin: '0',
          gridRowGap: '32px',
          gridColumnGap: '6px',
          justifyItems: 'center',
        },
      [theme.breakpoints.down('xs')] : {
          maxWidth: '100%',
          margin: '24px 0',
          gridTemplateColumns: 'auto auto',
        },
  },
  title: {
      marginTop: '32px'
  }


}));
 

  const SubCatView = (props) => {
    const classes = useStyles();
    const { products, parentA, parentB } = props;
    const router = useRouter()
    const { slug } = router.query

    return (
         <Layout>
         <div>
             <Typography component="h1" variant="h1" align="center" gutterBottom="true" className={classes.title}>products</Typography>

             <div className={classes.root}>
             { products.length ? (
                    products.map( product =>  <ProductCard key={ product.node.id } title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                        sourceUrl} productId={product.node.productId} slug={product.node.slug} onSale={product.node.onSale} /> )
                    ) : '' }
             </div>
         </div>
     </Layout>
              

    )
  };

  SubCatView.getInitialProps = async function( context ) {

    let { query: { cat } } = context;
  
     const id = cat 
  
    const res = await client.query(({
      query: GET_SUB_CAT,
      variables: { id }
    }));
  
    return {
      products: res.data.products.edges
    }
  };

  
  
  export default SubCatView

