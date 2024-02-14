import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Auth/Firebase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();
const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', rate: 0, amount: 0, img: '', aval: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id, ...productDoc.data() });
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'products', id), { ...product });
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
  <ThemeProvider theme={defaultTheme}>
    <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
    }}>
    <form style={{display:"column", gap:"10px"}}>
    <h1>Still working on this page</h1>
      <h2>Update Product</h2>
      {/*input fields for updating product details */}
      <TextField
      sx={{
        width:"100%",
        display:"flex",
        justifyContent:'center',
        margin:"auto",
        marginButtom:"5px"
      }}
        type="text"
        sx={{
        width:"100%",
        display:"flex",
        justifyContent:'center',
        margin:"auto"
      }}
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <TextField
      sx={{
        width:"100%",
        display:"flex",
        justifyContent:'center',
        margin:"auto"
      }}
        type="number"
        value={product.rate}
        onChange={(e) => setProduct({ ...product, rate: parseFloat(e.target.value) })}
      />
      <TextField
      sx={{
        width:"100%",
        display:"flex",
        justifyContent:'center',
        margin:"auto"
      }}
        type="text"
        value={product.amount}
        onChange={(e) => setProduct({ ...product, amount: parseFloat(e.target.value) })}
      />
      <button 
       onClick={handleUpdate}
       style={{
        width:"100%",
        color:"white",
        height:'7vh',
        border:"none",
        backgroundColor:"chocolate"
       }}
       >Update Product</button>
      </form>
    </Box>
    </ThemeProvider>
  );
};

export default UpdateProduct;
