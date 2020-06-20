import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";
import { fade, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Badge from '@material-ui/core/Badge';
import { AppContext } from "../../context/appContext";
const useStyles = makeStyles((theme) => ({
  topMenu: {
    width: "672px",
    backgroundColor: '#EEE',
  }
}));


const bottomNav = (props) => {
  const classes = useStyles();
  let [route, setValue] = React.useState(0);
  const router = useRouter()
  const expr = router.pathname;
  const shop = expr.includes('/shop')
  const news = expr.includes('/blog')
  const cart = expr.includes('/cart')
  const { value } = React.useContext(AppContext);

  const productsCount = (null !== value[0] && Object.keys(value[0]).length) ? value[0].productCount : 0;


  if (expr === '/') {
    route = "1"
  } else {
    if (shop && expr != '/') {
      route = "2"
    } else {
      if (news && expr != '/') {
        route = "3"
      } else {
        if (cart && expr != '/') {
          route = "4"
        }
      }
    }
  }
  return (<Hidden mdDown>
    <BottomNavigation
      value={route}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.topMenu}
      component='nav'
    >
      <BottomNavigationAction value="1" label="Home" href='/' icon={<StoreIcon />} />
      <BottomNavigationAction value="2" label="Shop" href='/shop/fan-gear' icon={<ShoppingCartIcon />} />
      <BottomNavigationAction value="3" label="News" href='/blog' icon={<ErrorIcon />} />
      {/* <BottomNavigationAction value="4" label="Account" href='/account' icon={<PersonIcon />} /> */}
      <BottomNavigationAction value="4" label="Cart" href='/cart' icon={<Badge badgeContent={productsCount} color="primary"><ShoppingCartIcon /></Badge>} />
    </BottomNavigation>
  </Hidden>
  )
}

export default bottomNav;

