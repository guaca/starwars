import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './index';

beforeEach(() => {
    render(<BrowserRouter><Home /></BrowserRouter>);
})
test('renders content', () => {
    const content = screen.getByText(/it is a period of civil war/i);
    expect(content).toBeInTheDocument();
});

test('Has a link to discover starships', () => {
    const link = screen.getByRole('link', { name: /discover starships/i });
    expect(link).toHaveAttribute('href', '/starships');
});
