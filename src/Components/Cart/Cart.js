import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

//====>>Price Collect & Show [Start]
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }
//====>>Price Collect & Show [End]

//====>>Shipping & Handing [Start]
    let shipping = 0;
        if (total > 35){
            shipping = 0;
        }
        else if(total > 15){
            shipping = 4.00;
        }
        else if(total > 0){
            shipping = 12.00;
        }
//====>>Shipping & Handing [End]

//====>>Tax Calculate [Start]
    const tax = (total / 10);
    const grandTotal = (total + shipping + tax);
//====>>Tax Calculate [End]
 
//====>>Number Format After Point How many numbr we want [Start]
    const formatNumber = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    }
//====>>Number Format After Point How many numbr we want [End]    
    return (
        <div className="cart-container">
            <div className="upper-contant">
                <h3>Order Summary</h3>
                <p>Item Ordered: {cart.length}</p>
            </div>
            <div className="cart-wrapper">
                <div className="title-container">
                    <p>Items:</p>
                    <p>Shipping & Handing:</p>
                    <p>Total Before Tex:</p>
                    <p>Eistimated Tax:</p>
                    <h2 className="color-verient">Order Total:</h2>
                </div>
                <div className="price-container">
                    <p>{cart.length}</p>
                    <p>${shipping}</p>
                    <p>${total}</p>
                    <p>${formatNumber(tax)}</p>
                    <h2 className="color-verient">${formatNumber(grandTotal)}</h2>
                </div>
            </div>
        </div>
    );
};
export default Cart;