import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/shopSection/navTabs-shop';
import client from '../components/ApolloClient'
import GET_FANGEAR_CAT from '../queries/GET_FANGEAR_CAT';
import GET_BOOTS_CAT from '../queries/GET_BOOTS_CAT';
import GET_CLOTHING_CAT from '../queries/GET_CLOTHING_CAT';
import GET_EQUIPMENT_CAT from '../queries/GET_EQUIPMENT_CAT';
import GET_PROTECTION_CAT from '../queries/GET_PROTECTION_CAT';
import GET_ACCESSORIES_CAT from '../queries/GET_ACCESSORIES_CAT';
import GET_CATEGORIES_1 from '../queries/GET_CATEGORIES_1';

const  Shop = (props) => {
const { fangear, boots, protection, equipment, accessories, clothing, categories } = props;

  return (
     <Layout>
       <NavTabs navItems={categories} fangear={fangear} boots={boots} protection={protection} equipment={equipment} accessories={accessories} clothing={clothing} />
     </Layout>
  )
};


Shop.getInitialProps = async () => {
  const fangear = await client.query( { query:GET_FANGEAR_CAT });
   const boots = await client.query( { query: GET_BOOTS_CAT });
   const protection = await client.query( {query: GET_PROTECTION_CAT});
   const equipment= await client.query( {query: GET_EQUIPMENT_CAT});
   const accessories= await client.query( {query:GET_ACCESSORIES_CAT});
   const clothing= await client.query( {query:GET_CLOTHING_CAT});
   const categories= await client.query( {query: GET_CATEGORIES_1});

  return{
     categories: categories.data.productCategories.edges,
     fangear: fangear.data.productCategories.edges,
     boots: boots.data.productCategories.edges,
     protection: protection.data.productCategories.edges,
     equipment: equipment.data.productCategories.edges,
     accessories: accessories.data.productCategories.edges,
     clothing: clothing.data.productCategories.edges
  }
};

export default Shop;
