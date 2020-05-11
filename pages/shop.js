import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/shopSection/navTabs-shop';



const  shop = (props) => {
const navItems = ['Fan Gear','Boots','Protection','Accessories','Equipment','Clothing'];
  
  return (
     <Layout>
       <NavTabs navItems={navItems} />
     </Layout>
  )
}

export default shop;
