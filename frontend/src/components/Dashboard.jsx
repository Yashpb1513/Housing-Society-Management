import * as React from "react";
import Residant from "./Residant";
import Admin from "./Admin";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
export default function Dashboard() {
  const { getTypes } = React.useContext(UserContext);
  const [adminn, setAdmin] = React.useState(true);
  useEffect(() => {
    const res = getTypes()
    console.log(res);
      if (res.type === "resident") {
        setAdmin(false);
      } else {
        setAdmin(true);
      }
  }, []);
  console.log(adminn);
  return (
    <>
      {adminn && <Admin />}
      {!adminn && <Residant />}
    </>
  );
}
