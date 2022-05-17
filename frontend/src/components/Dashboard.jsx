import * as React from "react";
import Residant from "./Residant";
import Admin from "./Admin";

export default function Dashboard() {
  const [adminn, setAdmin] = React.useState(true);
  return (
    <>
    {adminn && <Admin />}
    {!adminn && <Residant />}
    </>
  );
}
