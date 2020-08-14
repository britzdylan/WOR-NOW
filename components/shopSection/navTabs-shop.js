import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductCard from '../global/product-card';
import { useQuery } from "@apollo/react-hooks";
import GET_PRODUCTS from "../../queries/GET_PROD_FOR_MAIN_CATEGORIES";
import Skeleton from '@material-ui/lab/Skeleton';
import Link from 'next/link'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}
          className={classes.rootA} //fixes auto padding
        >
          <Typography
            className={classes.rootA} //fixes auto padding
          >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootA: {
    padding: '0 !important',
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none'
  },
  tabPanel: {
    maxWidth: '100%',
    color: "black",
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      margin: '0'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      margin: '0'
    },
  },
  rootb: {
    maxWidth: '80%',
    margin: '64px auto 128px auto',
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
}));



const NavTabs = (props) => {
  const { index } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(parseInt(index));
  const [parentId, setparentId] = React.useState('cHJvZHVjdF9jYXQ6ODg2');
  const [product, setProducts] = React.useState([]);
  const { navItems } = props;
  const handleChange = (event, newValue) => {
    setProducts([]);
    setValue(newValue);
    setparentId(parents[newValue]);
    setTimeout(() => { refetch }, 2000);

  };
  const parents = [];
  // navItems.length ? (
  //   navItems.map((navItem, index) => parents.push(navItem.node.id)
  //   )) : null
  const NotOnSale = false;

  // Get products Data.
  // const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     ID: parentId
  //   },
  //   notifyOnNetworkStatusChange: true,
  //   onCompleted: (data) => {
  //     setProducts(data.productCategory.products.edges);
  //   }
  // });

  const preLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          component="nav"
          className={classes.tabPanel}
          textColor='primary'
          indicatorColor='primary'
          navitems={navItems}
        >
          <Link href={{ pathname: `/shop/fan-gear` }} ><LinkTab key={index} label="Fan Gear"  {...a11yProps(0)} /></Link>
          <Link href={{ pathname: `/shop/clothing` }} ><LinkTab key={index} label="Clothing"  {...a11yProps(1)} /></Link>
          <Link href={{ pathname: `/shop/rugby-boots` }} ><LinkTab key={index} label="Boots"  {...a11yProps(2)} /></Link>
          <Link href={{ pathname: `/shop/rugby-protection` }} ><LinkTab key={index} label="Protection"  {...a11yProps(3)} /></Link>
          <Link href={{ pathname: `/shop/rugby-equipment` }} ><LinkTab key={index} label="Equipment"  {...a11yProps(4)} /></Link>
          <Link href={{ pathname: `/shop/rugby-accessories` }} ><LinkTab key={index} label="Accessories"  {...a11yProps(5)} /></Link>
        </Tabs>
      </AppBar>
    </main>
  );
}

export default NavTabs;