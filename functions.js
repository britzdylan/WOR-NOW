import { v4 } from 'uuid';

export const getFloatVal = (string) => { //reove the R sign from the price
    let floatValue = string.replace(/[^\d\.]/g, '');
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = (productData) => { //create oyr first product into our cart
    let productPrice = getFloatVal(productData[0].regularPrice) * JSON.parse(productData[2]); //get the price
    let variationId = productData[1]; //get the product Id
    let totalProductsCount = (totalProductsCount != null) ? totalProductsCount + JSON.parse(productData[2]) : JSON.parse(productData[2]); //calculation for the total products in the cart

    //  if no item in the cart, create an empty array and push the items to the array
    let newCart = { //basic structure of the cart
        products: [],
        totalProductsCount: totalProductsCount,
        totalProductsPrice: productPrice,
    };

    const newProduct = createNewProduct(productData[0], productData[1], JSON.parse(productData[2]), productData[4]); //pushed the data to the function
    newCart.products.push(newProduct); //adds the new product to the product array
    localStorage.setItem('woo-next-cart', JSON.stringify(newCart)); //adds the cart to local storage
    return newCart; //returns the new cart
};


export const createNewProduct = (product, productId, qty, selection) => { //function to create a new product
    console.log(selection);
    return {
        productId: productId,
        image: product.image.sourceUrl,
        price: product.regularPrice,
        name: product.name,
        value: selection,
        qty: qty,
        totalPrice: parseFloat((getFloatVal(product.regularPrice) * qty).toFixed(2))
    }
};

export const updateCart = (existingCart, productData, newQtyToAdd, newQty = false) => { //function to update the cart

    const updatedProducts = getUpdatedProducts(existingCart.products, productData, newQtyToAdd, newQty); //gets the updated product to add to the cart

    if (updatedProducts === false) {
        return null;
    } else {
        const addPrice = (total, item) => {
            total.totalPrice += item.totalPrice;
            total.qty += item.qty;

            return total;
        }

        // add total price of each item to get the total price
        let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

        const updatedCart = {
            products: updatedProducts,
            totalProductsCount: parseInt(total.qty),
            totalProductsPrice: parseFloat(total.totalPrice)
        }

        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

        return updatedCart
    }
};


export const getUpdatedProducts = (existingProductInCart, product, qtyTobeAdded, newQty = false) => {
    const isThereStock = isProductAvailable(existingProductInCart, product[1], product[3], qtyTobeAdded); //check if there is stock

    // if the variable returns true
    if (isThereStock === true) {
        let updatedProducts = existingProductInCart; // get the entire array
        let updatedProduct = updatedProducts[productExistIndex];  //get the specific product to be modified
        updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + JSON.parse(qtyTobeAdded)); //update the quantity of the product
        updatedProduct.totalPrice = getFloatVal(product[0].regularPrice) * updatedProduct.qty; //get the total price of the product
        return updatedProducts; // return the new product
    } else {
        // check if there is no stock
        if (isThereStock === false) {
            window.alert('No more stock available');
            return false;
        } else { //if the variable returns undefined create a new products
            let productPrice = getFloatVal(product[0].regularPrice) * JSON.parse(product[2]);
            const newProduct = createNewProduct(product[0], product[1], JSON.parse(product[2]), product[4]);
            existingProductInCart.push(newProduct);
            return existingProductInCart;
        }

    }

};


//  return index of the product if it exists and if there is stock and check if the user has selected the right quantities to what is available

export const isProductAvailable = (existingProductInCart, productId, stockAvailable, qtyTobeAdded) => {
    const returnItemThatExits = (item, index) => {
        if (productId === item.productId) {
            if (item.qty < stockAvailable && qtyTobeAdded <= stockAvailable - item.qty) {
                isAvailable = true;
            } else {
                isAvailable = false;
            }
        }


    };

    let isAvailable = undefined

    const newArray = existingProductInCart.map(returnItemThatExits);

    return isAvailable




}

export const isProductInCart = (existingProductInCart, productId) => {
    const returnItemThatExits = (item, index) => {
        if (productId === item.productId) {
            return item;
        } else {
            return null;
        }


    };
    const newArray = existingProductInCart.map(returnItemThatExits);
    return existingProductInCart.indexOf(newArray[0])
}

//remove an item from the cart

export const removeItemFromCart = (productId) => {
    let existingCart = localStorage.getItem('woo-next-cart');
    existingCart = JSON.parse(existingCart);

    //if there is only one item then delete the cart
    if (1 === existingCart.products.length) {
        localStorage.removeItem('woo-next-cart');
        return null;
    }

    //check if the product exist then remove the product
    const productExistIndex = isProductInCart(existingCart.products, productId);

    if (-1 < productExistIndex) {
        const productToBeRemoved = existingCart.products[productExistIndex];
        const qtyToBeRemovedFromTotal = productToBeRemoved.qty;
        const priceToBeDeducted = productToBeRemoved.totalPrice;

        //remove that product from the array update totals
        let updatedCart = existingCart;
        updatedCart.products.splice(productExistIndex, 1);
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeducted;
        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
        return updatedCart;

    } else {
        return existingCart;
    }
};


export const getFormattedCart = (data) => {
    let formattedCart = null;

    if (undefined === data || !data.cart.contents.edges.length) {
        return formattedCart;
    }

    const contents = data.cart.contents.edges;
    const coupons = data.cart.appliedCoupons.edges;
    const shippingData = data.cart.availableShippingMethods;
    const cart = data.cart
    // Create an empty object.
    formattedCart = {};
    formattedCart.products = [];
    //assign values to the new cart object
    for (let i = 0; i < contents.length; i++) {
        formattedCart.products.push(contents[i]);
    }
    formattedCart.coupons = coupons;
    formattedCart.shippingData = shippingData;
    formattedCart.productCount = cart.contents.itemCount;
    formattedCart.subTotal = cart.subtotal;
    formattedCart.total = cart.total;
    formattedCart.totalTax = cart.totalTax;
    formattedCart.chosenShippingMethod = cart.chosenShippingMethod;


    //Imrans method
    // formattedCart.products = [];
    // let totalProductsCount = 0;
    // let totalProductsPrice = 0;

    // for( let i = 0; i < givenProducts.length; i++  ) {
    // 	const givenProduct = givenProducts[ i ].product;
    // 	const product = {};
    // 	const total = getFloatVal( givenProduct.regularPrice );

    //  product.productId = variationId;
    // 	product.cartKey = givenProducts[ i ].key;
    // 	product.name = givenProduct.name;
    // 	product.qty = qty;
    // 	product.price = givenProduct.regularPrice;
    // 	product.totalPrice = total * JSON.parse(product.qty);
    // 	product.image = {
    // 		sourceUrl: givenProduct.image.sourceUrl,
    // 		srcSet: givenProduct.image.srcSet,
    // 		title: givenProduct.image.title
    //     };
    //     product.tax = givenProducts[i].tax;
    //     product.variationValue = selection;

    //     totalProductsCount += givenProducts[ i ].quantity;
    //     totalProductsPrice += total;

    // 	// Push each item into the products array.
    // 	formattedCart.products.push( product );
    // }

    // formattedCart.totalProductsCount = totalProductsCount;
    // formattedCart.totalProductsPrice = data.cart.total;
    // formattedCart.subTotal = data.cart.subtotal;
    // formattedCart.totalTax = data.cart.totalTax;
    // formattedCart.CouponName =  ( data.cart.appliedCoupons.nodes.length >= 1 ) ?  data.cart.appliedCoupons.nodes[0].code : '';
    // formattedCart.CouponAmount = ( data.cart.appliedCoupons.nodes.length >= 1 ) ?  data.cart.appliedCoupons.nodes[0].amount : 0;

    return formattedCart;

};


export const createCheckoutData = (AllBillingData, AllShippingData, paymentMethod, shippingMethod) => {
    const checkoutData = {
        clientMutationId: v4(),
        // account: {
        //     password: account,
        //     username: AllBillingData[6]
        // },
        billing: {
            firstName: AllBillingData[7],
            lastName: AllBillingData[8],
            address1: AllBillingData[2],
            address2: AllBillingData[3],
            city: AllBillingData[4],
            country: AllBillingData[0],
            state: AllBillingData[1],
            postcode: AllBillingData[10],
            email: AllBillingData[6],
            phone: AllBillingData[9],
            company: AllBillingData[5]
        },
        shipping: {
            firstName: AllShippingData[6],
            lastName: AllShippingData[7],
            address1: AllShippingData[2],
            address2: AllShippingData[3],
            city: AllShippingData[4],
            country: AllShippingData[0],
            state: AllShippingData[1],
            postcode: AllShippingData[9],
            phone: AllShippingData[8],
            company: AllShippingData[5]
        },
        shipToDifferentAddress: false,
        paymentMethod: paymentMethod,
        isPaid: false,
        shippingMethod: shippingMethod,
        transactionId: "hjkhjkhsdsdiui"
    };

    return checkoutData;
};

/**
 * Get the updated items in the below format required for mutation input.
 *
 * [
 * { "key": "33e75ff09dd601bbe6dd51039152189", "quantity": 1 },
 * { "key": "02e74f10e0327ad868d38f2b4fdd6f0", "quantity": 1 },
 * ]
 *
 * Creates an array in above format with the newQty (updated Qty ).
 *
 */
export const getUpdatedItems = (products, newQty, cartKey) => {

    // Create an empty array.
    const updatedItems = [];

    // Loop through the product array.
    products.map((cartItem) => {

        // If you find the cart key of the product user is trying to update, push the key and new qty.
        if (cartItem.cartKey === cartKey) {

            updatedItems.push({
                key: cartItem.cartKey,
                quantity: parseInt(newQty)
            });

            // Otherwise just push the existing qty without updating.
        } else {
            updatedItems.push({
                key: cartItem.cartKey,
                quantity: cartItem.qty
            });
        }
    });

    // Return the updatedItems array with new Qtys.
    return updatedItems;

};


export const setUserSessionData = (data) => {
    const userDataInput = {};
    //set authToken in localstorage
    localStorage.setItem('authToken', data.login.authToken);

    //asign values to new object

    const qryData = data.login;

    userDataInput.billing = qryData.customer.billing;
    userDataInput.shipping = qryData.customer.shipping;
    userDataInput.orders = qryData.customer.orders;
    userDataInput.firstName = qryData.customer.firstName;
    userDataInput.lastName = qryData.customer.lastName;
    userDataInput.email = qryData.customer.email;
    userDataInput.id = qryData.customer.id;
    userDataInput.customerId = qryData.customer.customerId;
    userDataInput.date = qryData.customer.date;
    userDataInput.username = qryData.customer.username;
    userDataInput.refreshToken = data.login.refreshToken;
    userDataInput.clientMutationId = qryData.clientMutationId




    return userDataInput;
}

