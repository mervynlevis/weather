import { render, screen, cleanup } from '@testing-library/react'
import Nav from '../Nav';


// NAV UNIT TESTS 

// CHECK IF NAV RENDERED CORRECTLY.

test('render Nav', () => {
    render(<Nav />);
    const NavElement = screen.getByTestId('Nav');
    expect(NavElement).toBeInTheDocument();
})