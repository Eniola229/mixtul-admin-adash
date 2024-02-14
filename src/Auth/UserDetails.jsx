import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAuth, onAuthStateChanged  } from "firebase/auth";

export default function UserDetails() {

	const auth = getAuth();
	const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
  if (user) {
  
  const email = user.email;
  const uid = user.uid;
  } else {
    // User is signed out
    // ...
  }
});

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
     { user ? <>
        <Typography fontFamily="monospace" color="green" textAlign={"center"}>
            {`${user.email}`}
             </Typography> 
           
         </>: <Typography >
         <Typography sx={{color:"red"}}>You are not Logged in.</Typography> 
         </Typography>}
      </CardContent>
      
    </Card>
  );
}
