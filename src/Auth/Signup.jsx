import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from 'react';
import { auth } from "./Firebase";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Signwithgoogle from "./Signwithgoogle"  
import Footer from "../componenets/Footer";


const defaultTheme = createTheme();

export default function Signup() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);

 {/* For all the signup logic */}
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       {/*This will send email to the user after signing up*/}
      sendEmailVerification(auth.currentUser)

      .then(() => {

          {/*This will send email if registraion goes succesfully*/}
        Swal.fire({
          title: 'Success',
          text: 'Email Verifcation Link sent to you',
          icon: 'success',
          confirmButtonText: 'OK'
        })
          {/*Swal stops here*/}

      })
      console.log(userCredential);
    }).catch((err) => {
        {/*If there is any error*/}
          Swal.fire({
          title: 'Oops...',
          text: (err.code),
          icon: 'error',
          confirmButtonText: 'OK'
        })
          {/*Swal stops here*/}
    })

  }




  return (
    <>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'chocolate' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M15 6H21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M18 3V9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"/></path></g></svg>    
            </Avatar>
          <Typography component="h1" variant="h5">
           Create Account
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
        <form onSubmit={signUp} method="post">
              {/* For all the email details */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{border:"1px solid chocolate", placeholder:"chocolate",    '&:hover': {
     border:"1px solid chocolate"
    },
}}
            />
               {/* For all the password details */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{border:"1px solid chocolate", placeholder:"chocolate",    '&:hover': {
     border:"1px solid chocolate"
    },
}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ background:"chocolate", mt: 3, mb: 2,  '&:hover': {
      backgroundColor: 'darkorange',
    }, }}
            >
            CREATE ACCOUNT
            </Button>
            <Signwithgoogle/>
               <Grid container>
              <Grid item>
                  {"Already have an account"}  
                  <Link sx={{color:"brown"}} to='/Login'>Login</Link>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
      </Container>
     
    </ThemeProvider>
    <Footer/>
    </>
  );
}