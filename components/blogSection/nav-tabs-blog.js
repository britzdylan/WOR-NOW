import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Subscribe from '../global/subscribe';
import Archive from './archive'

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
    margin: "0 0 128px 0"
  },
  rootA: {
    padding: '0 !important',
  },
  appBar: {
    backgroundColor: '#F2F2F2',
    boxShadow: 'none'
  },
  tabPanel: {
    maxWidth: '50%',
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
  }
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { posts } = props;

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
          textColor='primary'
          indicatorColor='primary'
        >
          <LinkTab label="Latest News" href="/latest-news"  {...a11yProps(0)} />
          <LinkTab label="Subscribe" href="/subscribe"   {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      {/* call the content for each tab */}
      <TabPanel value={value} index={0}>
        <Archive posts={posts} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Subscribe />
      </TabPanel>
      {/* ============================== */}
    </main>
  );
}