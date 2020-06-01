import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CLEAR_CART_MUTATION from "../../mutations/clear-cart";
import { useState, useContext } from 'react';
import { AppContext } from "../../context/appContext";
import { useMutation, useQuery } from "@apollo/react-hooks";
import GET_CART from "../../../queries/GET_CART";
import { v4 } from 'uuid';
import { getFormattedCart } from '../../../functions';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'no-wrap',
      padding: '12px',
      justifyContent: 'left',
      margin: '24px 0',
      [theme.breakpoints.down('xs')] : {
        display: 'block',
        width: '100%',
        flexWrap: 'wrap'
      },
    },
    itemInfo : {
        width: '70%',
        [theme.breakpoints.down('xs')] : {
            width: '100%',
          },
    },
    img: {
        width: '30%',
        marginRight: '24px',
        [theme.breakpoints.down('xs')] : {
            width: '100%',
          },
    },
    NamePrice : {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0',
        alignItems: 'center'
    },
    actions: {
        marginTop: "100px"
    }
  }));

const CartItem = (props) => {

    const classes = useStyles();
    const [ cart, setCart ] = useContext( AppContext );
    const {name, price, qty, value, image, productId, tax, itemKey} = props;
    // const [iKey, setKey] = useState("");
    const [ requestError, setRequestError ] = useState( null );
    let iKey = [];

    const handleRemoveItem = (event, itemKey) => {
        console.log(itemKey)
        iKey.push(itemKey)
        removeItem();
      };
     
      const [ removeItem, { data: removeItemRes, loading: removeItemLoading, error: removeItemError }] = useMutation( CLEAR_CART_MUTATION, {
        variables: {
          input: {
            clientMutationId : v4(),
            keys : iKey
          },
        },
        onCompleted: () => {
            //on loading

          // If error.
          if ( removeItemError ) {
            setRequestError( removeItemError.graphQLErrors[ 0 ].message );
          }
    
          // On Success:
          // 1. Make the GET_CART query to update the cart with new values in React context.
                refetch(); 
                iKey = [];
        },
        onError: ( error ) => {
          if ( error ) {
            setRequestError( error.graphQLErrors[ 0 ].message );
            console.warn(error, iKey);
          }
        }
        } );
  
      // Get Cart Data.
      const { loading, error, data, refetch } = useQuery( GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
  
            // Update cart in the localStorage.
                const updatedCart = getFormattedCart( data );
                localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ) );
                // Update cart data in React Context.
                setCart( updatedCart );
            }
            
        } );
    
    return (

        
        <Paper elevation="3" className={classes.root} >
            <div className={classes.img}>
                <img src={image} alt={name} width="100%" />
            </div>
            <div className={classes.itemInfo}>
                <div className={classes.NamePrice}>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant="subtitle2">{`${price}`}</Typography>

                </div>
                <div className={classes.details}>
                    <Divider />
                    <div className={classes.NamePrice}>
                        <Typography variant="subtitle1">Variation:</Typography>
                         <Typography variant="subtitle2">{value}</Typography>
                    </div>
                    <Divider />
                    <div className={classes.NamePrice}>
                        <Typography variant="subtitle1">Quantity:</Typography>
                        <Typography variant="subtitle2">{qty}</Typography>
                    </div>
                    <Divider />
                    <div className={classes.NamePrice}>
                        <Typography variant="subtitle1">Tax:</Typography>
                        <Typography variant="subtitle2">{tax}</Typography>
                    </div>
                    <Divider />
                </div>
                <div className={classes.actions}>
                {loading ? 
                    <CircularProgress color="inherit" />
                :
                    <Button onClick={( event ) => handleRemoveItem(event, itemKey)} color="primary">Remove Item</Button>     
                }
                </div>
            </div>
        </Paper>
        
    )
}


export default CartItem