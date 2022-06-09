import React from 'react';
import { render, screen } from '@testing-library/react';
import Dog from './Dog';

test('if renders without crahsing', () => {
    render(<Dog name="Rusty" isAdopted={true} />)
}); 

it('matches snapshot', () => {
    const { asFragment } = render(<Dog name="Rusty" isAdopted={true} />);
    expect(asFragment()).toMatchSnapshot();
});
it('matches snapshot', () => {
    const { asFragment } = render(<Dog name="Rusty" isAdopted={false} />);
    expect(asFragment()).toMatchSnapshot();
});