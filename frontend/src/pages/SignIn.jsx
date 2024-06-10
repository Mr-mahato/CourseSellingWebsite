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
  import axios from 'axios'
  import {Link , useNavigate} from 'react-router-dom'
  
  import { useState , useContext } from "react";
  import { AuthContext  } from "../context/authContext";
  
  import { FormHelperText } from "@mui/material";
  export default function SignIn() {
  
    const {setIsAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();
    const [user , setUser] = useState({
      email: "",
      password: ""
    })
  
    const handelFormChange = (e)=>{
      setUser({...user , [e.target.name]: e.target.value});
    }

    const handelSignIn = async()=>{
      try {
       const  response =  await axios.post(`http://localhost:3000/admin/login`,{email:user.email , password:user.password});
       if(response.data){
        localStorage.setItem('token',JSON.stringify(response.data.token))
        setIsAuthenticated(true);
        navigate('/');
       }
        
      } catch (error) {
        console.log(error.response.data);
      }
    }
  
    return (
      <Container
        sx={{display:"flex" , height:"100vh" , width:"100vw", alignItems:"center" , justifyContent:"center" }}
      >
        <Box sx={{ padding: 2 , border:"2px solid black" , width:"30vw" }}>
          <Typography variant="h5" component="h2">
            SignIn
          </Typography>
          <Grid container spacing={2}>
            
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
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  onClick={handelSignIn}
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
                <Link to={'/signup'} style={{textDecoration:'none'}}>New here lets Join?</Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
  