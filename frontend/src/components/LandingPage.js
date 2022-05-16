import React, { useState } from "react";
import Announcement from "./Announcement";
import  Carousel  from "./Carousel";

function LandingPage() {
  return (
    <div>
      <Announcement />
      <Carousel />
    </div>
  );
}

export default LandingPage;
