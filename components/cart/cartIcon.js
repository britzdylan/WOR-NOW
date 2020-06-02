import { useContext } from 'react';
import React from 'react';
import { AppContext } from "../context/appContext";
import Link from 'next/link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
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

    const { value } = React.useContext(AppContext);
    
     const productsCount = ( null !== value[0] && Object.keys( value[0] ).length ) ? value[0].productCount : 0;

	return (
		<React.Fragment>
            <IconButton className={classes.absolute}>
                <Link href="/cart">
                    <Tooltip arrow="true" placement="left"  title="View your cart">
                        <Badge badgeContent={productsCount}  color="primary">
                            <ShoppingCartIcon />              
                        </Badge>
                    </Tooltip>
                </Link>
            </IconButton>
		</React.Fragment>

	)
};

export default CartIcon;