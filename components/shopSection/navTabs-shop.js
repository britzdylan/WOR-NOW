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
          event.preventDefault();
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
    padding:'0 !important',
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none'
  },
  tabPanel: {
      maxWidth: '50%',
      marginRight: 'auto',
      marginLeft: 'auto',
    [theme.breakpoints.down('sm')] : {
        maxWidth: '100%',
        margin: '0'
      },
      [theme.breakpoints.down('md')] : {
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



const NavTabs =(props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
  navItems.length ? (
    navItems.map((navItem, index) => parents.push(navItem.node.id)
    )) : null
  const NotOnSale = false;

   // Get products Data.
   const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
     variables : {
       ID : parentId
     },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
          setProducts(data.productCategory.products.edges);
    }
  });

const preLoad = [1,2,3,4,5,6,7,8,9,10];

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
          textColor= 'primary'
          indicatorColor= 'primary'
          navItems={navItems}
        >
            { navItems.length ? (
                navItems.map((navItem, index) =>
                <LinkTab key={index} label={navItem.node.name}  href={`/${navItem.node.name}`} {...a11yProps({index})} />
            )) : ''}
        </Tabs>
      </AppBar>
        {/* call the content for each tab */}
        { parents.length ? (
                parents.map( (parent, index) =>
                    <TabPanel value={value} index={index} key={index}  >
                      <div className={classes.rootb}>
                        {loading ? preLoad.map((
                          item =><div>
                                  <Skeleton animation="wave" variant="rect" width={300} height={300} />
                                  <Skeleton animation="wave" variant="text" />
                                </div> 
                            )) :
                           product.length ? (
                              product.map(( item=> 
                                <ProductCard parent={parent} key={item.node.id} title={item.node.name} price={item.node.regularPrice} salePrice={item.node.salePrice} image={item.node.image.
                            sourceUrl} productId={item.node.productId} type={item.node.type} slug={item.node.slug} />
                              ))
                          ): null }
                      </div>      
                    </TabPanel>
            )) : ''}
      {/* ============================== */}
    </main>
  );
}

export default NavTabs;