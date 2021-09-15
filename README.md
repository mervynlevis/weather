# To Run

npm start

# NPM dependencies 

npm install 

axios 
react-animated-weather 
react-live-clock
@testing-library/jest-dom


from package-lock.json:

"packages": {
  "": {
    "version": "0.1.0",
    "dependencies": {
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
  }

# Hosted on GitHub Pages 

https://mervynlevis.github.io/weather/

# Testing

npm run test

Tests located in __tests__ folder within components folder.
note: alert not supported by jest, will throw error but all tests should pass.