import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
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
            <Grid item key={query.id} lg={4} md={6} sm={12}>
              Query: {query.query}<br />
              Contact: {query.email}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Queries;
