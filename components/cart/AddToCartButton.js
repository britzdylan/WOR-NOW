import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import { useState, useContext } from 'react';
import { AppContext } from "../context/appContext";
import { addFirstProduct, updateCart } from "../../functions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
     const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    const classes = useStyles();
    const { product, variationId, qty, qtySelect, sizeSelect, stockAvailable }  = props;
    const [ cart, setCart ] = useContext( AppContext );
    const productData = [product,variationId, qty, stockAvailable];
    
   const availableStock = stockAvailable;
    console.log(`available stock: ${availableStock}, qty: ${qty}, sizeSelect: ${sizeSelect}` );
    const handleAddToCartClick = () => {
        if ( process.browser) { //checks if the function is on the clientside

            let existingCart = localStorage.getItem( 'woo-next-cart' ); //check if the cart has items already
                if (sizeSelect == true && qtySelect == true && availableStock > 0) {
                    if (existingCart) {
                        existingCart = JSON.parse(existingCart);
                        const updatedCart = updateCart( existingCart, productData, qty);
                        updatedCart ? setCart( updatedCart ) : null;

                    } else {
                        //  if no item in the cart, create an empty array and push the items to the array
                        const newCart = addFirstProduct ( productData );
                        setCart( newCart );
                    }
                } else {
                   
                    handleClickOpen();
                }
                   
        }
    };

    return (

            <>
                <Button onClick={ handleAddToCartClick } className={classes.addToCart} color="primary" size="large">Add to Cart</Button>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"ATTENTION"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {(sizeSelect == false) ? "Please choose your size" : (availableStock == undefined) ? "We do not have any stock available for this item" : "Please choose your quantity"}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                        </DialogActions>
                    </Dialog>
            </>
    )
}

export default AddToCartButton;