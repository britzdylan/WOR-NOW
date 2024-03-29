import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => { }
]);

export const AppProvider = (props) => {

	const [cart, setCart] = useState(null);
	const [isUserLoggedIn, setUserLogIn] = useState();
	const [userData, setUserData] = useState(undefined);
	const [productJSON, setProductJson] = useState("");


	useEffect(() => {

		// @TODO Will add option to show the cart with sessionStorage later.
		if (process.browser) {

			let cartData = sessionStorage.getItem('woo-next-cart');
			let userToken = sessionStorage.getItem('authToken');
			let userData = sessionStorage.getItem('userData');
			let productData = sessionStorage.getItem('productData');
			cartData = null !== cartData ? JSON.parse(cartData) : '';
			userToken = null !== userToken ? true : false;
			userData = null !== userData ? JSON.parse(userData) : '';
			"" !== productData ? setProductJson(productData) : setProductJson("");
			setCart(cartData);
			setUserLogIn(userToken);
			setUserData(userData);
		}

	}, []);

	return (
		<AppContext.Provider value={{ value: [cart, setCart], value2: [isUserLoggedIn, setUserLogIn], value3: [userData, setUserData], value4: [productJSON, setProductJson] }}>
			{props.children}
		</AppContext.Provider>
	);
};