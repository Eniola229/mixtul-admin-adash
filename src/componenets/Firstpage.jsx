import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import firsttwo from "../images/front.jpg";
import theme from './Theme';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidenav from "../componenets/Sidenav";
import Shop from "../Pages/Shop";
import { BrowserRouter, Routes, Route, Redirect, Switch, useNavigate    } from 'react-router-dom';
import Routespages from "../Pages/Routespages"
import Header from "./Header";

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${firsttwo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color:"white",
   
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    marginTop:"1em",
    top: 0,
    left: 0,
    fontSize: '3em',
    marginBottom: '20px',
    fontWeight:"bold",
    zIndex: 2,
    color:"whhite"
  },
  container: {
    textAlign: 'center',
    top: 0,
    left: 0,
    height: 'auto',
    borderRadius:"5px",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    margin: '20px 0', 
    padding: '15px 30px',
    fontSize: '1.4em',
    backgroundColor: '#992D00',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    zIndex: 1,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#c0392b',
    },
  },
};

function Firstpage() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isIpad = useMediaQuery(theme.breakpoints.up('md'));

 const navigate = useNavigate();

  const redirectToOtherPage = () => {
    // Use the navigate function to navigate to another page
    navigate('/Routespages');
  };

  return (
  <>
    <div style={styles.root}>
      <div style={styles.overlay}></div>
      <Container  sx={{
              width: isPhone ? '70%' : isTablet ? '80%' : '50%',
          }} style={styles.container}>

        <Typography variant="h1"  sx={{
              textSize: isPhone ? '0.5em' : isTablet ? '1.2em' : '1.4em',
          }} style={styles.title}>

          Welcome to Mixtul
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
            style={{
              ...styles.button,
              fontSize: isPhone ? '1em' : isTablet ? '1.2em' : '1.4em',
              padding: isPhone ? '10px 20px' : isTablet ? '12px 24px' : '15px 30px',
            }}
           component={Link} to="/Shop"
        >
         START SHOPPING
        </Button>
    
      </Container>
      <Sidenav/>
    </div>
    </>
  );
}

export default Firstpage;
