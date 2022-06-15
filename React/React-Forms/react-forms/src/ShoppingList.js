import React, { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { uuid } from "uuidv4";

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: 'Peanut Butter', qty: 2},
        {id: 2, name: 'Oat Milk', qty: 1}
    ]
    const [items, setItems] = useState(INITIAL_STATE)

    const addItem = (name, qty) => {
        setItems(items => [...items, { name, qty }]);
    }
    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem}  />
            <div>
                {items.map(({ id, name, qty }) => <Item id={id} name={name} qty={qty} key={id}/>)}
            </div>
        </div>
    )
}

export default ShoppingList; 
