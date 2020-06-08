import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    payments: {
        padding: "12px",
        margin: "24px 0"
    }
}));

const OrderDetails = (props) => {
    const { handleShippingMethod, shippingMethod } = props;
    const classes = useStyles();

    return (

        <>
            <FormControl component="fieldset" className={classes.payments}>
                <FormLabel component="legend">Shipping Methods</FormLabel>
                <RadioGroup aria-label="Shipping" name="Shipping1" value={shippingMethod} onChange={handleShippingMethod}>
                    <FormControlLabel value="free_shipping:6" control={<Radio />} label="Free Shipping" />
                    <FormControlLabel value="flat_rate:8" control={<Radio />} label="Flat Rate" />
                    <FormControlLabel value="local_pickup:12" control={<Radio />} label="Local pick at WorldofRugby" />
                </RadioGroup>
            </FormControl>
            <Typography>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</Typography>        </>
    )
}

export default OrderDetails