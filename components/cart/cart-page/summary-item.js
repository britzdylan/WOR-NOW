import React from 'react'
import TextField from '@material-ui/core/TextField';
import { AppContext } from "../../context/appContext";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import GET_CART from '../../../queries/GET_CART';
import ADD_COUPON from '../../mutations/add-coupon';
import { getFormattedCart } from '../../../functions';
import { v4 } from 'uuid';




const useStyles = makeStyles((theme) => ({
    summary: {
        padding: '16px 32px',
        width: '100%',
        margin: '32px 0 0 0',

    },
    NamePrice: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0',
        alignItems: 'flex-end'
    },
    Div: {
        margin: '16px 0'
    },
    btn: {
        margin: '32px 0',
        backgroundColor: "#19A85E"
    },
    paymentMethods: {
        width: "50%",
        margin: "0 auto 16px auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

}));



const summaryItem = (props) => {
    const { totalPrice, subTotal, totalTax, promoCode, promoValue, promoDescription } = props
    const classes = useStyles();
    const [requestError, setRequestError] = React.useState(null);
    const { value } = React.useContext(AppContext);
    const [cart, setCart] = value;
    const [couponCode, setCode] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const couponData = {
        clientMutationId: v4(),
        code: couponCode
    }

    //Checkout or CreateOrder Mutation.
    const [addCoupon, { data: addCouponResponse, loading: addCouponLoading, error: addCouponError }] = useMutation(ADD_COUPON, {
        variables: {
            input: couponData
        },
        onCompleted: (data) => {
            refetch();
        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);
                console.log(error, addCouponResponse);
            }
        }
    });

    const handleCoupon = (event) => {
        setCode(event.target.value);
    }

    const handleCouponSubmit = (event) => {
        addCoupon();
    }

    console.log(couponCode);


    //Get Cart Data.
    const { loading, error, data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
            // Update cart data in React Context.
            setCart(updatedCart);
        }
    });

    return (

        <Paper elevation="5" className={classes.summary}>
            <Typography variant="h4" color="primary" component="h2">Order Summary:</Typography>
            <Divider className={classes.Div} />
            <div className={classes.NamePrice}>
                <Typography variant="subtitle1">Sub-Total</Typography>
                <Typography variant="subtitle2">{`${subTotal ? subTotal : 0}`}</Typography>
            </div>
            <Divider className={classes.Div} />
            <div className={classes.NamePrice}>
                <Typography variant="subtitle1">Total tax</Typography>
                <Typography variant="subtitle2">{`${totalTax ? totalTax : 0}`}</Typography>
            </div>
            <Divider className={classes.Div} />
            <div className={classes.NamePrice}>
                <Typography variant="subtitle1">Shipping - calculated at checkout</Typography>
                <Typography variant="subtitle2">R -</Typography>
            </div>

            <Typography variant="subtitle2">Item(s) will arrive in 2-3 days from payment date</Typography>
            <Typography variant="subtitle2">All orders are fulfilled by Dawn Wing</Typography>
            <Divider className={classes.Div} />
            <div className={classes.NamePrice}>
                <div>
                    <Typography variant="subtitle1">Promo Code: {promoCode}</Typography>

                </div>
                <Button variant="subtitle2" onClick={handleClickOpen} >Add</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add coupon</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Coupon Code"
                            type="email"
                            onChange={handleCoupon}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={(event) => handleCouponSubmit(event)} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            {promoCode ? <Alert severity="success">Coupon code: {promoCode} applied. {promoDescription}</Alert>
                : null
            }

            <Divider className={classes.Div} />
            <div className={classes.NamePrice}>
                <Typography color="primary" variant="h4">Total</Typography>
                <Typography color="primary" variant="subtitle1">{`${totalPrice}`}<Typography variant="overline"> Inc Vat</Typography></Typography>
            </div>
            {totalPrice ? <Link href="/checkout"><Button className={classes.btn} color="primary" fullWidth="true" size="large" variant="contained">Pay Securely Now</Button></Link> : null}
            <div className={classes.paymentMethods}>
                <img src="https://www.payfast.co.za/assets/images/features/Credit%20Cards.svg" width="50%" />
            </div>
            <div className={classes.paymentMethods}>
                <img src="https://www.payfast.co.za/assets/images/payfast_logo_colour.svg" width="50%" />
                <img src="https://www.payfast.co.za/assets/images/credit-card.jpg" width="50%" />
            </div>
        </Paper>
    )
}


export default summaryItem;