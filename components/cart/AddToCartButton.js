import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import { useState, useContext } from 'react';
import { AppContext } from "../context/appContext";
import { addFirstProduct, updateCart } from "../../functions";


const useStyles = makeStyles((theme) => ({
    addToCart: {
        backgroundColor: "#D52626",
        color: "white",
        margin: '32px 0',
        '&:hover' : {
           color: "#D52626"
        } 
    } 

}));

const AddToCartButton = (props) => {
    const classes = useStyles();
    const { product, variationId, qty, qtySelect, sizeSelect, stockAvailable }  = props;
    const [ cart, setCart ] = useContext( AppContext );
    const productData = [product,variationId, qty, stockAvailable];
    // const [ stock, setStock ] = useContext( AppContext );
    // console.log(`available stock: ${stock}, qty: ${qty}` );
   
    const handleAddToCartClick = () => {
        if ( process.browser) { //checks if the function is on the clientside

            let existingCart = localStorage.getItem( 'woo-next-cart' ); //check if the cart has items already
                if (sizeSelect == true && qtySelect == true && stockAvailable > 0) {
                    if (existingCart) {
                        existingCart = JSON.parse(existingCart);
                        const newQtyToAdd = 1;
                        const updatedCart = updateCart( existingCart, productData, newQtyToAdd)
                        updatedCart ? setCart( updatedCart ) : null;
                        //setStock(2)
                        // console.log(`available stock: ${stockControl}, qty: ${qty}` );

                    } else {
                        //  if no item in the cart, create an empty array and push the items to the array
                        const newCart = addFirstProduct ( productData );
                        setCart( newCart );
                        // setStock(stock - JSON.parse(qty))
                    }
                } else {
                    console.log("please choose a quantity")
                }
                   
        }
    };

    return (

            <>
            <Button onClick={ handleAddToCartClick } className={classes.addToCart} color="primary" size="large">Add to Cart</Button>
            </>
    )
}

export default AddToCartButton;