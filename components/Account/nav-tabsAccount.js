import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function AccountTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
        //   variant="fullWidth"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          component="nav"
          className={classes.tabPanel}
          textColor= 'primary'
          indicatorColor= 'primary'
        >
          <LinkTab label="My Details"  href="/for-you"  {...a11yProps(0)} />
          <LinkTab label="Billing"   href="/why-us" {...a11yProps(1)} />
          <LinkTab label="Shipping" href="/contact"   {...a11yProps(2)} />
          <LinkTab label="Orders"  href="/subscribe" {...a11yProps(3)} />
          <LinkTab label="Log Out" {...a11yProps(4)}/>
        </Tabs>
      </AppBar>

      {/* call the content for each tab */}
      <TabPanel value={value} index={0}>
        <h1>you are logged in</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <TabPanel value={value} index={3}>
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
      {/* ============================== */}
    </main>
  );
}