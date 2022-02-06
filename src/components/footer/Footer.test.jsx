import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders content', () => {
    render(<Footer />);
    const content = screen.getByText(/made with love by estela franco/i);
    expect(content).toBeInTheDocument();
})