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
    marginBottom: "0"
  },
  AppBar: {
    backgroundColor: '#EEE',
    color: '#D52626',
    boxShadow: "none"
  },
  brand: {
    flexGrow: 1,
    textAlign: 'left',
    zIndex: '0',
    // display: 'none',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    zIndex: '0',
    margin: '0',
    padding: '0',
    lineHeight: '0',
    // display: 'none',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  storeInfo: {
    width: "100%",
    height: "35px",
    backgroundColor: "white",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  woh: {
    color: "green",
    fontWeight: "bold"
  },
  won: {
    color: "red",
    fontWeight: "bold"
  },
  InfoText: {
    color: "black"
  },
  sportpro: {
    color: "black",
    fontSize: '10px',
    marginLeft: '100px',
    marginTop: '0',
    lineHeight: '1'
  }

}));





const MobAppbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <header className={classes.root}>
      <div className={classes.storeInfo}>
        <p className={classes.InfoText}><a className={classes.won} href="https://worldofRugby.co.za" target="_blank">WorldofRugby</a> | <a className={classes.woh} href="https://worldofhockey.co.za" target="_blank">WorldofHockey</a></p>
      </div>
      <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar>

          {/* ===========================appDrawer===================================== */}
          <Appdrawer></Appdrawer>

          {/* ===========================logo===================================== */}
          <div className={classes.title}>
            <a href="/" className={classes.brand}>
              <img src="/won-logo.svg" width="200px" />
            </a>
            <span className={classes.sportpro}>division of Sportprosa</span>
          </div>

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