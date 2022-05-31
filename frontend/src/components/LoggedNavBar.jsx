import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Button,
  MenuItem,
  Avatar,
  Menu,
} from "@mui/material";
import { UserContext } from "../context/UserContext";
function LoggedNavBar() {
  const { logout, getUserStatus } = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let name = localStorage.getItem("user");
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6">ABC</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Welcome {name}!</Typography>
          </Grid>
          <Grid item>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ backgroundColor: "transparent", color: "black" }}
            >
              <Avatar>{name}</Avatar>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem
                onClick={() => {
                  handleClose()
                  // navigate("/dashboard/Profile");
                }}
              >
                Profile
              </MenuItem> */}
              <MenuItem
                onClick={() => {
                  logout();
                  console.log(getUserStatus());
                  navigate("/");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default LoggedNavBar;
