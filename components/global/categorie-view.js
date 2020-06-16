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
        maxWidth: '80%',
        margin: '64px auto 128px auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            padding: "0 24px"
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            margin: '24px auto',
        },
    },
    rootb: {
        maxWidth: '100%',
        margin: '64px auto',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridRowGap: '32px',
        gridColumnGap: '12px',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '12px',
            justifyItems: 'center',
            gridTemplateColumns: '33% 33% 33%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            margin: '0',
            gridRowGap: '32px',
            gridColumnGap: '6px',
            justifyItems: 'center',
            gridTemplateColumns: '33% 33% 33%',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            margin: '0',
            gridColumnGap: '0',
            gridRowGap: '12px',
            gridTemplateColumns: '50% 50%',
        },
    },
    title: {
        marginTop: '0px',
        lineHeight: '1'
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
    pagination: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '8px 0 78px 0'
    }


}));

const categoryViewComp = (props) => {
    const classes = useStyles();
    const { products, arrayCursor, curPage, hasNextPage, slug, pageName, field, hasPreviousPage, sale, parent, parentID } = props;
    const curCursor = arrayCursor[arrayCursor.length - 1].cursor
    const itemNumA = curPage;
    const itemNumB = (parseInt(itemNumA) - 1).toString();
    const itemNumC = (parseInt(itemNumA) + 1).toString();
    const string = pageName.replace("-", " ");
    const pagename = string.charAt(0).toUpperCase() +
        string.slice(1);
    const count = products.length;
  
    return (
        <div className={classes.roota}>



            <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
                <Link className={classes.breadCrumbsLink} href="/shop">
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
                </Link>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">Category</Typography>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">{parent}</Typography>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">{pagename}</Typography>
            </Breadcrumbs>
            <Typography component="p" variant="subtitle" align="left" gutterBottom="true" className={classes.title}>Showing {count} products on page {itemNumA}</Typography>
            <Typography component="h1" variant="h2" align="left" gutterBottom="true" className={classes.title}>{pagename}</Typography>


            <div className={classes.rootb}>
                {products.length ? (
                    //  products.map(product =>  console.log(product.node.image)
                    //  )

                     products.map(product =>  <ProductCard parent={parent} key={product.node.id} title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image != null ? product.node.image.sourceUrl : '/placeholder-image.jpg'} productId={product.node.productId} type={product.node.type} slug={product.node.slug} />)
                ) : ''}

            </div>



            <div className={classes.pagination}>
                {hasPreviousPage ?
                    <Button onClick={handleClick} color="primary">Previous</Button>
                    : ''}
                {hasPreviousPage ?
                    <PaginationItem page={itemNumB} selected={false} disabled={true} />
                    : ''}
                <PaginationItem page={itemNumA} selected={true} disabled={true} />
                {hasNextPage ?
                    <PaginationItem page={itemNumC} selected={false} disabled={true} />
                    : ''}
                {hasNextPage ?
                    <Link href={{ pathname: `/shop/category/${parent}/${slug}/view`, query: { pageName: `${pageName}`, page: `${itemNumC}`, curCursor: `${curCursor}`, field: `${field}`, sale: `${sale}`, parentID: `${parentID}` } }}  ><Button color="primary">Next</Button></Link>
                    : ""}
            </div>

        </div>
    )
}




export default categoryViewComp