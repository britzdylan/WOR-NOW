import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Navigation from './components/desktopNav';
import Appdrawer from './components/appDrawer';
import Search from './components/search';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#EEE',
  },
  AppBar: {
    backgroundColor: '#EEE',
    color: '#D52626',
    boxShadow: "none"
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
  storeInfo: {
    width: "100%",
    height: "35px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  infoText: {
    fontSize: "16px",
    fontWeight: "300",
    letterSpacing: "2px",
    color: 'white'
  }
}));





const MobAppbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <header className={classes.root}>
      <div className={classes.storeInfo}>
        <Typography className={classes.infoText} variant="subtitle1">Free shipping for all order over R 800</Typography>
      </div>
      <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar>

          {/* ===========================appDrawer===================================== */}
          <Appdrawer></Appdrawer>

          {/* ===========================logo===================================== */}
          <a href="/" className={classes.title}>
            <img src="https://www.sportprosa.co.za/wp-content/uploads/2019/07/Asset-137.png" width="200px" />
          </a>

          {/* ===========================navigation===================================== */}
          <Navigation></Navigation>

          {/* ============================search======================================= */}
          <Search />


        </Toolbar>
      </AppBar>

    </header>
  );
};

export default MobAppbar;