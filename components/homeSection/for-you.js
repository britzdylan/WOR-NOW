import CatPreview from '../global/category-preview'
import InfoCard from './components/infoCards'
import FeaturedItem from './components/featured-item'
import Subrcibe from '../global/subscribe'
import Hero from './components/hero'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '64px auto ',
      maxWidth: '10%',
      [theme.breakpoints.down('sm')] : {
        margin: '24px auto'
      },
    },
    rootA: {
      display: 'none',
      [theme.breakpoints.down('md')] : {
        margin: '64px auto',
        display: 'block'
      },
    },
  }));


 

const forYou = (props) => {
    const classes = useStyles();
    const { products, featuredProduct, saleProducts, bestSales } = props;
    return (
        <div>
            <Hero/>
            <InfoCard/>
            <Divider className={classes.root}  />
            { featuredProduct.length ? (
                    featuredProduct.map( featuredProduct =>  <FeaturedItem title={featuredProduct.node.name} price={featuredProduct.node.price}
                         image={featuredProduct.node.image.sourceUrl} slug={featuredProduct.node.slug} productId={featuredProduct.node.productId} /> )
                    ) : '' }
            <Divider className={classes.root}  />
            <CatPreview products={products} catName="Latest Arrivals" />
            <CatPreview products={saleProducts} catName="On Sale Now" />
            <CatPreview products={bestSales} catName="Best Sellers" />
            <Divider className={classes.root} />
            <Subrcibe />
            <Divider className={classes.rootA} />
        </div>
        
    )
}

export default forYou;