import axios from "axios";
import React from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import Querycard from "./Querycard";
import { Grid } from "@mui/material";
import Pulse from "react-reveal/Pulse";
function Complaint() {
  const { getToken } = React.useContext(UserContext);
  const [complaints, setComplaints] = React.useState([]);
  useEffect(() => {
    const res = getToken();
    async function getComplaints() {
      try {
        const ann = await axios.get("http://127.0.0.1:8000/complain/", {
          headers: { Authorization: `Token ${res}` },
        });
        console.log(ann.data);
        setComplaints(...complaints, ann.data);
      } catch (error) {
        console.log(error);
      }
    }
    getComplaints();
  }, []);
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        {complaints.map((complaint) => {
          return (
            <Grid item key={complaint.id}>
              <Pulse>
                <Querycard
                  key={complaint.id}
                  heading={"Complaint"}
                  message={complaint.comp}
                  email={complaint.flat}
                />
              </Pulse>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Complaint;
