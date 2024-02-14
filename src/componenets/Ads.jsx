import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, useMediaQuery, useTheme } from '@mui/material';
import adspic from "../images/adspic.jpg";


const AnimatedAdContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: 300,
  backgroundImage: `url(${adspic})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
});

const Overlay = styled('div')(({ theme }) => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 0,
    opacity: 0,
    transform: 'scale(0)',
    animation: '$fadeInScale 1s forwards',
    [theme.breakpoints.down('sm')]: {
      height: '50%', 
    },
  },
}));



const fadeInText = {
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
};

const ContentContainer = styled('div')({
  textAlign: 'center',
  zIndex: 1,
  color:"white",
  fontWeight:"bolder"
});

const ActionButton = styled(Button)({
  backgroundColor: '#992D00',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
'&:hover': {
      backgroundColor: 'chocolate',
    },
});

const Ads = () => {
  return (
    <AnimatedAdContainer>
      <Overlay />
      <ContentContainer>
        <Typography sx={{fontWeight:"bolder", textShadow:"3px 3px chocolate"}} variant="h4" gutterBottom style={{ animation: '$fadeInText 1s forwards' }}>
          Awesome Discounts!!!
        </Typography>
        <Typography variant="body1" paragraph style={{ animation: '$fadeInText 1s forwards 0.5s' }}>
          Get 20% off on all Sounds Instrument
        </Typography>
        <ActionButton>
          Start Shopping
        </ActionButton>
      </ContentContainer>
    </AnimatedAdContainer>
  );
};

export default Ads;
