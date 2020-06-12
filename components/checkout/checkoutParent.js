import React from 'react';
import { AppContext } from "../context/appContext";
import CheckoutForm from "./checkoutForm";



const CheckoutParent = () => {

    const { value2 } = React.useContext(AppContext);
    const [isUserLoggedIn, setUserLogIn] = value2;

    return (
        <CheckoutForm />
    )

};

export default CheckoutParent;