import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './';

beforeEach(() => {
    render(<BrowserRouter><Header /></BrowserRouter>);
})

test('renders Logo link', () => {
    const homeLogo = screen.getByTestId('background-logo');
    expect(homeLogo).toHaveStyle("background-image: url('/sw-logo.png')");
});

test('renders Home link', () => {
    const homeLink = screen.getByText(/home/i)
    expect(homeLink).toHaveAttribute('href', '/');
});

test('renders Starships link', () => {
    const starshipsLink = screen.getByText(/starships/i)
    expect(starshipsLink).toHaveAttribute('href', '/starships');
});

test('renders Login link', () => {
    const loginLink = screen.getByText(/login/i)
    expect(loginLink).toHaveAttribute('href', '/login');
});

test('renders Signup link', () => {
    const signupLink = screen.getByText(/signup/i)
    expect(signupLink).toHaveAttribute('href', '/signup');
});