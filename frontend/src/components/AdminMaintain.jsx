import React from 'react'
import Mainform from "./Mainform";
import { Grid } from "@mui/material";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Maincard from "./Maincard";
import Bounce from "react-reveal/Bounce";
function AdminMaintain() {
  const { getUserName, getToken } = React.useContext(UserContext);
  const [log, setLog] = React.useState([]);
  const token = getToken();
  const [user, setUser] = React.useState(getUserName());
  React.useEffect(() => {
    setUser(localStorage.getItem("user"));
    async function getPrev() {
      try {
        const ann = await axios.get(
          "http://127.0.0.1:8000/maint/",
          {
            name: user,
            headers: { Authorization: `Token ${token}` },
          },
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
  return (
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
                <Bounce top duration={2000}>
                  <Maincard
                    key={log.id}
                    flat={log.flat}
                    cheque={log.cheque}
                    amount={log.amount}
                    date={log.date}
                    ack={log.ack}
                  />
                </Bounce>
              </Grid>
            );
          })}
        </Grid>
  )
}

export default AdminMaintain