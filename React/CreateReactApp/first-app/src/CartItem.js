import React from "react";
import './CartItem.css'



const CartItem = ({item, img, price, quantity}) => (
    <div className="CartItem">
        <h4 className="CartItem-title">{item}</h4>
        <img src={img} width='200' className="CartItem-img" alt=""/>
        <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li>Subtotal: ${price * quantity}</li>
        </ul>
    </div>
)


export default CartItem ; 