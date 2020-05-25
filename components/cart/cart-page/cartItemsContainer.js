import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems, removeItemFromCart } from '../../../functions';
import CartItem from "./CartItem";
import { useMutation, useQuery } from "@apollo/react-hooks";
import UPDATE_CART from "../../mutations/update-cart";
import GET_CART from "../../../queries/GET_CART";
import CLEAR_CART_MUTATION from "../../mutations/clear-cart";
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "70%",
      margin: "32px auto 64px auto",
      [theme.breakpoints.down('md')] : {
        maxWidth: '80%',
      },
    [theme.breakpoints.down('sm')] : {
        maxWidth: '95%',
      },
    },
    cartContainers: {
        margin: '32px 0',
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gridColumnGap: '24px',
        justifyItems: 'left',
        alignItems: 'start',
        [theme.breakpoints.down('md')] : {
            gridTemplateColumns: "100%",
          },
        [theme.breakpoints.down('sm')] : {
            gridTemplateColumns: "100%"
          },
    },
    Items: {
        width: "100%"
    },
    summary: {
        padding: '16px 32px',
        width: '100%',
        margin: '32px 0 0 0',

    },
    NamePrice : {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0',
        alignItems: 'flex-end'
    },
    Div : {
        margin: '16px 0'
    },
    btn: {
        margin: '32px 0',
        backgroundColor: "#19A85E"
    },
    paymentMethods : {
        width: "50%",
        margin: "0 auto 16px auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

  }));

const CartItemsContainer = () => {

    const classes= useStyles();

    const [ cart, setCart ] = useContext( AppContext );
	return (
        <div className={classes.root}>
           {cart ? 
                <div className={classes.cartContainers}>
                    <div className={classes.Items}>
                        <Typography variant="h2" component="h1">View Your Cart:</Typography>
                        <Typography variant="subtitle2" component="p">You have 4 items in your cart</Typography>
                        <Alert severity="info">For the faster delivery make sure to place your order before 12pm</Alert>
                        <CartItem/>
                    </div>
                    <Paper elevation="5" className={classes.summary}>
                        <Typography variant="h4" color="primary" component="h2">Order Summary:</Typography>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography variant="subtitle1">Sub-Total</Typography>
                            <Typography variant="subtitle2">R 6000.00</Typography>
                        </div>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography variant="subtitle1">Shipping</Typography>
                            <Typography variant="subtitle2">R 100.00</Typography>
                        </div>
                        <Typography variant="subtitle2">Item(s) will arrive in 2-3 days from payment date</Typography>
                        <Typography variant="subtitle2">All orders are fulfilled by Dawn Wing</Typography>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography variant="subtitle1">Promo Code</Typography>
                            <Typography variant="subtitle2">Add</Typography>
                        </div>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography color="primary" variant="h4">Total</Typography>
                            <Typography color="primary" variant="subtitle1">R 5000.00<Typography variant="overline"> Inc Vat</Typography></Typography>
                        </div>
                        <Button className={classes.btn} color="primary" fullWidth="true" size="large" variant="contained">Pay Securely Now</Button>
                        <div className={classes.paymentMethods}>
                            <img  src="https://www.payfast.co.za/assets/images/features/Credit%20Cards.svg" width="50%"/> 
                        </div>
                        <div className={classes.paymentMethods}>
                            <img  src="https://www.payfast.co.za/assets/images/payfast_logo_colour.svg" width="50%"/>
                            <img  src="https://www.payfast.co.za/assets/images/credit-card.jpg" width="50%"/>
                        </div>
                    </Paper>
                </div>
           
           : '' }
        </div>
	);
};

export default CartItemsContainer;