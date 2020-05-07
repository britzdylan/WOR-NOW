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
    },
  }));


 

const forYou = (props) => {
    const classes = useStyles();
    const { products, featuredProduct, saleProducts } = props;
    console.log(saleProducts);
    return (
        <div>
            <Hero/>
            <InfoCard/>
            <Divider className={classes.root}  />
            <CatPreview products={products} comTitle="Latest Arrivals" />
            //<CatPreview products={saleProducts} comTitle="On Sale Now" />
            {/* <CatPreview  />   */}
            <Divider className={classes.root}/>
            { featuredProduct.length ? (
                    featuredProduct.map( featuredProduct =>  <FeaturedItem title={featuredProduct.node.name} price={featuredProduct.node.price}
                         image={featuredProduct.node.image.sourceUrl} slug={featuredProduct.node.slug} productId={featuredProduct.node.productId} /> )
                    ) : '' }
            <Divider className={classes.root} />
            <Subrcibe />
        </div>
        
    )
}

export default forYou;