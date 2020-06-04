import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyDetails from './tab-components/mydetails';
import Billing from './tab-components/billing';
import Shipping from './tab-components/shipping';
import OrderSummary from './tab-components/orders';
import Button from '@material-ui/core/Button';

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
  },
  logOut : {
    margin:"64px auto",
    maxWidth: "250px",

  },
  btnLogOut : {

  }
}));

export default function AccountTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { userData } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    localStorage.removeItem('userData', null);
    localStorage.removeItem('authToken', null);
    window.location.reload();
  }

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
          <LinkTab label="Manage" {...a11yProps(4)}/>
        </Tabs>
      </AppBar>

      {/* call the content for each tab */}
      <TabPanel value={value} index={0}>
        <MyDetails clientMutationId={userData.clientMutationId}  fName={userData.firstName} lName={userData.lastName} uName={userData.username} email={userData.email} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Billing id={userData.id} clientMutationId={userData.clientMutationId} fName={userData.billing.firstName} lName={userData.billing.lastName} email={userData.billing.email}  Phone={userData.billing.phone} company={userData.billing.company} address1={userData.billing.address1} address2={userData.billing.address2} city={userData.billing.city} country={userData.billing.country} state={userData.billing.state} postalcode={userData.billing.postcode}   />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Shipping clientMutationId={userData.clientMutationId} fName={userData.shipping.firstName} lName={userData.shipping.lastName} email={userData.shipping.email}  Phone={userData.shipping.phone} company={userData.shipping.company} address1={userData.shipping.address1} address2={userData.shipping.address2} city={userData.shipping.city} country={userData.shipping.country} state={userData.shipping.state} postalcode={userData.shipping.postcode} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrderSummary clientMutationId={userData.clientMutationId} Orders={userData.orders.edges} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.logOut}>
            <Button color="primary" fullWidth="true" onClick={handleClick} className={classes.btnLogOut} variant="contained" >Log Out</Button>
        </div>
      </TabPanel>
      {/* ============================== */}
    </main>
  );
}