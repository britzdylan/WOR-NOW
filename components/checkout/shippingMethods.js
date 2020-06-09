import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { AppContext } from "../context/appContext";
import { Typography, Button } from "@material-ui/core";
import { getFloatVal } from '../../functions';


const useStyles = makeStyles((theme) => ({
    payments: {
        padding: "12px",
        margin: "24px 0"
    }
}));

const OrderDetails = (props) => {
    const { handleShippingMethod, shippingMethod } = props;
    const classes = useStyles();
    const { value } = React.useContext(AppContext);
    const [cart, setCart] = value;
    const cartTotal = getFloatVal(cart.total);
    return (
        <>
            <FormControl component="fieldset" className={classes.payments}>
                <FormLabel component="legend">Shipping Methods</FormLabel>
                <RadioGroup aria-label="Shipping" name="Shipping1" value={shippingMethod} onChange={handleShippingMethod}>
                    {cartTotal > 799 ? <FormControlLabel value="free_shipping:6" control={<Radio />} label="Free Dawnwing Express Delivery" /> : null}
                    {cartTotal < 799 ? <FormControlLabel value="flat_rate:8" control={<Radio />} label="Dawnwing Express Delivery at R 150" /> : null}
                    <FormControlLabel value="local_pickup:12" control={<Radio />} label="Local pick up at WorldofRugby" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default OrderDetails