import React from "react";
import book from "../assets/books.jpg";
import "../styles/profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";
import axios from "axios";
import {
  ListItemButton,
  List,
  Drawer,
  ListItemText,
  Box,
  TextField,
  Modal,
  Button,
} from "@mui/material";
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function Profile() {
  const { user } = useContext(AuthContext);
  if (!user) return <>Loading...</>;
  return (
    <>
      <Sidebar />
      <div style={{ height: "100vh" }}>
        <div className="topImageSidebar"></div>
        <div className="grabDetails">
          <div className="userDetails">
            <TextField
              id="outlined-basic"
              value={user.username}
              label="Username"
              placeholder="Enter your name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={user.email}
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  height: "60vh",
  pt: 2,
  px: 4,
  pb: 3,
};

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState("");
  const [course, setCourse] = useState({
    courseName: "",
    courseDescription: "",
    tutorName: "",
  });

  const saveFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(course);
      Object.keys(course).forEach(key=>{
        formData.append(key,course[key]);
      })
      const response = await axios.post(
        "http://localhost:3000/admin/fileUpload", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = (e) => {
    console.log("file changed");
    console.log(file)
    saveFile();
  };

  const handelChange = (e) => {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
    } else {
      setCourse({ ...course, [e.target.name]: e.target.value });
    }
  };

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
            <ListItemButton
              onClick={() => {
                setModal(true);
              }}
            >
              <ListItemText primary="Create Course" />
            </ListItemButton>
            <Modal
              open={modal}
              onClose={() => {
                setModal(false);
              }}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box
                sx={{
                  ...style,
                  width: 600,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  value={course.courseName}
                  name="courseName"
                  onChange={handelChange}
                  label="Course Name"
                  placeholder="Enter your Course Title"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />

                <TextField
                  id="outlined-basic"
                  label="Course Description"
                  value={course.courseDescription}
                  name="courseDescription"
                  onChange={handelChange}
                  placeholder="Enter your Course Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ width: "100%" }}
                />

                <TextField
                  id="outlined-basic"
                  label="Tutor Name"
                  value={course.tutorName}
                  name="tutorName"
                  onChange={handelChange}
                  placeholder="Enter Your name"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />

                <TextField
                  type="file"
                  name="file"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    accept: "image/*",
                  }}
                  sx={{ width: "100%" }}
                  onChange={handelChange}
                />

                <Button type="submit" onClick={handleUpload}>
                  Upload
                </Button>
              </Box>
            </Modal>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
