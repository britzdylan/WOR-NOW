export const getFloatVal = ( string ) => {
    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g)[0];
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

    };


export const getUpdatedProducts = ( existingProductInCart, product, qtyTobeAdded, newQty = false) => {
    const productExistIndex = isProductInCart( existingProductInCart, product.variations ? product.variations.nodes[0].variationId : product.productId );
    if (-1 < productExistIndex ) {
        let updatedProducts = existingProductInCart;
        console.log(updatedProducts)
        let updatedProduct = updatedProducts[ productExistIndex ]; 
        updatedProduct.qty = ( newQty ) ? parseInt( newQty ) : parseInt( updatedProduct.qty + qtyTobeAdded );
        updatedProduct.totalPrice = parseFloat( updatedProduct.regularPrice * updatedProduct.qty ).toFixed(2);
    
        return updatedProducts;
    } else {
        let productPrice = getFloatVal( product.regularPrice );
        const newProduct = createNewProduct( product, product.productId, qtyTobeAdded );
        existingProductInCart.push(newProduct);

        return existingProductInCart;
    }


   

};


//  return index of the product if it exists
export const isProductInCart = ( existingProductInCart, productId) => {

    const returnItemThatExits = ( item, index) => {
        if (productId === item.productId) {
           
            return item;
            
        }
        
      
    };

    const newArray = existingProductInCart.filter( returnItemThatExits );
    console.log(existingProductInCart.indexOf( newArray[0] ))
    return existingProductInCart.indexOf( newArray[0] );

}