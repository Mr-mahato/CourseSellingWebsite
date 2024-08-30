import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; 2023 EduCare. All rights reserved.
        </Typography>
        <Typography variant="body1">
          Contact us: <a href="mailto:info@educare.com">info@educare.com</a>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;