import React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import { Container, Typography, Button } from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Info as InfoIcon,
  ContactSupport as ContactSupportIcon,
} from '@mui/icons-material';
import Routespages from "../Pages/Routespages"
import Firstpage from "../componenets/Firstpage"
import Link from '@mui/material/Link';
import Shop from "../Pages/Shop";
import About from "../Pages/About";

const Sidenav = () => {
  const iconList = [
    { icon:    <Link href="/"> <HomeIcon sx={{color:"white", fontSize:"40px"}}/>  </Link>},
    { icon:    <Link href="/Shop"> <ShoppingCartIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} /> </Link> },
    { icon:    <Link href="/About"> <InfoIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} /></Link> },
    { icon:    <Link href="/Contact"> <ContactSupportIcon sx={{color:"white", fontSize:"40px", marginTop:"1rem"}} /> </Link>},
  ];

  const sidebarHeight = 100; // Set the height of the sidebar as needed

  const topPosition = `calc(50% - ${sidebarHeight / 2}px)`;

  return (
    <List style={{ position: 'fixed', left: 0, top:"30%",   backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
      {iconList.map((item, index) => (
        <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidenav;
