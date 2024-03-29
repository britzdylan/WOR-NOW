import React from "react";
import Payments from "./payments";
import YourOrder from "./yourOrder";
import ShippingMerhods from './shippingMethods';

const OrderDetails = (props) => {
    const { setPaymentMethod, paymentMethod, handleShippingMethod, shippingMethod, shippingcost } = props;
    return (

        <>
            <YourOrder shippingcost={shippingcost} />
            <ShippingMerhods handleShippingMethod={handleShippingMethod} shippingMethod={shippingMethod} />
            <Payments setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod} />
        </>
    )
}

export default OrderDetails