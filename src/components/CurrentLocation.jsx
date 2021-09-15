import React from "react";
import apiKeys from "./apiKey";
import Clock from "react-live-clock";
import Forcast from "./Forecast";
import loader from "../images/loader.gif";
import ReactAnimatedWeather from "react-animated-weather";

// data builder function used to speed up generation of user location data

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

// used class based component for this to use componentDidMount etc
class Weather extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        // if location services active, will fetch api data and send to getWeather
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          // if no location services then standard location weather for Dublin will be displayed
          this.getWeather(53.34, -6.26); //lat lon for Dublin, Ireland
          alert(
            "Location Services Disabled. Please allow location access to use this app."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    // every hour, run getWeather again with the latitude and longitude in state 
    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

//   clear interval on componentWillUnmount 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  // get user current location
  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

//   fetch weather information based on the users lat and lon as described above
  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
      feels_like: Math.round(data.main.feels_like),
      visibility: data.visibility,
      wind_speed: data.wind.speed,
    });
    switch (this.state.main) {
      case "Haze":
        this.setState({ icon: "CLEAR_DAY" });
        break;
      case "Clouds":
        this.setState({ icon: "CLOUDY" });
        break;
      case "Rain":
        this.setState({ icon: "RAIN" });
        break;
      case "Snow":
        this.setState({ icon: "SNOW" });
        break;
      case "Dust":
        this.setState({ icon: "WIND" });
        break;
      case "Drizzle":
        this.setState({ icon: "SLEET" });
        break;
      case "Fog":
        this.setState({ icon: "FOG" });
        break;
      case "Smoke":
        this.setState({ icon: "FOG" });
        break;
      case "Tornado":
        this.setState({ icon: "WIND" });
        break;
      default:
        this.setState({ icon: "CLEAR_DAY" });
    }
  };

//   render component information 

  render() {
    // if weather information loaded 
    if (this.state.temperatureC) {
      return (
        <React.Fragment>
          <div data-testid="userLocationWeather" className="city">
            <div className="title">
              <h2>{this.state.city}, {this.state.country}</h2>
              <h3>Feels Like: {this.state.feels_like}°c</h3>
              <h4>Humidity: {this.state.humidity}%</h4>
              <h4>Visibility: {this.state.visibility} mi</h4>
              <h4>Wind Speed: {this.state.wind_speed} Km/h</h4>
            </div>
            <div className="mb-icon">
              {" "}
              <ReactAnimatedWeather
                icon={this.state.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              <p>{this.state.main}</p>
            </div>
            <div className="date-time">
              <div className="dmy">
                <div id="txt"></div>
                <div className="current-time">
                  <Clock format="HH:mm" interval={1000} ticking={true} />
                </div>
                <div className="current-date">{dateBuilder(new Date())}</div>
              </div>
              <div className="temperature">
                <p>
                  {this.state.temperatureC}°c
                </p>
              </div>
            </div>
          </div>
          <Forcast icon={this.state.icon} weather={this.state.main} />
        </React.Fragment>
      );
    } else {
        // if weather information not yet loaded. This is the initial loading screen of the app 
      return (
        <React.Fragment>
          <div data-testid="LoadingCurrentLocation" className="loadingPage">
            <img
              src={loader}
              alt="loading icon"
              style={{ width: "5%", WebkitUserDrag: "none" }}
            />
            <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
              Detecting your location
            </h3>
            <h3 style={{ color: "white", marginTop: "10px" }}>
              Location will be displayed with weather...
            </h3>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Weather;
