import Layout from '../components/mainLayout/layout'
import client from '../components/ApolloClient'
import NavTabs from './../components/homeSection/components/navTabs-home';
import PRODUCT_QUERY from '../queries/GET_FIRST_10';
import ForYou from '../components/homeSection/for-you'
import { getBanner } from '../api';


const Home = ({
  products,
  banner
}) => {

  return (
    <Layout>
      <NavTabs index="1" />
      <ForYou products={products} banner={banner} />
    </Layout>
  )
};

export async function getServerSideProps() {
  const result = await client.query({ query: PRODUCT_QUERY });
  const allBanners = await getBanner();
  const products = result.data.products.edges
  const banner = allBanners
  return {
    props: {
      products,
      banner
    }
  }
}
export default Home;
