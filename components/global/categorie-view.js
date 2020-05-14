import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/global/product-card';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import PaginationItem from '@material-ui/lab/PaginationItem';

function handleClick(event) {
    event.preventDefault();
    window.history.back();
  }

  const useStyles = makeStyles((theme) => ({

    roota: {
        maxWidth: '70%',
        margin: '64px auto',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',
            margin: '0',
          },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '100%',
            margin: '24px 0',
          },
    },
    rootb: {
        maxWidth: '70%',
        margin: '64px auto',
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        gridRowGap: '32px',
        gridColumnGap: '24px',
        justifyItems: 'center',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '6px',
            justifyItems: 'center',
          },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '100%',
            margin: '24px 0',
            gridColumnGap: '3px',
            gridRowGap: '12px',
            gridTemplateColumns: '50% 50%',
          },
    },
    title: {
        marginTop: '32px'
    },
    breadCrumbsLink: {
        color: '#C4C4C4'
        
    },
    breadCrumbs: {
        padding: '12px'
    },
    pagination: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '8px 0 78px 0'
    }


}));

const categoryViewComp = (props) => {
    const classes = useStyles();
    const { products, arrayCursor, curPage, hasNextPage, slug, pageName, field, hasPreviousPage, sale } = props;
    const curCursor = arrayCursor[arrayCursor.length -1].cursor
    const itemNumA = curPage;
    const itemNumB = (parseInt(itemNumA) - 1).toString();
    const itemNumC = (parseInt(itemNumA) +1).toString();
    const string = pageName.replace("-", " ");
    const pagename = string.charAt(0).toUpperCase() + 
    string.slice(1);

    return (
        <div className={classes.roota}>
        <Typography component="h1" variant="h1" align="center" gutterBottom="true" className={classes.title}>{pagename}</Typography>
        
        
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
            <Link className={classes.breadCrumbsLink}  href="/shop">
            <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
            </Link>
            <Typography className={classes.breadCrumbsLink} color="textPrimary">All products</Typography>
            <Typography className={classes.breadCrumbsLink} color="textPrimary">{pagename}</Typography>
        </Breadcrumbs>

        
        <div className={classes.rootb}>
        { products.length ? (
                products.map( product =>  <ProductCard key={ product.node.id } title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image.
                    sourceUrl} productId={product.node.productId} slug={product.node.slug} onSale={product.node.onSale} /> )
                ) : '' }
         
        </div>



        <div className={classes.pagination}>
        { hasPreviousPage ?  
                <Button onClick={handleClick} color="primary">Previous</Button>
            : '' }
            { hasPreviousPage ?  
                <PaginationItem page={itemNumB} selected={false} disabled={true}/>
            : '' }
            <PaginationItem page={itemNumA} selected={true} disabled={true}/>
            { hasNextPage ?  
                <PaginationItem page={itemNumC} selected={false} disabled={true}/>
            : '' }
            { hasNextPage ?
            <Link href={{ pathname: `/shop/all-products/${slug}/view`, query:  {pageName: `${pageName}` , page: `${itemNumC}`, curCursor: `${curCursor}`, field: `${field}`, sale: `${sale}`}}}  ><Button  color="primary">Next</Button></Link>
            : "" }
        </div>
       
    </div>
    )
}




export default categoryViewComp