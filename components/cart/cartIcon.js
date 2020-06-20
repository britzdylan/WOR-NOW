import { useContext } from 'react';
import React from 'react';
import { AppContext } from "../context/appContext";
import Link from 'next/link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    absolute: {
        position: "absolute",
        top: theme.spacing(14)
    },
    qty: {

    }

}));

const CartIcon = (props) => {

    const classes = useStyles();

    const { value } = React.useContext(AppContext);

    const productsCount = (null !== value[0] && Object.keys(value[0]).length) ? value[0].productCount : 0;

    return (
        productsCount >= 1 ?
            <React.Fragment>
                <div className={classes.absolute}>
                    <IconButton >
                        <Link href="/cart">
                            <Tooltip arrow="true" placement="left" title="View your cart">
                                <Badge badgeContent={productsCount} color="primary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </Tooltip>
                        </Link>
                    </IconButton>
                    <Link href="/cart"><Button variant="caption">View Cart</Button></Link>
                </div>
            </React.Fragment >
            : null

    )
};

export default CartIcon;