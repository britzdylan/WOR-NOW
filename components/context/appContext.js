import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ cart, setCart ] = useState( null );
	const [isUserLoggedIn, setUserLogIn ] = useState();
	const [userData, setUserData] = useState(undefined);


	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'woo-next-cart' );
			let userToken = localStorage.getItem('authToken');
			let userData = localStorage.getItem('userData');
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			userToken = null !== userToken ? true : false;
			userData = null !== userData ? JSON.parse( userData ) : '';
			setCart( cartData );
			setUserLogIn(userToken);
			setUserData(userData);

		}

	}, [] );

	return (
		<AppContext.Provider value={{ value: [ cart, setCart ], value2: [isUserLoggedIn,setUserLogIn], value3: [userData,setUserData] }}>
			{ props.children }
		</AppContext.Provider>
	);
};