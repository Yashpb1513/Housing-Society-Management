import React from "react";
import Mainform from "./Mainform";
import { Grid } from "@mui/material";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Maincard from "./Maincard";
function Maintenance() {
  const { getUserName, getToken } = React.useContext(UserContext);
  const [log, setLog] = React.useState([]);
  const token = getToken();
  const [user,setUser] = React.useState(getUserName());
  React.useEffect(() => {
    setUser(localStorage.getItem("user"));
    async function getPrev() {
      try {
        const ann = await axios.get(
          "http://127.0.0.1:8000/maint/",
          {
            headers: { Authorization: `Token ${token}` },
          },
          { name: user }
        );
        console.log(ann.data);
        setLog(...log, ann.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPrev();
    // axios.get("http://127.0.0.1:8000/announce/", {headers}).then((res) => {
    //   console.log(res.data);

    // });
  }, []);
  console.log(user)
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} sm={6} lg={6} md={6}>
        <Mainform />
      </Grid>
      <h4 style={{textAlign: "center"}}>Maintenance Yet:</h4>
      <Grid item xs={12} sm={6} lg={9} md={7}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {log.map((log) => {
            return (
              <Grid item>
                <Maincard
                  key={log.id}
                  flat={log.flat}
                  cheque={log.cheque}
                  amount={log.amount}
                  date={log.date}
                  ack={log.ack}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Maintenance;
