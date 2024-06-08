import React from "react";
import book from "../assets/books.jpg";
import "../styles/profile.css";
import {
  ListItemButton,
  ListItemIcon,
  List,
  Drawer,
  ListItem,
  ListItemText,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function Profile() {
  return (
    <>
      <Sidebar />
      <div style={{ height: "100vh" }}>
        <div className="topImageSidebar"></div>
        <div className="grabDetails">
          <div className="userDetails">
            <TextField
              id="outlined-basic"
               
              label="Username"
              placeholder="Enter your name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter your Email"
              variant="outlined"
            />
            <Button>Update</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sideBar">
      <Button
        onClick={() => {
          setOpen(true);
        }}
        sx={{ position: "absolute", top: "50%" }}
      >
        <KeyboardDoubleArrowRightIcon
          sx={{ color: "black", fontSize: "2rem" }}
        />
      </Button>
      {/* Drawer is actully the sidebar */}

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ width: "250px" }}>
          <List>
            <ListItemButton>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Create Course" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
