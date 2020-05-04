import react from 'react';
import { makeStyles } from "@material-ui/core/styles";
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


const useStyles = makeStyles({
  root: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0,
    padding: '32px',
    alignItems: 'start',
    backgroundColor: '#EEE',
    marginTop: '24px'
  },
  Icons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  containers: {
    textAlign: 'center',
  },
  cashback: {
    marginTop: '32px',
  },
  logo: {
    marginBottom: "32px",
    marginTop: '32px'
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Footer = (props) => {
    const classes = useStyles();
  
    
    return (
      <Hidden mdDown>
           <div
           className={classes.root}
           >
               <div>
                    <a href="/"
                      className={classes.logo}
                    >
                      <img src="https://www.sportprosa.co.za/wp-content/uploads/2019/07/Asset-137.png" width="200px"  className={classes.logo}/>
                    </a>
                   <Typography variant="body1" gutterBottom>
                      Connect with us
                    </Typography>
                   <div
                    className={classes.Icons}
                   >
                      <a href="https://www.facebook.com/worldofrugbysa/" target="_blank" ><FacebookIcon /></a>
                     <a href="https://www.instagram.com/worldofrugby_sa/"  target="_blank" ><InstagramIcon /></a>
                     <a href="https://www.linkedin.com/company/sportpro-sa/"  target="_blank" ><LinkedInIcon /></a>
                   </div>
               </div>
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


                  </List>

                  <a href="#"><img src="https://logos-download.com/wp-content/uploads/2019/11/Cashback_World_Logo.png" Width="200px" className={classes.cashback}/></a>
               </div>
           </div>
      </Hidden>
     
    )
  }

  export default Footer;