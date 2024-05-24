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

import { FormHelperText } from "@mui/material";
export default function Signup() {
  return (
    <Container
      maxWidth="sm"
      style={{ border: "2px solid black", marginTop: "5px" }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" component="h2">
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <FormControl>
                <InputLabel>Username</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <FormControl>
                <TextField
                  type="email"
                  label="Email"
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
                <InputLabel>Password</InputLabel>
                <OutlinedInput type="password" />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => {
                  console.log("you clicekd");
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
