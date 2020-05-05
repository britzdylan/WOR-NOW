import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WhyUs from './homeLayout/why-us';
import ContactUs from './homeLayout/contact-us';
import ForYou from './homeLayout/for-you';
import Subscribe from './homeLayout/subscribe';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    backgroundColor: theme.palette.background.paper,
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

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className={classes.root}>
      <AppBar position="static">
        <Tabs
        //   variant="fullWidth"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered= 'true'
          component="nav"
          className={classes.tabPanel}
        >
          <LinkTab label="For You"  href="/for-you"  {...a11yProps(0)} />
          <LinkTab label="Why Us"   href="/why-us" {...a11yProps(1)} />
          <LinkTab label="Contact Us" href="/contact"   {...a11yProps(2)} />
          <LinkTab label="Subscribe"  href="/subscribe" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ForYou />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WhyUs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactUs />
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Subscribe />
      </TabPanel>
    </main>
  );
}