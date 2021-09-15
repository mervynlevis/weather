import { render, screen, cleanup } from '@testing-library/react'
import CurrentLocation from '../CurrentLocation';

afterEach(() => {
    cleanup();
})


test('firstTest', () => {
    expect(true).toBe(true);
})

// CUSTOM UNIT TESTS 

// CHECK IF LOADING LOCATION RENDERS 

test('render loading CurrentLocation', () => {
    render(<CurrentLocation />);
    const currentLocationElement = screen.getByTestId('LoadingCurrentLocation');
    expect(currentLocationElement).toBeInTheDocument();
})
