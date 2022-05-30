import React from "react";
import "../css/Profile.css";
import img1 from "../images/team-male.jpg";
function Profile() {
  return (
    <div class="wrapper">
      <div class="left">
        <img src={img1} alt="user" width="100" />
        <h4>XYZ</h4>
        <p>Flat 202 </p>
      </div>
      <div class="right">
        <div class="info">
          <h3>Information</h3>
          <div class="info_data">
            <div class="data">
              <h4>Email</h4>
              <p>alex@gmail.com</p>
            </div>
            <div class="data">
              <h4>Phone</h4>
              <p>0001-213-998761</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
