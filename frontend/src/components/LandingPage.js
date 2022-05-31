import React, { useState } from "react";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import "../css/lp.css";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import { Grid, Box } from "@mui/material";
import Pulse from "react-reveal/Pulse";
import Tada from "react-reveal/Tada";
import Slide from "react-reveal/Slide";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import chairman from "../images/chairman.jpg";
import secretary from "../images/secretary.jpg";
function LandingPage() {
  return (
    <div>
      <Fade big left duration={2000}>
        <Carousel />
      </Fade>
      <h3
        style={{
          color: "white",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.9)",
          marginBottom: 0,
          borderBottom: "2px dotted black",
        }}
      >
        <Slide right delay={1500}>
          Events
        </Slide>
      </h3>
      <Pulse>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
          sx={{
            background:
              "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/08/xganesh-chaturthi-celebration-in-india-1-1567241660.jpg)",
            padding: "30px",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.9)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px",
            borderBottom: "3px dotted black",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="container lp">
              <div className="image-stack">
                <div className="image-stack__item image-stack__item--top">
                  <LightSpeed left duration={3000}>
                    <img
                      src="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt=""
                      height="500px"
                      style={{ borderRadius: "20px" }}
                      className="immm"
                    />
                  </LightSpeed>
                </div>

                <div className="image-stack__item image-stack__item--bottom">
                  <LightSpeed right duration={3000}>
                    <img
                      src="https://rkalert.in/wp-content/uploads/2019/12/Happy-Ganesh-Chaturthi-Photo-image.jpg"
                      alt=""
                      height="500px"
                      className="immm"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ color: "white", textAlign: "center" }}
          >
            <Box sx={{ marginTop: "10px" }}>
              <Tada>
                <h3>Ganesh Chaturthi</h3>
              </Tada>
              <br />
              <Slide right>
                <p>
                  Celebrated with utmost joy and jubielnce... We await the
                  festival of Ganesh Chaturthi... Read the the society notice
                  board for further information
                </p>
                <br />
                <p>Music specially to be prganised by Khelayo</p>
              </Slide>
              <br></br>
              <Slide left>
                <p>Date: 12th August</p>
                <p>Location: Socitey Hall</p>
                <p>Color code to be followed strictly</p>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Pulse>
      <Pulse>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
          sx={{
            background:
              "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(https://www.india.com/wp-content/uploads/2015/10/1-www.solucionespm.com_2.jpg)",
            padding: "30px",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,0,0.9)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px",
            borderBottom: "3px dotted black",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="container lp">
              <div className="image-stack">
                <div className="image-stack__item image-stack__item--top">
                  <LightSpeed left duration={3000}>
                    <img
                      src="https://oyephoto.com/public/uploads/preview/happy-navratri-editing-background-for-cb-picsart-hd-11632138275dz9lhpn8jl.jpg"
                      alt=""
                      height="500px"
                      style={{ borderRadius: "20px" }}
                      className="immm"
                    />
                  </LightSpeed>
                </div>

                <div className="image-stack__item image-stack__item--bottom">
                  <LightSpeed right duration={3000}>
                    <img
                      src="https://i.pinimg.com/736x/c8/65/ec/c865ec315c4babd1fccc503d1a119ee8.jpg"
                      alt=""
                      height="500px"
                      className="immm"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ color: "white", textAlign: "center" }}
          >
            <Box sx={{ marginTop: "10px" }}>
              <Tada>
                <h3>Navratri</h3>
              </Tada>
              <br />
              <Slide right>
                <p>
                  Celebrated with utmost joy and jubielnce... We await the
                  festival of Navratri... Read the the society notice board for
                  further information
                </p>
                <br />
                <p>Music specially to be prganised by Khelayo</p>
              </Slide>
              <br></br>
              <Slide left>
                <p>Date: 12th September</p>
                <p>Location: Socitey Hall</p>
                <p>Color code to be followed strictly</p>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Pulse>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          padding: "30px",
          backgroundColor: "rgba(0,0,0,0.9)",
        }}
      >
        <Grid item>
          <div
            className="card"
            style={{
              border: "2px solid grey",
              backgroundColor: "#02022f",
              color: "white",
            }}
          >
            <div className="row no-gutters">
              <div className="col-auto">
                <Pulse>
                  <img
                    src={require(`../images/secretary.jpg`)}
                    className="img-fluid"
                    alt="Secretary"
                  />
                </Pulse>
              </div>
              <div className="col">
                <div className="card-block px-2">
                  <Slide right>
                    <h4 className="card-title" style={{ marginTop: "8px" }}>
                      Message From the Secretary
                    </h4>
                  </Slide>
                  <Slide left>
                    <p className="card-text">Pleasant regards from my mise</p>
                  </Slide>
                  <Slide right>
                    <p className="card-text" style={{ marginBottom: "5px" }}>
                      I heartily welcome you all!
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <div
            className="card"
            style={{
              border: "2px solid grey",
              backgroundColor: "#02022f",
              color: "white",
            }}
          >
            <div className="row no-gutters">
              <div className="col-auto">
                <Pulse>
                  <img
                    src={require(`../images/chairman.jpg`)}
                    className="img-fluid"
                    alt="Chairman"
                  />
                </Pulse>
              </div>
              <div className="col">
                <div className="card-block px-2">
                  <Slide left>
                    <h4 className="card-title" style={{ marginTop: "8px" }}>
                      Message From the Chairman
                    </h4>
                  </Slide>
                  <Slide left>
                    <p className="card-text">Pleasant regards from my mise</p>
                  </Slide>
                  <Slide right>
                    <p className="card-text" style={{ marginBottom: "5px" }}>
                      I heartily welcome you all!
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
