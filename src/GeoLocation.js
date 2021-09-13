import React from "react";

class GeoLocation extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is", position.coords.latitude);
      console.log("longitude is", position.coords.longitude);
    });
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
