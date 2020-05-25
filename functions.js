export const getFloatVal = ( string ) => { //reove the R sign from the price
    let floatValue = string.replace( /[^\d\.]/g, '');
    return ( null !== floatValue ) ? parseFloat ( parseFloat( floatValue ).toFixed(2)) : '';
};

export const addFirstProduct = ( productData ) => { //create oyr first product into our cart
    let productPrice = getFloatVal(productData[0].regularPrice) * JSON.parse(productData[2]); //get the price
    let variationId = productData[1]; //get the product Id
    let totalProductsCount = (totalProductsCount != null) ? totalProductsCount + JSON.parse(productData[2]) : JSON.parse(productData[2]); //calculation for the total products in the cart

    //  if no item in the cart, create an empty array and push the items to the array
    let newCart = { //basic structure of the cart
        products: [],
        totalProductsCount: totalProductsCount,
        totalProductsPrice: productPrice,
        variationId : variationId
    };

    const newProduct = createNewProduct( productData[0], productData[1], JSON.parse(productData[2]) ); //pushed the data to the function
     newCart.products.push( newProduct ); //adds the new product to the product array
     localStorage.setItem( 'woo-next-cart', JSON.stringify( newCart )); //adds the cart to local storage
     return newCart; //returns the new cart
};


export const createNewProduct = ( product, productId, qty ) => { //function to create a new product
    return {
        productId: productId,
        image: product.image.sourceUrl,
        price: product.regularPrice,
        qty: qty,
        totalPrice: parseFloat( ( getFloatVal(product.regularPrice) * qty ).toFixed(2) )
    }
};

export const updateCart = ( existingCart, productData, newQtyToAdd, newQty = false ) => { //function to update the cart
       
        const updatedProducts = getUpdatedProducts( existingCart.products, productData, newQtyToAdd, newQty ); //gets the updated product to add to the cart

        if (updatedProducts === false) {
            return null;
        } else {
            const addPrice = ( total, item ) => {
                total.totalPrice += item.totalPrice;
                total.qty += item.qty;
    
                return total;
            }
    
            // add total price of each item to get the total price
            let total = updatedProducts.reduce( addPrice, { totalPrice: 0, qty: 0});
    
            const updatedCart = {
                products: updatedProducts,
                totalProductsCount: parseInt( total.qty ),
                totalProductsPrice: parseFloat( total.totalPrice)
            }
    
            localStorage.setItem( 'woo-next-cart', JSON.stringify( updatedCart ));
    
            return updatedCart
        }
    };


export const getUpdatedProducts = ( existingProductInCart, product, qtyTobeAdded, newQty = false) => {
    const isThereStock = isProductAvailable(existingProductInCart, product[1], product[3], qtyTobeAdded); //check if there is stock

    // if the variable returns true
    if (isThereStock === true) {
        let updatedProducts = existingProductInCart; // get the entire array
        let updatedProduct = updatedProducts[ productExistIndex ];  //get the specific product to be modified
        updatedProduct.qty = ( newQty ) ? parseInt( newQty ) : parseInt( updatedProduct.qty + JSON.parse(qtyTobeAdded) ); //update the quantity of the product
        updatedProduct.totalPrice =  getFloatVal(product[0].regularPrice) * updatedProduct.qty ; //get the total price of the product
        return updatedProducts; // return the new product
    } else { 
        // check if there is no stock
        if (isThereStock === false) {
            window.alert('No more stock available');
            return false;
        } else { //if the variable returns undefined create a new products
            let productPrice = getFloatVal(product[0].regularPrice) * JSON.parse(product[2]);
            const newProduct = createNewProduct( product[0],product[1], JSON.parse(product[2]) );
            existingProductInCart.push(newProduct);
            return existingProductInCart;
        }
        
    }

};


//  return index of the product if it exists and if there is stock and check if the user has selected the right quantities to what is available

export const isProductAvailable = ( existingProductInCart, productId, stockAvailable, qtyTobeAdded) => {
    const returnItemThatExits = ( item, index) => {
        if (productId === item.productId ) {
           if ( item.qty < stockAvailable && qtyTobeAdded <= stockAvailable - item.qty) {
            isAvailable = true;
           }   else {
            isAvailable = false;
           }               
        }
        
      
    };

    let isAvailable = undefined

    const newArray = existingProductInCart.map( returnItemThatExits );
 
    return isAvailable
        


}



