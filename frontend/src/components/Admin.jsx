import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Queries from "./Queries";
import { useNavigate } from "react-router-dom";
import LoggedNavBar from "./LoggedNavBar";
import { UserContext } from "../context/UserContext";
import useEffect from "react";
import Complaint from "./Complaint";
import AdminMaintain from "./AdminMaintain";
import AdminAnnounce from "./AdminAnnounce";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { getUserName } = React.useContext(UserContext);
  const [name, setName] = React.useState("");
  // useEffect(() => {
  //   const res = getUserName();
  //   setName(res);
  // },[])
  return (
    <Box sx={{ width: "100%" }}>
      <LoggedNavBar name={() => getUserName()}/>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Maintenance" {...a11yProps(0)} />
          <Tab label="Queries" {...a11yProps(1)} />
          <Tab label="Complaints" {...a11yProps(2)} />
          <Tab label="Announcements" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AdminMaintain />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Queries />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Complaint />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminAnnounce />
      </TabPanel>
    </Box>
  );
}
