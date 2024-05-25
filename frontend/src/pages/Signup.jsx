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

import { useState } from "react";

import { FormHelperText } from "@mui/material";
export default function Signup() {

  const [user , setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handelFormChange = (e)=>{
    setUser({...user , [e.target.name]: e.target.value});
  }

  return (
    <Container
      sx={{display:"flex" , alignItems:"center" ,justifyContent:"center" , height:"100vh" , width:"100vw"}}
    >
      <Box sx={{ padding: 2  , border:"2px solid gray" ,width:"40vw" }}>
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
                {1 && (
                  <FormHelperText style={{ color: "red" }}>
                    Invalid email format
                  </FormHelperText>
                )}
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
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => {
                 console.log(user);
                }}
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
