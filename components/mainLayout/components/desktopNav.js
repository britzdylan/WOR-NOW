import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";
import { fade, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  topMenu: {
    width: "672px",
    backgroundColor: '#EEE',
  }
}));


const bottomNav = (props) => {
  const classes = useStyles();
  let [value, setValue] = React.useState(0);
  const router = useRouter()
  const expr = router.pathname;
  const shop = expr.includes('/shop')
  const news = expr.includes('/blog')
  const account = expr.includes('/account')

  if (expr === '/') {
    value = "1"
  } else {
    if (shop && expr != '/') {
      value = "2"
    } else {
      if (news && expr != '/') {
        value = "3"
      } else {
        if (account && expr != '/') {
          value = "4"
        }
      }
    }
  }
  return (<Hidden mdDown>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.topMenu}
      component='nav'
    >
      <BottomNavigationAction value="1" label="Home" href='/' icon={<StoreIcon />} />
      <BottomNavigationAction value="2" label="Shop" href='/shop' icon={<ShoppingCartIcon />} />
      <BottomNavigationAction value="3" label="News" href='/blog' icon={<ErrorIcon />} />
      {/* <BottomNavigationAction value="4" label="Account" href='/account' icon={<PersonIcon />} /> */}
    </BottomNavigation>
  </Hidden>
  )
}

export default bottomNav;

