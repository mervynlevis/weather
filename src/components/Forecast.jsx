import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKeys from "./apiKey";
import ReactAnimatedWeather from "react-animated-weather";
import SearchIcon from "@material-ui/icons/Search";
import Footer from "./Footer";

function Forecast(props) {
  const [query, setQuery] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  // fetch weather information based on user query string. default is set to Cork, so that will be initially displayed
  const search = (city) => {
    //used != rather than !== here as ran into error with weather search when using !== syntax
    axios
      .get(
        `${apiKeys.base}weather?q=${city != "[object Object]" ? city : query 
        },${searchCountry}&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        setSearchCountry("");
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setSearchCountry("");
        setError({ message: "Not Found", query: query });
      });
  };

  //   function checkTime(i) {
  //     if (i < 10) {
  //       i = "0" + i;
  //     } // add zero in front of numbers < 10
  //     return i;
  //   }

  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };

  // empty array so avoid duplicate API calls
  useEffect(() => {
    search("Cork");
  }, []);

  // render component with api data
  return (
    <div data-testid="searchedForecast" className="forecast">
      <div className="forecast-icon">
        <ReactAnimatedWeather
          icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className="today-weather">
        <h3>{props.weather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any City"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <input
            type="text"
            className="search-bar"
            placeholder="Country Code"
            onChange={(e) => setSearchCountry(e.target.value)}
            value={searchCountry}
          />
          <div className="img-box">
            {" "}
            <SearchIcon className="img-box" onClick={search} />
          </div>
        </div>
        <ul>
          {typeof weather.main != "undefined" ? (
            <div>
              {" "}
              <li className="cityHead">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="weather logo"
                />
              </li>
              <li>
                Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error.query} {error.message}
            </li>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default Forecast;
