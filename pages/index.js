import Layout from '../components/mainLayout/layout'
import client from '../components/ApolloClient'
import NavTabs from './../components/homeSection/components/navTabs-home';
import FEATURED_QUERY from '../queries/GET_FEATURED_PRODUCT';
import BESTSALES_QUERY from '../queries/GET_BEST_SELLERS';
import SALE_QUERY from '../queries/GET_SALES_PRODUCTS';
import PRODUCT_QUERY from '../queries/GET_FIRST_10';
import { getBanner } from '../api';

const Home = ({
  products,
  featuredProduct,
  saleProducts,
  bestSales,
  banner
}) => {
  // const { products, featuredProduct, saleProducts, bestSales, banner } = props;

  return (
    <Layout>
      <NavTabs products={products} featuredProduct={featuredProduct} saleProducts={saleProducts} bestSales={bestSales} banner={banner} />
    </Layout>
  )
};

export async function getServerSideProps() {
  const result = await client.query({ query: PRODUCT_QUERY });
  const result2 = await client.query({ query: FEATURED_QUERY });
  const result3 = await client.query({ query: SALE_QUERY });
  const result4 = await client.query({ query: BESTSALES_QUERY });
  const allBanners = await getBanner();
  const products = result.data.products.edges
  const featuredProduct = result2.data.products.edges
  const saleProducts = result3.data.products.edges
  const bestSales = result4.data.products.edges
  const banner = allBanners
  return {
    props: {
      products,
      featuredProduct,
      saleProducts,
      bestSales,
      banner
    }
  }
}

// Home.getInitialProps = async () => {
//   const result = await client.query({ query: PRODUCT_QUERY });
//   const result2 = await client.query({ query: FEATURED_QUERY });
//   const result3 = await client.query({ query: SALE_QUERY });
//   const result4 = await client.query({ query: BESTSALES_QUERY });
//   const Banner = await getBanner();

//   return {
//     products: result.data.products.edges,
//     featuredProduct: result2.data.products.edges,
//     saleProducts: result3.data.products.edges,
//     bestSales: result4.data.products.edges,
//     banner: Banner
//   }
// };

export default Home;
