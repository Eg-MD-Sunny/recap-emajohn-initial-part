import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = (props) => {
    return (
        <div className="shop-container">
            <div className="product-pic">
                <img src={props.productsItem.img}></img>
            </div>
            <div className="product-content">
                <p className="text-color">{props.productsItem.name}</p>
                <p><small>By {props.productsItem.seller}</small></p>
                <h3>Price ${props.productsItem.price}</h3>
                <p>Only {props.productsItem.stock} left in - order soon</p>
                <button className="main-button" onClick={() => props.productAdded(props.productsItem)}><span className="position-shift"><FontAwesomeIcon icon={faShoppingCart} /></span>Add to Cart</button>
            </div>
        </div>
    );
};

export default Shop;