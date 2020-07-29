import Layout from "../components/mainLayout/layout";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { AppContext } from "../components/context/appContext";
import CheckoutParent from "../components/checkout/checkoutParent";
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '400px',
        margin: '64px auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '80%',
            margin: "32px 0 64px 0"
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%',
            margin: "32px auto 64px auto"
        },
    }
}));

const Checkout = () => {
    const classes = useStyles();

    return (
        <Layout>

            <div className={classes.root} >
                <Typography align="center" variant="h1" gutterBottom={true}>Checkout Page.</Typography>
                <CheckoutParent />
            </div>
        </Layout>
    )

};

export default Checkout;