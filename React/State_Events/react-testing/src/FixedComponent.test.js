import React from 'react';
import { render, screen } from '@testing-library/react';
import FixedComponent from './FixedComponent';

test('if renders without crahsing', () => {
  render(<FixedComponent />)
}); 

it('matches snapshot',  () => {
    const { asFragment } = render(<FixedComponent />);
    expect(asFragment()).toMatchSnapshot(); 
})