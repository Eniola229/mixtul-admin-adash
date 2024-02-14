import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Link from '@mui/material/Link';

const footerStyle = {
  backgroundColor: '#992D00',
  color: '#fff',
  padding: '32px 0',
  marginTop: 'auto',
};

const columnStyle = {
  maxWidth: '300px',
};

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={12} sm={6} md={4} style={columnStyle}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" paragraph>
            
              Welcome to our online store! We're on a mission to make your shopping experience exceptional when it comes to shopping musical instrument and sounds eqiupment

            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={columnStyle}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="/" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Shop" style={linkStyle}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/About" style={linkStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" style={linkStyle}>
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} style={columnStyle}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@mixtul.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +1 (234) 000-0000
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          © 2024 Mixtul | Develop by AfricTech All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
