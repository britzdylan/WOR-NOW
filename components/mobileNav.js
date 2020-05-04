import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

const botNav = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { width } = props;
  
    
    return (
      <Hidden lgUp>
           <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Home" icon={<StoreIcon />} />
            <BottomNavigationAction label="Shop" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction label="News" icon={<ErrorIcon />} />
            <BottomNavigationAction label="Account" icon={<PersonIcon />} />
          </BottomNavigation>
      </Hidden>
     
    )
  }

  export default botNav;