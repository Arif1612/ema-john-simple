import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;//option1
    // const { cart } = props; //option 2
    // console.log(cart);
    let totalPrice = 0; 
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + tax;
 
    return (
        <div className='cart' >
            <h4>Order Summary</h4>
            <p>Selected Items: $ {cart.length}</p>
            <p>totalPrice Price: ${totalPrice} </p>
            <p>totalPrice Shipping:{totalShipping} </p>
            <p>Tax:{tax.toFixed(2)} </p>
            <p>Grand Price: ${ grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;