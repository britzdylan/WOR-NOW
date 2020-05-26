import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



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
    const {name, price, qty, value, image, productId, handleRemoveItem} = props

    return (
        <Paper elevation="3" className={classes.root} >
            <div className={classes.img}>
                <img src={image} alt={name} width="100%" />
            </div>
            <div className={classes.itemInfo}>
                <div className={classes.NamePrice}>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant="subtitle2">{`R ${price}`}</Typography>

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
                </div>
                <div className={classes.actions}>
                    <Button onClick={( event ) => handleRemoveItem(event, productId)} color="primary">Remove Item</Button>
                </div>
            </div>
        </Paper>
        
    )
}


export default CartItem