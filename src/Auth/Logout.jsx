import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';

export default function Logout() {
     {/*For user logout logic*/}
    const uSignOut = () => {
        signOut(auth).then(() => {
            console.log('signout')
        }).catch(error => console.log(error))
    }

    return(
    <Button  sx={{background:"chocolate", color:"white", marginLeft:"1rem"}} onClick={uSignOut}>Logout</Button>
)}