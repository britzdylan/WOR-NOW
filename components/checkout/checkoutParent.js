import React from 'react';
import { Typography } from "@material-ui/core";
import { AppContext } from "../context/appContext";
import Link from "next/link";
import CheckoutForm from "./checkoutForm";



const CheckoutParent = () => {

    const { value2 } = React.useContext(AppContext);
    const [isUserLoggedIn, setUserLogIn] = value2;

    return (
        <CheckoutForm />
        //isUserLoggedIn ? <CheckoutForm /> : <Typography variant="h4" component="h2" align="center" gutterBottom="true">Please <Link href="/account"><a>log in</a></Link> or <Link href="/sign-up"><a>create an account</a></Link> before proceeding to checkout</Typography>
    )

};

export default CheckoutParent;