import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topMenu: {
      width: "672px",
    }
  }));


const bottomNav = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


    return (  <Hidden mdDown>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.topMenu}
          >
            <BottomNavigationAction label="Home" href='/' icon={<StoreIcon />} />
            <BottomNavigationAction label="Shop" href='/shop' icon={<ShoppingCartIcon />} />
            <BottomNavigationAction label="News" href='/news' icon={<ErrorIcon />} />
            <BottomNavigationAction label="Account" href='/account' icon={<PersonIcon />} />
          </BottomNavigation>
      </Hidden>
    )}

export default bottomNav;

        