import Layout from '../components/mainLayout/layout';

const Shop = ({
  categoriesProp,
}) => {
  if (process.browser) { window.location.href = "/shop/netball" }
  return (
    <Layout>
    </Layout>
  )
};


export default Shop;
