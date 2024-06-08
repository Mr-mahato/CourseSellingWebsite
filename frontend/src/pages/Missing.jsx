import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
export default function Missing() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" align="center">
        Page Not Found
      </Typography>
    </Container>
  );
}
