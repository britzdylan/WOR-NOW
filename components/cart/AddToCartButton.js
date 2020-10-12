import { useQuery, useMutation } from "@apollo/react-hooks";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { AppContext } from "../context/appContext";
import { getFormattedCart } from "../../functions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { v4 } from 'uuid';
import GET_CART from "../../queries/GET_CART";
import ADD_TO_CART from "../mutations/add-to-cart";
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    addToCart: {
        backgroundColor: "#7200F6",
        color: "white",
        margin: '12px 0',
        '&:hover': {
            color: "#7200F6"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
    }

}));

const AddToCartButton = (props) => {


    const [open, setOpen] = React.useState(false);
    const [alertCart, setAlertCart] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles();
    const { product, variationId, productId, qty, qtySelect, sizeSelect, stockAvailable, selection } = props;
    const { value } = React.useContext(AppContext);
    const [cart, setCart] = value;
    const [requestError, setRequestError] = useState(null);
    const availableStock = stockAvailable;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: productId,
        variationId: variationId,
        quantity: qty
    };

    // Get Cart Data.
    const { loading, error, data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {

            // Update cart in the sessionStorage.
            if (sizeSelect == true && qtySelect == true && availableStock > 0) {
                const updatedCart = getFormattedCart(data);
                sessionStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
                // Update cart data in React Context.
                setCart(updatedCart);
            }

        }
    });




    // Add to Cart Mutation.
    const [addToCart, { data: addToCartRes, loading: addToCartLoading, error: addToCartError }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: (data) => {


            // If error.
            if (addToCartError) {
                setRequestError(addToCartError.graphQLErrors[0].message);
            }

            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();
            setAlertCart(true)

        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);
                console.log(error);

            }
        }
    });

    const handleAddToCartClick = () => {
        if (sizeSelect == true && qtySelect == true && availableStock > 0 && qty <= availableStock) {
            setRequestError(null);
            addToCart();
            //handesessionStorage();
        } else {
            handleClickOpen();
        }
    };

    const handleCartRedirect = () => {
        event.preventDefault();
        window.location.href = "/cart";
    }

    return (

        <>
            {addToCartLoading &&
                <Backdrop className={classes.backdrop} open="true" >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
            <Button onClick={handleAddToCartClick} className={classes.addToCart} color="primary" size="large">Add to Cart</Button>
            {alertCart ?
                <Alert action={
                    <Button color="inherit" size="small" onClick={handleCartRedirect}>
                        VIEW CART
                    </Button>
                } severity="success">Item have been added to your cart</Alert>
                : null}
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