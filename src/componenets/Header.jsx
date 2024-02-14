import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, styled, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme from './Theme';
import Link from '@mui/material/Link';
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Contact from "../Pages/Contact"
import UserDetails from "../Auth/UserDetails"
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import Logout from "../Auth/Logout"

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#992D00', // Very dark orange
});

const CenterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const RightContainer = styled('div')({
  display: 'flex',
  alignItems: 'right',
  justifyContent:"spaceAround"

});

const LeftContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',

});

const StyledIconButton = styled(IconButton)({
  marginRight: 2,
});

const Header = () => {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const auth = getAuth();
  const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  
  const uid = user.uid;
  } else {
    // User is signed out
    // ...
  }
});

  return (
    <>
    { user ? <>
    <StyledAppBar position="fixed">
      <Toolbar>
        <LeftContainer>
         <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
         <Typography  variant="h6" sx={{fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive", letterSpacing:2}} component="div" color="inherit">
            Mixtul 
          </Typography>
         </Link>

        </LeftContainer>

        <CenterContainer sx={{ display: isSmallScreen ? "none" : "flex",}}>

          <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Home</Button>
          </Link>
          <Link href="/Shop" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Shop</Button>
          </Link>
          <Link href="/About" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">About</Button>
          </Link>
          <Link href="/Contact" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Contact</Button>
          </Link>
            
        </CenterContainer>

        <RightContainer sx={{ marginLeft: isSmallScreen ? 'auto' : 0}}>
         <Link href="/Cart" sx={{color:"white", textDecoration:"none"}}> 
          <StyledIconButton sx={{marginLeft:"1rem"}} color="inherit" aria-label="Shopping Cart">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </StyledIconButton>
          </Link>
          <Link href="/Login" sx={{color:"white", textDecoration:"none"}}> 
              <Logout/>                
          </Link>
        </RightContainer>
      </Toolbar>
    </StyledAppBar>
         </>: 

         <StyledAppBar position="fixed">
      <Toolbar>
        <LeftContainer>
         <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
         <Typography  variant="h6" sx={{fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive", letterSpacing:2}} component="div" color="inherit">
            Mixtul 
          </Typography>
         </Link>

        </LeftContainer>

        <CenterContainer sx={{ display: isSmallScreen ? "none" : "flex",}}>

          <Link href="/" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Home</Button>
          </Link>
          <Link href="/Shop" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Shop</Button>
          </Link>
           <Link href="/About" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">About</Button>
          </Link>
          <Link href="/Contact" sx={{color:"white", textDecoration:"none"}}> 
             <Button color="inherit">Contact</Button>
          </Link>
            
        </CenterContainer>

        <RightContainer sx={{ marginLeft: isSmallScreen ? 'auto' : 0}}>
         <Link href="/Cart" sx={{color:"white", textDecoration:"none"}}> 
          <StyledIconButton sx={{marginLeft:"1rem"}} color="inherit" aria-label="Shopping Cart">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </StyledIconButton>
          </Link>
          <Link href="/Login" sx={{color:"white", textDecoration:"none"}}> 
               <Button color="inherit" sx={{background:"chocolate", marginLeft:"1rem"}}>Login</Button>
           </Link>
        </RightContainer>
      </Toolbar>
    </StyledAppBar>
       }
    </>
  );
};

export default Header;
