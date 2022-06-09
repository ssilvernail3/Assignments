import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders without crahsing', () => {
  render(<App />)
}); 
