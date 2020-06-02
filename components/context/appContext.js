import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ cart, setCart ] = useState( null );
	const [isUserLoggedIn, setUserLogIn ] = useState();


	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'woo-next-cart' );
			let userToken = localStorage.getItem('authToken')
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			userToken = null !== userToken ? true : false;
			setCart( cartData );
			setUserLogIn(userToken);

		}

	}, [] );

	return (
		<AppContext.Provider value={{ value: [ cart, setCart ], value2: [isUserLoggedIn,setUserLogIn] }}>
			{ props.children }
		</AppContext.Provider>
	);
};