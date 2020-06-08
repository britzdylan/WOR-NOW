import Layout from "../components/mainLayout/layout";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { AppContext } from "../components/context/appContext";
import CheckoutParent from "../components/checkout/checkoutParent";


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
                <Typography align="center" variant="h1" gutterBottom="true">Checkout Page.</Typography>
                <CheckoutParent />
            </div>
        </Layout>
    )

};

export default Checkout;