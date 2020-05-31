import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/appContext";
import { getFormattedCart, getUpdatedItems, removeItemFromCart } from '../../../functions';
import CartItem from "./CartItem";
import { useMutation, useQuery } from "@apollo/react-hooks";
import UPDATE_CART from "../../mutations/update-cart";
import GET_CART from "../../../queries/GET_CART";
import CLEAR_CART_MUTATION from "../../mutations/clear-cart";
import Alert from '@material-ui/lab/Alert';
import SummaryItem from './summary-item';
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
    btn: {
        marginTop: "36px"
    }
  
  }));

const CartItemsContainer = () => {
    const [ cart, setCart ] = useContext( AppContext );

    const handleRemoveItem = (event, productId) => {
        const updatedCart = removeItemFromCart(productId);
        setCart(updatedCart);
    };
    const classes= useStyles();
	return (
        <div className={classes.root}>
           {cart ? 
                <div className={classes.cartContainers}>
                    <div className={classes.Items}>
                        <Typography variant="h2" component="h1">View Your Cart:</Typography>
                        <Typography variant="subtitle2" component="p">You have 4 items in your cart</Typography>
                        <Alert severity="info">For the faster delivery make sure to place your order before 12pm</Alert>
                        {  cart.products.length ? 
                            cart.products.map( (item, index) => <CartItem key={index} 
                              handleRemoveItem={handleRemoveItem} 
                              tax={item.node.tax} 
                              name={item.node.product.name} 
                              price={item.node.variation.regularPrice} 
                              productId={item.node.product.productId} 
                              qty={item.node.quantity} 
                              value={ item.node.variation.name } 
                              image={item.node.product.image.sourceUrl} /> )
                        : ''}                        
                    </div>
                    <SummaryItem totalPrice={cart.total} subTotal={cart.subTotal} totalTax={cart.totalTax} promoCode={"fix"} promoValue={"fix"} promoDescription={"fix"} />
                </div>
           
           : 
           <div className={classes.cartContainers}>
                    <div className={classes.Items}>
                        <Typography variant="h2" component="h1">View Your Cart:</Typography>
                        <Typography variant="subtitle2" component="p">You have 0 items in your cart</Typography>
                        <Alert severity="info">For the faster delivery make sure to place your order before 12pm</Alert>  
                        <Typography variant="h3" className={classes.btn}>You have no items in your cart</Typography>
                        <Link href="/shop"><Button variant="contained" className={classes.btn} color="primary">Visit the shop</Button></Link>                   
                    </div>
                    <SummaryItem totalPrice={0} />
                </div> }
        </div>
	);
};

export default CartItemsContainer;