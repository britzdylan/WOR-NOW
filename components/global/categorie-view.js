import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/global/product-card';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Typography } from '@material-ui/core';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { useRouter } from 'next/router';


function handleClick(event) {
    event.preventDefault();
    window.history.back();
}

const useStyles = makeStyles((theme) => ({

    roota: {
        maxWidth: '1200px',
        margin: '4px auto 128px auto',
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
        lineHeight: '0.5'
    },
    breadCrumbsLink: {
        color: '#C4C4C4',
        textDecoration: 'underline',
        cursor: 'pointer'

    },
    breadCrumbs: {
        padding: '12px 0',
        marginBottom: '32px'
    },
    pagination: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '8px 0 78px 0'
    },
    formContainer: {
        display: "flex",

    },
    formItem: {
        margin: "0 12px"
    },


}));

const categoryViewComp = (props) => {
    const classes = useStyles();
    const router = useRouter()
    const { products, arrayCursor, curPage, hasNextPage, slug, page, field, hasPreviousPage, sale, parent, parentID, Order } = props;
    const curCursor = arrayCursor[arrayCursor.length - 1].cursor
    const itemNumA = curPage;
    const itemNumB = (parseInt(itemNumA) - 1).toString();
    const itemNumC = (parseInt(itemNumA) + 1).toString();
    const count = products.length;

    const [sort, setSort] = React.useState(field);
    const [sortBy, setSortBy] = React.useState(Order);

    const handleChange = (event) => {
        setSort(event.target.value);
        router.push({ pathname: `/shop/${parent}/${slug}`, query: { page: `1`, curCursor: ``, field: `${event.target.value}`, sale: `${sale}`, parentID: `${parentID}`, Order: `${sortBy}` } })

    };
    const handleChangeSortby = (event) => {
        setSortBy(event.target.value);
        router.push({ pathname: `/shop/${parent}/${slug}`, query: { page: `1`, curCursor: ``, field: `${sort}`, sale: `${sale}`, parentID: `${parentID}`, Order: `${event.target.value}` } })

    };

    const sortItems = [{ value: 'DATE', title: 'Date' }, { value: 'PRICE', title: 'Price' }, { value: 'TOTAL_SALES', title: 'Popularity' }];


    return (
        <div className={classes.roota}>



            <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
                <Link className={classes.breadCrumbsLink} href="/shop">
                    <Typography className={classes.breadCrumbsLink} color="textPrimary">Shop</Typography>
                </Link>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">Category</Typography>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">{parent}</Typography>
                <Typography className={classes.breadCrumbsLink} color="textPrimary">{page}</Typography>
            </Breadcrumbs>
            <Typography component="h1" variant="h4" align="left" gutterBottom="false" className={classes.title}>{page}</Typography>
            <Typography component="p" variant="subtitle" align="left" gutterBottom="true" className={classes.title}>Showing {count} products on page {itemNumA}</Typography>

            {/* add new filter options here */}


            <div className={classes.formContainer}>
                <div className={classes.formItem}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="sort">Sort By</InputLabel>
                        <Select
                            labelId="sort"
                            id="sort-select"
                            value={sort}
                            onChange={handleChange}
                            autoWidth="true"
                        >
                            {sortItems.map((item, index) => <MenuItem key={index} value={item.value}>{item.title}</MenuItem>)}

                        </Select>
                    </FormControl>
                </div>
                <div className={classes.formItem}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="sortBy">Order By</InputLabel>
                        <Select
                            labelId="sortBy"
                            id="sortBy-select"
                            value={Order}
                            onChange={handleChangeSortby}
                            autoWidth="true"
                        >
                            <MenuItem value="ASC">Ascending</MenuItem>
                            <MenuItem value="DESC">Descending</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>




            {/* =========================== */}
            <div className={classes.rootb}>
                {products.length ? (
                    //  products.map(product =>  console.log(product.node.image)
                    //  )

                    products.map(product => <ProductCard parent={parent} key={product.node.id} title={product.node.name} price={product.node.regularPrice} salePrice={product.node.salePrice} image={product.node.image != null ? product.node.image.sourceUrl : '/placeholder-image.jpg'} productId={product.node.productId} type={product.node.type} slug={product.node.slug} />)
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
                    <Link href={{ pathname: `/shop/${parent}/${slug}`, query: { page: `${itemNumC}`, curCursor: `${curCursor}`, field: `${sort}`, sale: `${sale}`, parentID: `${parentID}`, Order: `${Order}` } }}  ><Button color="primary">Next</Button></Link>
                    : ""}
            </div>

        </div>
    )
}




export default categoryViewComp