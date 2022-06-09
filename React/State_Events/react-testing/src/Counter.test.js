import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('it renders without crahsing', () => {
  render(<Counter />)
}); 


// test('playing with querires', () => {
//     const { getAllByText, getByText, queryAllByText, queryByText, getByPlaceholderText, getByLabelText } = render(<Counter />)
//     console.log(getAllByText(`Count`, { exact: false }));
//     console.log(queryAllByText(`Count`, { exact: false }));
//     console.log(getByPlaceholderText('username')); 
//     console.log(getByLabelText('Username')); 

    
// })


test('button clicks', () => {
    const { getByText, debug } = render(<Counter />);
    debug(); 
    const h2 = getByText('Current count : 0'); 
    const btn = getByText('Add');
    fireEvent.click(btn); 
    // debugger;
    expect(h2).toHaveTextContent('1'); 
    expect(h2).not.toHaveTextContent('0'); 
})