import React from 'react';
import { AppContext } from "../../context/appContext";
import Drawer from '@material-ui/core/Drawer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Cart from '../../cart/cartIcon';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  Sidebar: {
    width: '250px',
    padding: '12px',
    textAlign: 'center'
  },
  Icons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '32px',
    marginTop: '12px',

  },
  Icon: {
    color: '#D52626'
  },
  containers: {
    textAlign: 'center',
  },
  cashback: {
    marginTop: '32px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
  },

}));



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}




const Appdrawer = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const { value } = React.useContext(AppContext);
  const productsCount = (null !== value[0] && Object.keys(value[0]).length) ? value[0].productCount : 0;

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  {/* drawer */ }
  const list = (anchor) => (

    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.root}>
        <Typography variant="body1" gutterBottom>
          Connect with us
                   </Typography>
        <div
          className={classes.Icons}
        >
          <a className={classes.Icon} href="https://www.facebook.com/worldofhockeysa/" target="_blank" ><FacebookIcon /></a>
          <a className={classes.Icon} href="https://www.instagram.com/worldofhockey_sa/" target="_blank" ><InstagramIcon /></a>
          <a className={classes.Icon} href="https://www.linkedin.com/company/sportpro-sa/" target="_blank" ><LinkedInIcon /></a>
        </div>
      </div>
      <Divider />
      <Cart />
      <Divider />
      <div>
        <List component="nav" aria-label="">
          <ListItemLink href="/shipping-returns">
            <ListItemText primary="Shipping & Returns" />
          </ListItemLink>
          <ListItemLink href="/payment-options">
            <ListItemText primary="Payment options" />
          </ListItemLink>
          <ListItemLink href="/terms">
            <ListItemText primary="Terms & Conditions" />
          </ListItemLink>
          <ListItemLink href="/privacy-policy">
            <ListItemText primary="Privacy Policy" />
          </ListItemLink>
          <ListItemLink href="/sitemap">
            <ListItemText primary="Sitemap" />
          </ListItemLink>
        </List>
      </div>
      <Divider />
      <div
        className={classes.containers}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItemLink href="mailto:info@sportprosa.co.za">
            <ListItemIcon>
              <AlternateEmailIcon />
            </ListItemIcon>
            <ListItemText primary="Send us an email" />
          </ListItemLink>

          <ListItemLink href="tel:011-781-3308">
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Give us a call" />
          </ListItemLink>

          <ListItemLink href="mailto:corporate@sportprosa.co.za">
            <ListItemIcon>
              <LaunchIcon />
            </ListItemIcon>
            <ListItemText primary="Corporate & Bulk Orders" />
          </ListItemLink>


        </List>
        <Divider />

        <a href="#"><img src="https://logos-download.com/wp-content/uploads/2019/11/Cashback_World_Logo.png" Width="200px" className={classes.cashback} /></a>
      </div>
    </div>
  );

  return (
    <div>
      {/* ===========================hamburger===================================== */}
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer('left', true)}
      >
        <Badge badgeContent={productsCount} color="primary">
          <MenuIcon />
        </Badge>
      </IconButton>
      {['left'].map((anchor) => (
        <Drawer key={anchor} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      ))}
    </div>

  )
};

export default Appdrawer;