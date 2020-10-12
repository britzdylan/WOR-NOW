import Layout from '../components/mainLayout/layout'
import client from '../components/ApolloClient'
import NavTabs from './../components/homeSection/components/navTabs-home';
import PRODUCT_QUERY from '../queries/GET_FIRST_10';
import ForYou from '../components/homeSection/for-you'
import { getBanner } from '../api';
import { NextSeo } from 'next-seo';

const Home = ({
  products
}) => {

  return (
    <Layout>
      <NextSeo
        title="SA's largest online hockey store"
        description="Visit WorldofNetball for great prices on hockey sticks, hockey shoes, base layer clothing, hockey jerseys, hockey equipment, shin guards and protection."
        canonical="https://www.WorldofNetball.co.za"
        openGraph={{
          title: "SA's largest online hockey store",
          description: "Visit WorldofNetball for great prices on hockey sticks, hockey shoes, base layer clothing, hockey jerseys, hockey equipment, shin guards and protection.",
          images: ""
        }}
      />
      <NavTabs index="0" />
      <ForYou products={products} />
    </Layout>
  )
};

export async function getServerSideProps() {
  const result = await client.query({ query: PRODUCT_QUERY });
  const products = result.data.products.edges
  return {
    props: {
      products
    }
  }
}
export default Home;
