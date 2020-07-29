import Layout from "../components/mainLayout/layout";
import CartItemsContainer from "../components/cart/cart-page/cartItemsContainer";
import Head from 'next/head'

const Cart = () => {
	return (
		<Layout>
			<Head>
				<script async src="https://app.mobicredwidget.co.za/assets/js/instalment.js" />
			</Head>
			<CartItemsContainer />
		</Layout>
	)
};

export default Cart;