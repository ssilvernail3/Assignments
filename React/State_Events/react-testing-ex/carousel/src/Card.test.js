
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from './Card'; 



test('if it renders without crashing', () => {
    render(<Card />)
  }); 
  
  it('matches snapshot',  () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot(); 
  })