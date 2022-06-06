// import React from "react";

let items = ['apple', 'pear', 'banana', 'oranges']

function choice ( items )  {
    let choice = Math.floor(Math.random() * items.length);
    return items[choice];
};

function remove(items, item)  {
    for (let i = 0; i < items.length; i++){
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}




export { choice, remove }; 