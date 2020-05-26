import { useContext } from 'react';
import { AppContext } from "../context/appContext";
import Link from 'next/link';
import ShopIcon from '@material-ui/icons/Shop';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
        position: 'fixed',
        top: theme.spacing(10),
        right: theme.spacing(5),
        [theme.breakpoints.down('sm')] : {
            top: theme.spacing(20),
            right: theme.spacing(1),
          },
      },
      qty: {
          
      }
     
  }));

const CartIcon = (props) => {

    const classes = useStyles();

    const [ newCart ] = useContext( AppContext );
    
	const productsCount = ( null !== newCart && Object.keys( newCart ).length ) ? newCart.totalProductsCount : '';
	const totalPrice = ( null !== newCart && Object.keys( newCart ).length ) ? newCart.totalProductsPrice : '';
	return (
		<React.Fragment>
			<Link href="/cart">
                <Tooltip arrow="true" placement="left" title={totalPrice ? `Total cart Value: ${totalPrice}` : 'No Items in your cart'} aria-label={totalPrice ? `Total Price: ${totalPrice}` : 'No Items in your cart'}>
                    <Fab color="primary"  variant="extended" className={classes.fab} className={classes.absolute}>
                    <ShopIcon />
                    {productsCount ? <Typography className={classes.qty} variant="subtitle">{`(${productsCount}) | ${totalPrice ? totalPrice : '' }`}</Typography> : null}
                    </Fab>                    
                </Tooltip>
			</Link>
		</React.Fragment>

	)
};

export default CartIcon;