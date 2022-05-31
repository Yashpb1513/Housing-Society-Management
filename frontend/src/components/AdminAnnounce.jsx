import React from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Grid } from "@mui/material";
import Slide from "react-reveal/Slide";
export default function AdminAnnounce() {
  const { getToken } = React.useContext(UserContext);
  const token = getToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    const hd = document.getElementById("header").value;
    const desc = document.getElementById("desc").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const im = document.getElementById("img").value;
    async function postQuery() {
      try {
        await axios
          .post("http://127.0.0.1:8000/announce/", {
            header: hd,
            desc: desc,
            date: date,
            time: time,
            image: im,
            alt: im,
            disabled: true,
          })
          .then((res) => {
            console.log(res.data);
            alert("Announcement submitted successfully");
          });
      } catch (error) {
        console.log(error);
      }
    }
    postQuery();
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <Slide left duration={2000}>
          <div style={{ textAlign: "center" }}>
            <form
              style={{
                padding: "10 px",
                backgroundColor: "#f8f8f8",
                margin: "10px",
                width: "400px",
              }}
            >
              <div
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "auto",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "10px",
                }}
                class="form-group"
              >
                <label for="Flat">Header</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="header"
                  placeholder="Header"
                />
              </div>
              <div
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "auto",
                  boxSizing: "border-box",
                  backgroundColor: "#f8f8f8",
                }}
                class="form-group"
              >
                <label for="comp">Description</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="desc"
                  placeholder="Description"
                />
              </div>
              <div
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "auto",
                  boxSizing: "border-box",
                  backgroundColor: "#f8f8f8",
                }}
                class="form-group"
              >
                <label for="comp">Date</label>
                <br />
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  placeholder="Date"
                />
              </div>
              <div
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "auto",
                  boxSizing: "border-box",
                  backgroundColor: "#f8f8f8",
                }}
                class="form-group"
              >
                <label for="comp">Time</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="time"
                  placeholder="Time"
                />
              </div>
              <div
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "auto",
                  boxSizing: "border-box",
                  backgroundColor: "#f8f8f8",
                }}
                class="form-group"
              >
                <label for="comp">Image describe: </label>
                <br />
                <input type="text" class="form-control" id="img" />
              </div>
              <button
                style={{
                  padding: "18 px",
                  margin: "30px",
                  width: "50%",
                  boxSizing: "border-box",
                }}
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </Slide>
      </Grid>
    </Grid>
  );
}
