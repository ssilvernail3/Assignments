import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

it('renders without crashing', function () {
    render(<ShoppingList />)
});

it('matches snapshot', function () {
    const { asFragment } = render(<ShoppingList />)
    expect(asFragment()).toMatchSnapshot();
}); 

it('should add new item', function () {
    const { queryByText, getByLabelText } = render(<ShoppingList />);
    const product = getByLabelText("Product");
    const btn = queryByText('Add Item');
    const qty = getByLabelText("Quantity");
    expect(queryByText('Product Name: Chocolate Milk')).not.toBeInTheDocument();
    fireEvent.change(product, { target: { value: 'Chocolate Milk' } });
    fireEvent.change(qty, {target : {value : 5}} )
    fireEvent.click(btn);
    expect(queryByText('Product Name: Chocolate Milk')).toBeInTheDocument();
    expect(queryByText('Quantity: 5')).toBeInTheDocument();


});