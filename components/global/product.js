import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import Image from '../productComponents/images'
import DataComponent from '../productComponents/data'



const useStyles = makeStyles((theme) => ({

  roota: {
    maxWidth: '70%',
    margin: '64px auto',
    [theme.breakpoints.down('sm')] : {
        maxWidth: '80%',
        margin: '0 auto',
      },
    [theme.breakpoints.down('xs')] : {
        maxWidth: '90%',
        margin: '24px auto',
      },
  },
  productData: {
    maxWidth: '100%',
    margin: '64px auto',
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gridRowGap: '32px',
    gridColumnGap: '6px',
    [theme.breakpoints.down('md')] : {
        maxWidth: '100%',
        margin: '0',
        gridRowGap: '32px',
        gridColumnGap: '6px',
        justifyItems: 'center',
      },
    [theme.breakpoints.down('sm')] : {
        maxWidth: '100%',
        margin: '0',
        gridRowGap: '32px',
        gridColumnGap: '6px',
        justifyItems: 'center',
        gridTemplateColumns: '100%',
      },
    [theme.breakpoints.down('xs')] : {
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
  dataComponent: {
    justifySelf: 'start'
  }
  
}));

const Productview = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const { product } = props
 
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <div className={classes.roota}>
{/* ================================== breadcrumbs ================================== */}

            <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
                <Link className={classes.breadCrumbsLink}  href="/shop">
                <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
                </Link>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">Products</Typography>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">{product.name.toLowerCase()}</Typography>
            </Breadcrumbs>

            

            <div className={classes.productData}>

    {/* ============================= images ===================== */}
                <Image url={product.image.sourceUrl} alt={product.name} gallery={product.galleryImages.nodes} />
    {/* ========================================================== */}

    {/* ================================== Product Data ================================== */}
                <DataComponent variations={product.variations.nodes} className={classes.dataComponent} title={product.name} price={product.regularPrice} salePrice={product.salePrice}  />
     {/* ================================== Product Data ================================== */}        
            </div>

                
        </div>
          

        
    )
}


export default Productview;