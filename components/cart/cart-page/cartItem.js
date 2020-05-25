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

    return (
        <Paper elevation="3" className={classes.root} >
            <div className={classes.img}>
                <img src="https://www.lovell-rugby.co.uk/products/388447.jpg" alt="" width="100%" />
            </div>
            <div className={classes.itemInfo}>
                <div className={classes.NamePrice}>
                    <Typography variant="subtitle1">Malice Elite Mens Boots</Typography>
                    <Typography variant="subtitle2">R 3200.00</Typography>

                </div>
                <div className={classes.details}>
                    <Divider />
                    <div className={classes.NamePrice}>
                        <Typography variant="subtitle1">Size:</Typography>
                        <Typography variant="subtitle2">9 UK</Typography>
                    </div>
                    <Divider />
                    <div className={classes.NamePrice}>
                        <Typography variant="subtitle1">Quantity:</Typography>
                        <Typography variant="subtitle2">1</Typography>
                    </div>
                    <Divider />
                </div>
                <div className={classes.actions}>
                    <Button color="primary">Remove Item</Button>
                </div>
            </div>
        </Paper>
        
    )
}


export default CartItem