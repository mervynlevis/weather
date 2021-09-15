import { render, screen, cleanup } from '@testing-library/react'
import Forecast from '../Forecast';


// FORECAST UNIT TESTS 

// CHECK IF SEARCHCED FORECAST RENDERS CORRECTLY, WILL INITIALLY SEARCH FOR CORK, IE
// CHECK IF INITIAL COMPARE WEATHER INFORMATION FOUND

test('render searched city forecast component', () => {
    render(<Forecast />);
    const ForecastElement = screen.getByTestId('searchedForecast');
    expect(ForecastElement).toBeInTheDocument();
})



