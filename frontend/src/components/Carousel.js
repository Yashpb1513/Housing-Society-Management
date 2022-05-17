import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/buildingfd.jpg";
import img2 from "../images/buildingfn.jpg";
import img3 from "../images/kidsplayarea.jpg";
import img4 from "../images/societyoffice.jpg";
import img5 from "../images/terrace.jpg";

export default function CarouselImages() {
  return (
    <div>
      <Carousel
        style={{
          width: "100%",
          verticalAlign: "center",
        }}
      >
        <Carousel.Item interval={1000} className="imgcarousel">
          <img
            className="d-block w-100"
            src={img1}
            alt="Front of the building in day"
          />
          <Carousel.Caption>
            <h3>ABC Tower</h3>
            <p>Daylight</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} >
          <img
            className="d-block w-100"
            src={img2}
            alt="Front Of the building in night"
          />
          <Carousel.Caption>
            <h3>ABC TOWER</h3>
            <p>Moon Light</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgcarousel">
          <img className="d-block w-100" src={img5} alt="Society Office" />
          <Carousel.Caption>
            <h3>Terrace</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} >
          <img className="d-block w-100 imagecarousel" src={img4} alt="Society Office" />
          <Carousel.Caption>
            <h4>Society Office</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className="imgcarousel">
          <img className="d-block w-100" src={img3} alt="Kids Play Area" />
          <Carousel.Caption>
            <h3>Kids Play Area</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
