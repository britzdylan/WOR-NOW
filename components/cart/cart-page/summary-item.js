import React from 'react'
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({   
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



const summaryItem = (props) => {
    const {totalPrice, subTotal, totalTax, promoCode, promoValue, promoDescription} = props
    const classes= useStyles();

    return (

        <Paper elevation="5" className={classes.summary}>
                        <Typography variant="h4" color="primary" component="h2">Order Summary:</Typography>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography variant="subtitle1">Sub-Total</Typography>
                            <Typography variant="subtitle2">{`${subTotal}`}</Typography>
                        </div>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography variant="subtitle1">Total tax</Typography>
                            <Typography variant="subtitle2">{`${totalTax}`}</Typography>
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
                        <Typography variant="subtitle1">Promo Code: {promoCode}</Typography>
                            <Button variant="subtitle2">Add</Button>
                        </div>
                        <Divider className={classes.Div} />
                        <div className={classes.NamePrice}>
                            <Typography color="primary" variant="h4">Total</Typography>
                            <Typography color="primary" variant="subtitle1">{`${totalPrice}`}<Typography variant="overline"> Inc Vat</Typography></Typography>
                        </div>
                        <Link href="/checkout"><Button className={classes.btn} color="primary" fullWidth="true" size="large" variant="contained">Pay Securely Now</Button></Link>
                        <div className={classes.paymentMethods}>
                            <img  src="https://www.payfast.co.za/assets/images/features/Credit%20Cards.svg" width="50%"/> 
                        </div>
                        <div className={classes.paymentMethods}>
                            <img  src="https://www.payfast.co.za/assets/images/payfast_logo_colour.svg" width="50%"/>
                            <img  src="https://www.payfast.co.za/assets/images/credit-card.jpg" width="50%"/>
                        </div>
                    </Paper>
    )
}


export default summaryItem;