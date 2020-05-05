import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Navigation from './components/desktopNav';
import Appdrawer from './components/appDrawer';
import Search from './components/search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  AppBar : {
    backgroundColor: "white",
    color: '#D52626',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    zIndex: '0',
    // display: 'none',
     [theme.breakpoints.down('md')]: {
       textAlign: 'center',
     },
  }
}));



  

const MobAppbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
         
          {/* ===========================appDrawer===================================== */}
          <Appdrawer></Appdrawer>

          {/* ===========================logo===================================== */}
          <a href="/" className={classes.title}>
              <img src="https://www.sportprosa.co.za/wp-content/uploads/2019/07/Asset-137.png" width="200px"  />
          </a>

          {/* ===========================navigation===================================== */}
          <Navigation></Navigation>

          {/* ============================search======================================= */}
          <Search/>


        </Toolbar>
      </AppBar>
    </header>
  );
};

export default MobAppbar;