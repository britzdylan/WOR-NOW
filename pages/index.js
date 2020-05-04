import Head from 'next/head'
import Layout from '../components/mainLayout/layout'
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';



const Home = (props) => {
  const { products } = props;
  
  return (
     <Layout>
       <div className="product-container">
          <h1>Hello World</h1>
          {/* {console.log(products)} */}
			</div>
     </Layout>
   
    
  )
};

Home.getInitialProps = async () => {
    const res = await fetch( `${clientConfig.siteUrl}/orders` );
    const productsData = await res.json();
    console.log(productsData)
    
    return {
      products: productsData
      
     
    }
  };

  export default Home;
