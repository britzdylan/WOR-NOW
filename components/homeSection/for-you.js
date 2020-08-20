import CatPreview from '../global/category-preview'
import InfoCard from './components/infoCards'
import FeaturedItem from './components/featured-item'
import Subrcibe from '../global/subscribe'
import Hero from './components/hero'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CategoryBanner from '../homeSection/components/categoryBanner'
import Button from '@material-ui/core/Button';
import Link from 'next/link'
// Import Swiper React components
import React from 'react';
import Slider from "react-slick";


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
  Banners: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  catBar: {
    padding: '16px',
    margin: "16px 0",
    letterSpacing: "2px",
    [theme.breakpoints.down('md')]: {
      padding: '16px 32px'
    },


  },
  catName: {
    margin: "0 16px",
    fontSize: "18px",
    color: "#6b6b6b",
    textAlign: "center",
    fontWeight: "400",
    '&::after': {
      position: "relative",
      display: "block",
      width: "40px",
      height: "3px",
      background: "red",
      borderRadius: "50px",
      margin: "1rem auto",
      content: '" "',
      transform: "rotate(-5deg)"
    }
  },
  catButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "black"
  },
  slider: {
    margin: "24px 0"
  }
}));




const forYou = (props) => {
  const classes = useStyles();
  const { products, saleItems, featItems } = props;
  const Onsale = true;
  const NotOnSale = false;
  const banners = [{ src: "/banner1.jpg", link: "/shop/fan-gear" }, { src: "/banner4.jpg", link: "/shop/rugby-boots" }]
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    pauseOnHover: true
  };
  return (
    <div>
      {/* //<Hero banner={banner} /> */}

      <Slider className={classes.slider} {...settings}>
        {banners.map((item, index) =>
          <div index={index}>
            <Hero src={item.src} link={item.link} />
          </div>
        )}
      </Slider>

      <InfoCard />
      <Divider className={classes.root} />
      <div className={classes.catBar} >
        <Typography className={classes.catName} align="center" variant="subtitle2">Top Picks</Typography>
      </div>
      <div className={classes.Banners}>
        <CategoryBanner banner="sale" isFeat={false} sale={Onsale} parentID={216} parent={"all-products"} slug={"onsale"} filter={'DATE'} />
        <CategoryBanner banner="popular" isFeat={false} sale={NotOnSale} parentID={216} parent={"all-products"} slug={"popular"} filter={'TOTAL_SALES'} />
      </div>
      <CatPreview products={featItems} catName="Featured Today" sale={NotOnSale} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'DATE'} />
      <div className={classes.catButton} >
        <Link href={{ pathname: `/shop/all-products/featured`, query: { page: `1`, curCursor: ``, field: `DATE`, sale: `false`, parentID: `216`, isFeat: `true` } }}><Button  >View More</Button></Link>
      </div>
      <Divider className={classes.root} />
      <CatPreview products={products} catName="Latest Arrivals" sale={NotOnSale} isFeat={false} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'DATE'} />
      <Divider className={classes.root} />
      <CatPreview products={saleItems} catName="Items On Sale" sale={Onsale} isFeat={false} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'MODIFIED'} />
      <div className={classes.catButton} >
        <Link href={{ pathname: `/shop/all-products/onsale`, query: { page: `1`, curCursor: ``, field: `DATE`, sale: `true`, parentID: `216`, isFeat: `false` } }}><Button  >View More</Button></Link>
      </div>
      <Divider className={classes.root} />
      <Subrcibe />
      <Divider className={classes.rootA} />
    </div >

  )
}

export default forYou;