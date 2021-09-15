import React from "react";
import Nav from "./components/Nav";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";
// import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <CurrentLocation />
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
