import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/buildingfd.jpg";
import img2 from "../images/buildingfn.jpg";
import img3 from "../images/kidsplayarea.jpg";
import img4 from "../images/societyoffice.jpg";
import img5 from "../images/terrace.jpg";
import "../css/Tp.css";

export default function CarouselImages() {
  return (
    <div>
      <Carousel
        style={{
          width: "100%",
          verticalAlign: "center",
        }}
      >
        <Carousel.Item interval={1000} >
          <img
            className="d-block w-100 adjust"
            src={img1}
            alt="Front of the building in day"
          />
          <Carousel.Caption className="cap">
            <h3>ABC Tower</h3>
            <p>Daylight</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 adjust"
            src={img2}
            alt="Front Of the building in night"
          />
          <Carousel.Caption className="cap">
            <h3>ABC TOWER</h3>
            <p>Moon Light</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100 adjust" src={img5} alt="Society Office" />
          <Carousel.Caption className="cap">
            <h3>Terrace</h3>
            <p>Plush Decor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 adjust"
            src={img4}
            alt="Society Office"
          />
          <Carousel.Caption className="cap">
            <h4>Society Office</h4>
            <p>Timings: 10:00-18:00</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 adjust" src={img3} alt="Kids Play Area" />
          <Carousel.Caption className="cap">
            <h3>Kids Play Area</h3>
            <p>Age: Under 12</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
