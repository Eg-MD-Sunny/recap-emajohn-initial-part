import React, { useState } from 'react';
import './Products.css';
import FakeData from '../../fakeData';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';


const Products = () => {
    const first10 = FakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const productAdded = (productsItem) => {
        console.log('Product Added' , productsItem);
        const newProduct = [...cart, productsItem];
        setCart(newProduct);
    }
    return (
        <div className="products-container">
            <div className="shopping-area">
                {
                    products.map(productsItem => <Shop productsItem={productsItem} productAdded={productAdded}></Shop>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Products;