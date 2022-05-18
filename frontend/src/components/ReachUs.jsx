import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import logo from "../images/icons8-marker-storm-32.png";
import img1 from "../images/societyoffice.jpg";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import "../css/Carousel.css";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "400px",
};
const mystyle = {
  "a:hover": { color: "blue" },
  a: {
    color: "white",
  },
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
            url: logo,
            scaledSize: new this.props.google.maps.Size(40, 40),
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
            <a href="https://goo.gl/maps/53ScrKdy39qXnFjbA" target="_blank">
              <strong>Directions</strong>
            </a>
          </div>
        </InfoWindow>
        <div
          style={{
            width: "100%",
            height: "50%",
            margin: "0 auto",
            backgroundColor: "#444445",
            paddingLeft: "10%",
            color: "white",
            paddingTop: "2%",
          }}
        >
          <div style={{ display: "inline-block", float: "left", width: "33%" }}>
            <h2>Society Office: </h2>
            <p>
              B-Wing 1<sup>st</sup> Floor, Lucky Tower.
            </p>
            <p className="anchoradjust">
              <GiRotaryPhone style={{ fontSize: "30px", marginRight: "5px" }} />
              <a href="tel:02212345678">(022)1234-5678</a>
            </p>
            <p className="anchoradjust">
              <IoIosMail style={{ fontSize: "30px", marginRight: "5px" }} />
              <a href="mailto:abcsociety@gmail.com?subject=Enquiry">
                abcsociety@gmail.com
              </a>
            </p>
          </div>
          <div style={{ display: "inline-block", float: "left", width: "" }}>
            <Grid
              style={{
                color: "black",
                width:"400px",
                backgroundColor: "#ffffff9c",
                margin: "0 4px",
                padding: "12px",
                borderRadius: "20px",
              }}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <label for="message">Enter your Quries:</label>
              </Grid>
              <Grid item style={{height:"200px"}}>
                <textarea placeholder="Type here..." id="message" style={{height: "200px", width: "300px", alignItems:"center"}}>

                </textarea>
              </Grid>
              <Grid item>
                <Button type="submit">Submit</Button>
              </Grid>
            </Grid>
          </div>
          <div style={{ display: "inline-block", float: "left", width: "30%" }}>
            <img
              src={img1}
              alt="Society Office"
              style={{ width: "100%", margin: "0 20%", borderRadius: "15%" }}
            />
          </div>
        </div>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC5n65GcYI4YcMs_z3HPHfv8PQeQ_DRrjU",
})(ReachUs);
