import React from "react";
import Nav from "./components/Nav";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";

function App() {

  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;
