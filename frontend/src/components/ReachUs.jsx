import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import logo from "../images/icons8-marker-storm-32.png";
import img1 from "../images/house.gif";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import "../css/Carousel.css";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
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

function OnInput(e) {
  const txHeight = 16;
  const tx = document.getElementsByTagName("textarea");

  for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == "") {
      tx[i].setAttribute(
        "style",
        "height:" + txHeight + "px;overflow-y:hidden;"
      );
    } else {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
    }
    tx[i].addEventListener("input", OnInput, false);
  }
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
const handleQuery = () => {
  let email = document.getElementById("email").value;
  let val = document.getElementById("form10").value;
  console.log(val);
  console.log(email);
  // let data = {
  //   "email": email,
  //   "query": val,
  // };
  // data = JSON.stringify(data);
  // console.log(data);
  // const headers = {'content-Type': 'application/json'}
  async function postQuery() {
    try {
      await axios
        .post("http://127.0.0.1:8000/query/", { email: email, query: val })
        .then((res) => {
          console.log(res.data);
          alert("Your query has been submitted");
        });
    } catch (error) {
      console.log(error);
    }
  }
  postQuery();
  document.getElementById("form10").value = "";
  document.getElementById("email").value = "";
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
              <small>ABC Tower Co-operative Housing Society</small>
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

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={7}
          sx={{
            backgroundColor: "#444445",
            padding: "1rem",
            backgroundImage: "linear-gradient(to bottom, black, white)",
          }}
        >
          <Grid item className="whiteAdjust">
            <h2>Society Office: </h2>
            <p>
              B-Wing 1<sup>st</sup> Floor, ABC Tower.
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
          </Grid>
          <Grid item sx={{ padding: "5px" }}>
            <img
              src={img1}
              alt="Society Office"
              style={{ width: "25rem", borderRadius: "15%" }}
            />
          </Grid>
          <Grid item>
            <Grid
              style={{
                color: "black",
                width: "400px",
                backgroundColor: "transparent",
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
                <label for="message" style={{ fontSize: "2rem" }}>
                  Enter your Queries
                </label>
              </Grid>
              <Grid item style={{ height: "auto", padding: "0px" }}>
                <div
                  class="md-form"
                  style={{
                    backgroundColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  Email:{" "}
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    style={{ borderRadius: "20px", width: "100%" }}
                  />
                  <i class="fas fa-pencil-alt prefix"></i>
                  <textarea
                    id="form10"
                    class="md-textarea form-control"
                    rows="2"
                    onInput={OnInput}
                  ></textarea>
                  <Button
                    type="submit"
                    sx={{ color: "black" }}
                    onClick={handleQuery}
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC5n65GcYI4YcMs_z3HPHfv8PQeQ_DRrjU",
})(ReachUs);
