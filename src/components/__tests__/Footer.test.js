import { render, screen, cleanup } from '@testing-library/react'
import Footer from '../Footer';

// FOOTER UNIT TESTS 

// CHECK IF FOOTER RENDERED CORRECTLY.

test('render Footer', () => {
    render(<Footer />);
    const FooterElement = screen.getByTestId('Footer');
    expect(FooterElement).toBeInTheDocument();
})