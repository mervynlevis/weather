# To Run

npm start

# NPM dependencies 

npm install 

axios <br />
react-animated-weather <br />
react-live-clock <br />
@material-ui/icons <br />
@testing-library/jest-dom 

<br />
<br />

from package-lock.json:

  "packages": {
    "": {
      "version": "0.1.0",
      "dependencies": {
        "@material-ui/icons": "^4.11.2",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "axios": "^0.21.4",
        "react": "^17.0.2",
        "react-animated-weather": "^4.0.1",
        "react-dom": "^17.0.2",
        "react-live-clock": "^5.2.0",
        "react-scripts": "4.0.3",
        "web-vitals": "^1.1.2"
      },
      "devDependencies": {
        "@testing-library/jest-dom": "^5.14.1",
        "gh-pages": "^3.2.3"
      }
    },

# Hosted on GitHub Pages 

https://mervynlevis.github.io/weather/

# Testing

npm run test

Unit Tests located in __tests__ folder within components folder. / 
note: alert not supported by jest, will throw error but all tests should pass.

# Info 

This app was built using react, using both class based and functional components. The app, if location services are enabled, will fetch the location and weather data for their location. This will load the main page of the app.

The main page contains the users weather information, a real time clock, and the date, as well as the weather information for a supplied city. The user can search for a city to compare its weather with their locations weather.

The app consists of two main components, CurrentLocation, a class based component, and Forecast, a functional component.

CurrentLocation initially loads a loading screen with a gif loader animation. The component checks if the user has enabled location services. If they have, it will grab their latitude and longitude, and call the openWeather API. The component will then update, loading the mainpage with the users weather information, on the main section of the page. If the user declines to enable location services when prompted, the app will return the weather information for Dublin, Ireland. 

Forecast renders with the default compare weather information, which has been set to Cork, Ireland. The user can then search for another city, which will replace the default weather information with the queried city. This is a functional component, and uses axios to call the api. The user enters a city name and a country code to display the weather. This country code functionality was added to avoid issues with duplicate city names returning the wrong city when queried by city alone. eg "Dublin Ireland" returning weather for "Dublin US".