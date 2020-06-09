import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from '@material-ui/core/Hidden';
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorIcon from "@material-ui/icons/Error";
import PersonIcon from "@material-ui/icons/Person";
import { useRouter } from 'next/router'


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

const botNav = (props) => {
  const classes = useStyles();
  let [value, setValue] = React.useState(0);
  const { width } = props;
  const router = useRouter()
  const expr = router.pathname;
  const shop = expr.includes('/shop')
  const news = expr.includes('/news')
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

  return (
    <Hidden lgUp>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        component='nav'
      >
        <BottomNavigationAction value="1" label="Home" href='/' icon={<StoreIcon />} />
        <BottomNavigationAction value="2" label="Shop" href='/shop' icon={<ShoppingCartIcon />} />
        <BottomNavigationAction value="3" label="News" href="/blog" icon={<ErrorIcon />} />
        {/* <BottomNavigationAction value="4" label="Account" icon={<PersonIcon />} /> */}
      </BottomNavigation>
    </Hidden>

  )
}

export default botNav;