import React from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Grid } from "@mui/material";
import Slide from "react-reveal/Slide";
export default function Complainform() {
  const { getToken } = React.useContext(UserContext);
  const token = getToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    const flt = document.getElementById("Flat").value;
    const comp = document.getElementById("comp").value;
    async function postQuery() {
      try {
        await axios
          .post(
            "http://127.0.0.1:8000/complain/",
            { flat: flt, comp: comp },
            {
              headers: { Authorization: `Token ${token}` },
            }
          )
          .then((res) => {
            console.log(res.data);
            alert("Maintenance submitted successfully");
          });
      } catch (error) {
        console.log(error);
      }
    }
    postQuery();
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" >
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
                  margin: "10px",
                  width: "auto",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "10px",
                }}
                class="form-group"
              >
                <label for="Flat">Flat</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="Flat"
                  placeholder="Flat"
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
                <label for="comp">Complaint</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="comp"
                  placeholder="Complaint"
                />
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
