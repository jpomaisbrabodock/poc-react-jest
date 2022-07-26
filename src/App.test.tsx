import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Home page', () => {
  it('Header text', () => {
    render(<App />);
    
    const text = screen.getByText('Empresas Cadastradas')
    expect(text).toBeTruthy()
  });
  it('add a new company', () => {
    render(<App />)
    
    const input = screen.getByPlaceholderText('Nome da empresa')
    const button = screen.getByText('Adicionar empresa')
    
    userEvent.type(input, 'Dock Tech')
    userEvent.click(button)
    
    expect(screen.getByText('Dock Tech')).toBeTruthy()
  })
})
