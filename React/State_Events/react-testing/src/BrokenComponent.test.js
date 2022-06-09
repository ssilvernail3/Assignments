import React from 'react';
import { render, screen } from '@testing-library/react';
import BrokenComponent from './BrokenComponent';

test('it renders without crahsing', () => {
  render(<BrokenComponent />)
}); 
