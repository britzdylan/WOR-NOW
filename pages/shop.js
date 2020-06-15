import Layout from '../components/mainLayout/layout';
import NavTabs from '../components/shopSection/navTabs-shop';
import client from '../components/ApolloClient';
import GET_CATEGORIES_1 from '../queries/GET_CATEGORIES_1';


const Shop = ({
  categoriesProp,}) => {

  return (
    <Layout>
      <NavTabs navItems={categoriesProp} />
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


// Shop.getInitialProps = async () => {
//   const fangear = await client.query({ query: GET_FANGEAR_CAT });
//   const boots = await client.query({ query: GET_BOOTS_CAT });
//   const protection = await client.query({ query: GET_PROTECTION_CAT });
//   const equipment = await client.query({ query: GET_EQUIPMENT_CAT });
//   const accessories = await client.query({ query: GET_ACCESSORIES_CAT });
//   const clothing = await client.query({ query: GET_CLOTHING_CAT });
//   const categories = await client.query({ query: GET_CATEGORIES_1 });

//   return {
//     categories: categories.data.productCategories.edges,
//     fangear: fangear.data.productCategories.edges,
//     boots: boots.data.productCategories.edges,
//     protection: protection.data.productCategories.edges,
//     equipment: equipment.data.productCategories.edges,
//     accessories: accessories.data.productCategories.edges,
//     clothing: clothing.data.productCategories.edges
//   }
// };

export default Shop;
