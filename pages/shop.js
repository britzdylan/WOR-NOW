import Layout from '../components/mainLayout/layout';
import NavTabs from '../components/shopSection/navTabs-shop';
import client from '../components/ApolloClient';
import GET_CATEGORIES_1 from '../queries/GET_CATEGORIES_1';

const Shop = ({
  categoriesProp,
}) => {

  return (
    <Layout>
      <NavTabs navItems={categoriesProp} index="1" />
    </Layout>
  )
};


export async function getServerSideProps() {
  const categories = await client.query({ query: GET_CATEGORIES_1 });
  const categoriesProp = categories.data.productCategories.edges
  return {
    props: {
      categoriesProp,
    }
  }
}

export default Shop;
