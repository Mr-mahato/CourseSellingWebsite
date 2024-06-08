import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";

import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

import { FormHelperText } from "@mui/material";
export default function Signup() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSignup = async()=>{
    try {

     const  response =  await axios.post(`http://localhost:3000/admin/signup`,{username:user.username , email:user.email , password:user.password});
     if(response.data){
      navigate('/signin');
      console.log(response.data);
     }
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ padding: 2, border: "2px solid gray", width: "40vw" }}>
        <Typography variant="h5" component="h2">
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <FormControl>
                <TextField
                  type="text"
                  label="Username"
                  name="username"
                  onChange={handelFormChange}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <FormControl>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  onChange={handelFormChange}
                  variant="outlined"
                  required
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <FormControl>
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  onChange={handelFormChange}
                  variant="outlined"
                  required
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="2px"
            >
              <Button
                onClick={handelSignup}
                variant="contained"
                color="primary"
              >
                Sign up.
              </Button>
              <Link to={"/signin"} style={{ textDecoration: "none" }}>
                Already Have account
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
