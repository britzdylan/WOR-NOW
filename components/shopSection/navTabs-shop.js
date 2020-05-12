import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CategoryPreview from '../global/category-preview';

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
    id: `scrollable-auto-tab-${index}`,
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
    backgroundColor: '#F2F2F2',
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
  }
}));



const NavTabs =(props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { fangear, boots, protection, equipment, accessories, clothing, navItems } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const products = [clothing,fangear,accessories,boots,equipment,protection];
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
        { products.length ? (
                products.map( (product, index) =>
                    <TabPanel value={value} index={index} key={index}  >
                      { product.length ? (
                          product.map(( item=> 
                            <CategoryPreview key={index} products={item.node.products.edges} slug={item.node.slug} parent={item.node.parent.name} catName={item.node.name} catLink={item.node.productCategoryId} />
                          ))
                      ): '' }      
                    </TabPanel>
            )) : ''}
      {/* ============================== */}
    </main>
  );
}

export default NavTabs;