import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Querycard from "./Querycard";
import Pulse from "react-reveal/Pulse";
function Queries() {
  const [queries, setqueries] = useState([]);
  useEffect(() => {
    async function getQueries() {
      try {
        const ann = await axios.get("http://127.0.0.1:8000/query/");
        console.log(ann.data);
        setqueries(...queries, ann.data);
      } catch (error) {
        console.log(error);
      }
    }
    getQueries();
    // axios.get("http://127.0.0.1:8000/announce/", {headers}).then((res) => {
    //   console.log(res.data);

    // });
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
        {queries.map((query) => {
          return (
            <Grid item key={query.id}>
              <Pulse>
                <Querycard
                  key={query.id}
                  heading={"Query"}
                  message={query.query}
                  email={query.email}
                />
              </Pulse>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Queries;
