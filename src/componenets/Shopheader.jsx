import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PianoIcon from '@mui/icons-material/Piano';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import ComputerIcon from '@mui/icons-material/Computer';



const Shopheader = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'chocolate', marginTop: '3rem' }}>
      <Container>
        <Toolbar style={{ justifyContent: 'center', overflowX: 'auto', whiteSpace: 'nowrap' }}> 
         <Button component={Link} to="/" color="inherit"><HomeIcon/></Button>
         <Button component={Link} to="/speakers" color="inherit"><SpeakerGroupIcon/></Button>
          <Button component={Link} to="/amplifiers" color="inherit"><MicExternalOnIcon/></Button>
          <Button component={Link} to="/mixers" color="inherit"><EngineeringIcon/></Button>
          <Button component={Link} to="/piano" color="inherit"><PianoIcon/></Button>
          <Button component={Link} to="/cables" color="inherit"><SettingsInputCompositeIcon/></Button>
          <Button component={Link} to="/computers" color="inherit"><ComputerIcon/></Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Shopheader;
