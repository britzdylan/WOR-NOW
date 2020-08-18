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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


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
  }
}));




const forYou = (props) => {
  const classes = useStyles();
  const { products, banner, saleItems } = props;
  const Onsale = true;
  const NotOnSale = false;
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <div>
      <Hero banner={banner} />


      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        Controller
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img width="1280px" src="/banner.jpg" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}


      <InfoCard />
      <Divider className={classes.root} />
      <div className={classes.catBar} >
        <Typography className={classes.catName} align="center" variant="subtitle2">Top Picks</Typography>
      </div>
      <div className={classes.Banners}>
        <CategoryBanner banner="sale" sale={Onsale} parentID={216} parent={"all-products"} slug={"onsale"} filter={'DATE'} />
        <CategoryBanner banner="popular" sale={NotOnSale} parentID={216} parent={"all-products"} slug={"popular"} filter={'TOTAL_SALES'} />
      </div>
      <Divider className={classes.root} />
      <CatPreview products={products} catName="Latest Arrivals" sale={NotOnSale} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'DATE'} />
      <Divider className={classes.root} />
      <CatPreview products={saleItems} catName="Items On Sale" sale={Onsale} parentID={216} parent={"latest-products"} slug={"latest-products"} filter={'DATE'} />
      <div className={classes.catButton} >
        <Link href={{ pathname: `/shop/all-products/onsale`, query: { page: `1`, curCursor: ``, field: `DATE`, sale: `true`, parentID: `216` } }}><Button  >View More</Button></Link>
      </div>
      <Divider className={classes.root} />
      <Subrcibe />
      <Divider className={classes.rootA} />
    </div >

  )
}

export default forYou;