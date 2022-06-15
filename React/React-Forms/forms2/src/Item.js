import React, { useState } from "react";


const Item = ({ name, qty, id }) => {
    return (
        <div>
            <ul>
                <li>Product Name: {name}</li>
                <li>Quantity: {qty}</li>
            </ul>
        </div>
    )
} 

export default Item; 