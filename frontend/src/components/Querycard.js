import React from "react";

export default function Querycard({ heading, message, email }) {
  return (
    <div>
      <div
        class="card"
        style={{ width: "18rem", backgroundColor: "#f8f8f8", height: "300px" }}
      >
        <div class="card-body">
          <h5 class="card-title">{heading}</h5>
          <br />
          <p class="card-text">
            {heading}: {message}
          </p>
          <br />
          <p class="card-text">Contact : {email} </p>
          <br />
        </div>
      </div>
    </div>
  );
}
