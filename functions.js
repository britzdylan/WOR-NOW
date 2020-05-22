export const getFloatVal = ( string ) => {
    let floatValue = string.replace( /[^\d\.]/g, '');
    return ( null !== floatValue ) ? parseFloat ( parseFloat( floatValue ).toFixed(2)) : '';
};

export const addFirstProduct = ( productData ) => {
    let productPrice = getFloatVal(productData[0].regularPrice);
    let variationId = productData[1];

                        //  if no item in the cart, create an empty array and push the items to the array
    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice,
        variationId : variationId
    };

    const newProduct = createNewProduct( productData[0], productData[1], JSON.parse(productData[2]) );
    newCart.products.push( newProduct );
     localStorage.setItem( 'woo-next-cart', JSON.stringify( newCart ));
     return newCart;
};


export const createNewProduct = ( product, productId, qty ) => {
    return {
        productId: productId,
        image: product.image.sourceUrl,
        price: product.regularPrice,
        qty: qty,
        totalPrice: parseFloat( ( getFloatVal(product.regularPrice) * qty ).toFixed(2) )
    }
};

export const updateCart = ( existingCart, productData, newQtyToAdd, newQty = false ) => {
       
        const updatedProducts = getUpdatedProducts( existingCart.products, productData, newQtyToAdd, newQty );

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
    const productExistIndex = isProductInCart( existingProductInCart, product[1], product[3] );
    const isThereStock = isProductAvailable(existingProductInCart, product[1], product[3]);
    console.log(isThereStock);
    if (-1 < productExistIndex && isThereStock[0] === true) {
        let updatedProducts = existingProductInCart;
        let updatedProduct = updatedProducts[ productExistIndex ]; 
        updatedProduct.qty = ( newQty ) ? parseInt( newQty ) : parseInt( updatedProduct.qty + qtyTobeAdded );
        updatedProduct.totalPrice =  getFloatVal(product[0].regularPrice) * updatedProduct.qty ;
    
        return updatedProducts;
    } else {
        if (-1 < productExistIndex && isThereStock[0] === false) {
            console.error('no stock available');
            return false;
        } else {
            

            let productPrice = getFloatVal( product[0].regularPrice );
            const newProduct = createNewProduct( product[0],product[1], qtyTobeAdded );
            existingProductInCart.push(newProduct);
    
            return existingProductInCart;
        }
        
    }

};


//  return index of the product if it exists
export const isProductInCart = ( existingProductInCart, productId, stockAvailable) => {
        const returnItemThatExits = ( item, index) => {
            if (productId === item.productId ) {
                return item;                
            }
            
          
        };

    
        const newArray = existingProductInCart.filter( returnItemThatExits );
     
        return existingProductInCart.indexOf( newArray[0] )
            

    
}

export const isProductAvailable = ( existingProductInCart, productId, stockAvailable) => {
    const returnItemThatExits = ( item, index) => {
        if (productId === item.productId ) {
           if ( item.qty < stockAvailable) {
            return true;
           }   else {
               return false;
           }               
        }
        
      
    };


    const newArray = existingProductInCart.map( returnItemThatExits );
 
    return newArray
        


}



