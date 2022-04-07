import react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
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
import Cart from '../cart/cartIcon';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0,
    padding: '32px',
    alignItems: 'start',
    backgroundColor: '#EEE',
    marginTop: '24px',
  },
  Icons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Icon: {
    color: '#D52626',
  },
  containers: {
    textAlign: 'center',
  },
  cashback: {
    marginTop: '32px',
  },
  logo: {
    marginBottom: '32px',
    marginTop: '32px',
  },
  storeInfo: {
    width: '100%',
    height: '50px',
    backgroundColor: '#EEE',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '12px',
    opacity: '0.8',
  },
});

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <footer className={classes.root}>
        <div>
          <div className={classes.logo}>
            <Cart />
          </div>
          <Typography variant='body1' gutterBottom>
            Connect with us
          </Typography>
          <div className={classes.Icons}>
            <a
              className={classes.Icon}
              href='https://www.facebook.com/worldofrugbysa/'
              target='_blank'>
              <FacebookIcon />
            </a>
            <a
              className={classes.Icon}
              href='https://www.instagram.com/worldofrugby_sa/'
              target='_blank'>
              <InstagramIcon />
            </a>
            <a
              className={classes.Icon}
              href='https://www.linkedin.com/company/sportpro-sa/'
              target='_blank'>
              <LinkedInIcon />
            </a>
          </div>
          <p>Phone: 011 781 3308</p>
          <p>Email: info@sportprosa.co.za</p>
        </div>
        <div>
          <List component='nav' aria-label=''>
            <ListItemLink href='/shipping-returns'>
              <ListItemText primary='Shipping & Returns' />
            </ListItemLink>
            <ListItemLink href='/payment-options'>
              <ListItemText primary='Payment options' />
            </ListItemLink>

            <ListItemLink href='/privacy-policy'>
              <ListItemText primary='Privacy Policy' />
            </ListItemLink>
          </List>
        </div>
        <div className={classes.containers}>
          <List component='nav' aria-label='main mailbox folders'>
            <ListItemLink href='mailto:info@sportprosa.co.za'>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary='Send us an email' />
            </ListItemLink>

            <ListItemLink href='tel:011-781-3308'>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary='Give us a call' />
            </ListItemLink>

            <ListItemLink href='mailto:corporate@sportprosa.co.za'>
              <ListItemIcon>
                <LaunchIcon />
              </ListItemIcon>
              <ListItemText primary='Corporate & Bulk Orders' />
            </ListItemLink>
          </List>

          <a
            target='_blank'
            href='https://www.cashbackworld.com/za/registration/partner/22301001'>
            <img
              src='/myworld.png'
              width='200px'
              className={classes.cashback}
            />
          </a>
        </div>
      </footer>
      <div className={classes.storeInfo}>
        <img height='50px' src='/payments.jpg' />
      </div>
    </Hidden>
  );
};

export default Footer;
