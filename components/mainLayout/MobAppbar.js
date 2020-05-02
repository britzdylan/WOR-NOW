import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";
import Drawer from '@material-ui/core/Drawer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  topMenu: {
    width: "672px",
    // position: "fixed",
    // bottom: 0
  },
  AppBar : {
    backgroundColor: "white",
    color: '#D52626',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },

  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    zIndex: '0',
    // display: 'none',
     [theme.breakpoints.down('md')]: {
       textAlign: 'center',
     },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('width'),
    transition: theme.transitions.create('position'),
    marginLeft: 0,
    width: '10%',
    zIndex: '2',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 1),
      width: '100%',
      [theme.breakpoints.down('xs')] : {
        position: 'absolute',
        height: '56px',
      },
      
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      display: 'block',
      backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      width: 'auto',

    }
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '40px',
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      display: 'block',
      '&:focus': {
        width: '20ch',
      },
    },
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
  containers: {
    textAlign: 'center',
  },
  cashback: {
    marginTop: '32px',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

  

const MobAppbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { width } = props;
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
       className={clsx(classes.Sidebar)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
     <div
           
           >
               <div>
                   <Typography variant="body1" gutterBottom>
                      Connect with us
                    </Typography>
                   <div
                    className={classes.Icons}
                   >
                      <FacebookIcon />
                      <InstagramIcon />
                      <LinkedInIcon />
                   </div>
               </div>
               <Divider/>
               <div>
                  <List component="nav" aria-label="">
                      <ListItemLink href="#">
                        <ListItemText primary="Shipping & Returns" />
                      </ListItemLink>
                      <ListItemLink href="#">
                        <ListItemText primary="Payment options" />
                      </ListItemLink>
                      <ListItemLink href="#">
                        <ListItemText primary="Terms & Conditions" />
                      </ListItemLink>
                      <ListItemLink href="#">
                        <ListItemText primary="Privacy Policy" />
                      </ListItemLink>
                      <ListItemLink href="#">
                        <ListItemText primary="Cookies" />
                      </ListItemLink>
                      <ListItemLink href="#">
                        <ListItemText primary="Sitemap" />
                      </ListItemLink>
                  </List>
               </div>
               <Divider/>
               <div
                className={classes.containers}
               >
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItemLink href="#">
                      <ListItemIcon>
                        <AlternateEmailIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Send us an email" />
                    </ListItemLink>

                    <ListItemLink href="#">
                      <ListItemIcon>
                        <CallIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Give us a call" />
                    </ListItemLink>

                    <ListItemLink href="#">
                      <ListItemIcon>
                        <LaunchIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Corporate & Bulk Orders" />
                    </ListItemLink>

                    <Divider/>

                  </List>

                  <a href="#"><img src="https://logos-download.com/wp-content/uploads/2019/11/Cashback_World_Logo.png" Width="200px" className={classes.cashback}/></a>
               </div>
           </div>
      
    </div>
  );
  

  

 
  


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          {['left'].map((anchor) => (
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
          ))}

          <a href="/"
                      className={classes.title}
                    >
                      <img src="https://www.sportprosa.co.za/wp-content/uploads/2019/07/Asset-137.png" width="200px"  />
                    </a>


          <Hidden mdDown>
           <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.topMenu}
          >
            <BottomNavigationAction label="Home" icon={<StoreIcon />} />
            <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction label="News" icon={<ErrorIcon />} />
            <BottomNavigationAction label="Account" icon={<PersonIcon />} />
          </BottomNavigation>
      </Hidden>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobAppbar;