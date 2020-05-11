import { useRouter } from 'next/router';
import client from '../../../components/ApolloClient';
import GET_SUB_CAT from '../../../queries/GET_SUB_CAT';
import CategoryPreview from '../../../components/global/category-preview';
import Layout from '../../../components/mainLayout/layout'
import Subcatnav from '../../../components/shopSection/subcategory-nav';



 

  const SubCatView = (props) => {
    const { products } = props;
    const router = useRouter()
    const { slug, pid } = router.query



    return (
        <Layout>
            <Subcatnav title={slug} 
            />
            {products.length ? (
                products.map( (i, index) =>
                              <CategoryPreview key={index} products={i.node.products.edges} comTitle={i.node.name} catLink={i.node.productCategoryId} />
            )) : '' }
        </Layout>
              

    )
  };

  SubCatView.getInitialProps = async function( context ) {

    let { query: { pid } } = context;
  
     const id = pid 
  
    const res = await client.query(({
      query: GET_SUB_CAT,
      variables: { id }
    }));
  
    return {
      products: res.data.productCategories.edges
    }
  
  };

  
  
  export default SubCatView

