import CatPreview from '../global/category-preview'
import InfoCard from './components/infoCards'
import FeaturedItem from './components/featured-item'
import Subrcibe from '../global/subscribe'
import Hero from './components/hero'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CategoryBanner from '../homeSection/components/categoryBanner'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '64px auto ',
    maxWidth: '10%',
    [theme.breakpoints.down('sm')]: {
      margin: '24px auto'
    },
  },
  rootA: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      margin: '64px auto',
      display: 'block'
    },
  },
}));




const forYou = (props) => {
  const classes = useStyles();
  const { products, featuredProduct, saleProducts, bestSales, banner } = props;
  const Onsale = true;
  const NotOnSale = false;
  return (
    <div>
      <Hero banner={banner} />
      <InfoCard />
      <Divider className={classes.root} />
      {featuredProduct.length ? (
        featuredProduct.map(featuredProduct => <FeaturedItem key={featuredProduct.node.id} title={featuredProduct.node.name} price={featuredProduct.node.price}
          image={featuredProduct.node.image.sourceUrl} slug={featuredProduct.node.slug} productId={featuredProduct.node.productId} />)
      ) : ''}
      <Divider className={classes.root} />
      <CatPreview products={products} catName="Latest Arrivals" sale={NotOnSale} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'DATE'} />
      <CategoryBanner banner="onsale" description="Items on sale now" sale={Onsale} parentID={216} parent={"latest-products"} slug={"onsale"} filter={'DATE'}/>
      {/* <CatPreview products={saleProducts} catName="On Sale Now" sale={Onsale} parentID={216} parent={"latest-products"} slug={"onsale"} filter={'DATE'} />
      <CatPreview products={bestSales} catName="Best Sellers" sale={NotOnSale} parentID={216} parent={"latest-products"} slug={"best-sellers"} filter={'TOTAL_SALES'} /> */}
      <Divider className={classes.root} />
      <Subrcibe />
      <Divider className={classes.rootA} />
    </div>

  )
}

export default forYou;