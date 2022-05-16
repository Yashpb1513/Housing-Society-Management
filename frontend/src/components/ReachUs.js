import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
// const google = window.google;

const containerStyle = {
  position: "relative",
  width: "90%",
  height: "400px",
  margin: "0px auto",
};

export class ReachUs extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        style={containerStyle}
        initialCenter={{
          lat: 19.20678828506254,
          lng: 72.84308453213536,
        }}
        zoom={19}
        onClick={this.onMapClicked}
        scrollwheel={false} //to be confirmed
        zoomControl={false} //to be confirmed
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          icon={{
          //   //select a icon
            // url: "https://www.freeiconspng.com/uploads/apartment-icon-17.png",
          //   // url: "https://icons-for-free.com/download-icon-svg+google+map+location+map+navigation+position+icon-1320184909660899554_256.png",
          //   // url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/627px-Google_Maps_icon_%282020%29.svg.png?20200218211225",
          //   anchor: new google.maps.Point(17, 46),
            // scaledSize: new google.maps.Size(40, 40),
          }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h6>
              <small>Lucky Tower Co-operative Housing Society</small>
            </h6>
            <p>
              6R4V+P64, opp. Kamla Nagar, Amrut Nagar, Patel Nagar, Kandivali
              West, Mumbai, Maharashtra 400067
            </p>
            <a href="https://goo.gl/maps/53ScrKdy39qXnFjbA">
              <strong>Directions</strong>
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC5n65GcYI4YcMs_z3HPHfv8PQeQ_DRrjU",
})(ReachUs);
