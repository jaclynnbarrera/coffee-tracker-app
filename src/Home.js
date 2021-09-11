import React from "react";
import GeoLocation from "./GeoLocation";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Find Me Coffee</h1>
        <GeoLocation />
      </div>
    );
  }
}

export default Home;
