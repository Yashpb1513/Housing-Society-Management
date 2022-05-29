import React, { useState } from "react";
import  Carousel  from "./Carousel";
import NavBar from "./NavBar";
import LightSpeed from "react-reveal/LightSpeed";
function LandingPage() {
  return (
    <div>
      <Carousel />
      <LightSpeed left>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic reprehenderit illum eveniet saepe ipsa praesentium ratione minus voluptas fuga incidunt dolores, tempora quibusdam cum repellendus quod ipsum minima porro voluptatum id amet suscipit sint. Id praesentium a ab necessitatibus?
      </LightSpeed>
    </div>
  );
}

export default LandingPage;
