import { useQuery, useMutation } from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import { useState, useContext } from 'react';
import { AppContext } from "../context/appContext";
import { addFirstProduct, updateCart, getFormattedCart } from "../../functions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { v4 } from 'uuid';
import GET_CART from "../../queries/GET_CART";
import ADD_TO_CART from "../mutations/add-to-cart";


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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    const classes = useStyles();
    const { product, variationId, qty, qtySelect, sizeSelect, stockAvailable, selection }  = props;
    const [ cart, setCart ] = useContext( AppContext );
	const [ requestError, setRequestError ] = useState( null );
    const productData = [product, variationId, qty, stockAvailable, selection];
    const availableStock = stockAvailable;

    const productQryInput = {
		clientMutationId: v4(), // Generate a unique id.
		productId: variationId,
    };

    // Get Cart Data.
        const { loading, error, data, refetch } = useQuery( GET_CART, {
            variables: {
                Id: variationId,
            },
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {
                 //console.warn( 'completed GET_CART' );
    
                // Update cart in the localStorage.
                if (sizeSelect == true && qtySelect == true && availableStock > 0) {
                    const updatedCart = getFormattedCart( data, qty, variationId, selection );
                    localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ) );
                    console.log( 'updated cart : ' ,updatedCart )
        
                    // Update cart data in React Context.
                    setCart( updatedCart );
                }
                
            }
        } );
	
    


    // Add to Cart Mutation.
	const [ addToCart, { data: addToCartRes, loading: addToCartLoading, error: addToCartError }] = useMutation( ADD_TO_CART, {
		variables: {
			input: productQryInput,
		},
		onCompleted: () => {
			

			// If error.
			if ( addToCartError ) {
				setRequestError( addToCartError.graphQLErrors[ 0 ].message );
			}

			// On Success:
			// 1. Make the GET_CART query to update the cart with new values in React context.
            refetch(); 
            console.warn( 'completed ADD_TO_CART' );

		},
		onError: ( error ) => {
			if ( error ) {
				setRequestError( error.graphQLErrors[ 0 ].message );
			}
		}
    } );
    
    //add to local storage
    const handeLocalStorage = () => {
        if ( process.browser) { //checks if the function is on the clientside
            let existingCart = localStorage.getItem( 'woo-next-cart' ); //check if the cart has items already
                    if (existingCart) {
                        existingCart = JSON.parse(existingCart);
                        const updatedCart = updateCart( existingCart, productData, qty, selection);
                        updatedCart ? setCart( updatedCart ) : null;

                    } else {
                        //  if no item in the cart, create an empty array and push the items to the array
                        const newCart = addFirstProduct ( productData );
                        setCart( newCart );
                    }
                }              
    };

    
    const handleAddToCartClick = () => {
        if (sizeSelect == true && qtySelect == true && availableStock > 0) {
        setRequestError( null );
        addToCart();
        //handeLocalStorage();
    }  else {            
        handleClickOpen();
    } 
    };

    return (

            <>
                {addToCartLoading && <p>Adding to Cart...</p>}
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