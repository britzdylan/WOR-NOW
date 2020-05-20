import Layout from "../components/mainLayout/layout";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '50%',
      margin: '64px auto'
    }
  }));

const Checkout = () => {
    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.root} >
                <Typography align="center" variant="h1" >Checkout Page.</Typography>
                <CheckoutForm/> 
            </div>
        </Layout>
    )
	
};

export default Checkout;