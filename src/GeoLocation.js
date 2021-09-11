import React from "react";

class GeoLocation extends React.Component {
  getLocation() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition());
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  render() {
    return (
      <div>
        <h1>form</h1>
      </div>
    );
  }
}

export default GeoLocation;
