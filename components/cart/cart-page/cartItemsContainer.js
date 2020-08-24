import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "../../context/appContext";
import CartItem from "../cart-page/cartItem";
import Alert from '@material-ui/lab/Alert';
import SummaryItem from './summary-item';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "32px auto 64px auto",
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%',
      margin: "32px auto 64px auto"
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
      margin: "32px auto 64px auto"
    },
  },
  cartContainers: {
    margin: '32px 0',
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    gridColumnGap: '24px',
    justifyItems: 'left',
    alignItems: 'start',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "100%",
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "100%"
    },
  },
  Items: {
    width: "100%"
  },
  btn: {
    marginTop: "36px"
  }

}));

const CartItemsContainer = () => {
  const { value } = React.useContext(AppContext);
  const [cart, setCart] = value;




  const classes = useStyles();
  return (
    <div className={classes.root}>
      {cart ?
        <div className={classes.cartContainers}>
          <div className={classes.Items}>
            <Typography variant="h2" component="h1">View Your Cart:</Typography>
            <Typography variant="subtitle2" component="p">You have 4 items in your cart</Typography>
            <Alert severity="info">For the faster delivery make sure to place your order before 12pm</Alert>
            {cart.products.length ?
              cart.products.map((item, index) => <CartItem
                key={index}
                tax={item.node.tax}
                name={item.node.product.name}
                price={item.node.variation.salePrice ? item.node.variation.salePrice : item.node.variation.regularPrice}
                productId={item.node.product.productId}
                qty={item.node.quantity}
                variationName={item.node.variation.name}
                image={item.node.product.image != null ? item.node.product.image.sourceUrl : '/placeholder-image.jpg'}
                itemKey={item.node.key}
              />)
              : ''}
          </div>
          <SummaryItem totalPrice={cart.total}
            subTotal={cart.subTotal}
            totalTax={cart.totalTax}
            promoCode={cart.coupons.length > 0 ? cart.coupons[0].node.code : ""}
            promoValue={cart.coupons.length > 0 ? cart.coupons[0].node.ammount : ""}
            promoDescription={cart.coupons.length > 0 ? cart.coupons[0].node.description : ""} />
        </div>

        :
        <div className={classes.cartContainers}>
          <div className={classes.Items}>
            <Typography variant="h2" component="h1">View Your Cart:</Typography>
            <Typography variant="subtitle2" component="p">You have 0 items in your cart</Typography>
            <Alert severity="info">For the faster delivery make sure to place your order before 12pm</Alert>
            <Typography variant="h3" className={classes.btn}>You have no items in your cart</Typography>
            <Link href="/shop"><Button variant="contained" className={classes.btn} color="primary">Visit the shop</Button></Link>
          </div>
          <SummaryItem totalPrice={0} />
        </div>}
    </div>
  );
};

export default CartItemsContainer;