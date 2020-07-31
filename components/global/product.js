import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import Image from '../productComponents/images'
import DataComponent from '../productComponents/data'
import Details from '../productComponents/details'
import Upsell from '../productComponents/upsell'
import Mobi from './mobiCredCalc';


const useStyles = makeStyles((theme) => ({

  roota: {
    maxWidth: '70%',
    margin: '64px auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      margin: '0 auto 128px auto',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
      margin: '24px auto 128px auto',
    },
  },
  productData: {
    width: '900px',
    margin: '64px auto',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridRowGap: '8px',
    gridColumnGap: '0px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '900px',
      margin: '0',
      gridRowGap: '32px',
      gridColumnGap: '0px',
      justifyItems: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      margin: '0',
      gridRowGap: '32px',
      gridColumnGap: '0px',
      justifyItems: 'center',
      gridTemplateColumns: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      margin: '24px 0',
      gridColumnGap: '3px',
      gridRowGap: '12px',
      gridTemplateColumns: '100%',
    },
  },
  breadCrumbsLink: {
    color: '#C4C4C4',
    textDecoration: 'underline',
    cursor: 'pointer'

  },
  breadCrumbs: {
    padding: '12px 0',
    margin: '24px 0 0 0'
  },
  calc: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "left",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#E8E8E8",
    padding: "6px 12px",
    borderRadius: "8px"
  },
  calcTitle: {
    marginRight: "24px"
  }

}));

const Productview = (props) => {
  const classes = useStyles();
  const { product } = props

  return (
    <div className={classes.roota}>
      {/* ================================== breadcrumbs ================================== */}

      <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
        <Link href="/shop">
          <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
        </Link>
        <Typography className={classes.breadCrumbsLink} color="textPrimary">Products</Typography>
        <Typography className={classes.breadCrumbsLink} color="textPrimary">{product.name.toLowerCase()}</Typography>
      </Breadcrumbs>



      <div className={classes.productData}>

        {/* ============================= images ===================== */}
        <Image url={product.image != null ? product.image.sourceUrl : "/placeholder-image.jpg"} alt={product.name} />
        {/* ========================================================== */}

        {/* ================================== Product Data ================================== */}
        <DataComponent product={product} simpleSku={product.sku} stockQuantity={product.stockQuantity} className={classes.dataComponent} title={product.name} price={product.regularPrice} salePrice={product.salePrice} />
        {/* ================================== Product Data ================================== */}

      </div>
      <div className={classes.calc}>
        <div className={classes.calcTitle}>
          <Typography variant="h4" gutterBottom={true}>Get This on credit</Typography>
          <a href="https://live.mobicred.co.za/cgi-bin/wspd_cgi.sh/WService=wsb_mcrliv/run.w?run=application&merchantID=4311&returnUrl=https://worldofrugby.co.za" target="_blank">
            <Typography variant="subtitle2" gutterBottom={true}>Apply today</Typography>
          </a>
        </div>

        <Mobi ammount={product.regularPrice} />
      </div>

      {/* ================================== Product Details ================================== */}
      <Details description={product.description} />
      {/* ================================== Product Details ================================== */}


      {/* <Upsell products={product.related.nodes} /> */}
    </div>



  )
}


export default Productview;