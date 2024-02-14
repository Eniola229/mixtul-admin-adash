// Products.jsx
import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  styled,
  Box,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import sn from "../images/sn.jpg";
import bg from "../images/bg.jpg";
import { Link } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { db } from "../Auth/Firebase";
import { onSnapshot } from 'firebase/firestore'
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';
import { deleteDoc, doc } from 'firebase/firestore';


const StyledCard = styled(Card)({
  maxWidth: 240,
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s',
  marginTop:"3rem",
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 180,
  width:230,
  objectFit: 'cover',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
});

const StyledCardContent = styled(CardContent)({
  padding: '16px',
});

const StyledRating = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
  color: 'orange',
});

const StyledAmount = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '8px',
});

const StyledButton = styled(Button)({
  backgroundColor: 'chocolate',
  color: '#fff',
  width:"50%",
  textAlign:"center",
  '&:hover': {
    backgroundColor: 'darkorange',
  },
});

const Shopproducts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  //logic for displaying products

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
      });
      setProducts(list);
      setLoading(false);
    }, 
    (error) => {
       console.log(error);
       Swal.fire({
          title: 'Oops...',
          text: (error.code),
          icon: 'error',
          confirmButtonText: 'OK'
        })
          {/*Swal stops here*/}
    } 
    );
    return () => {
      unsub();
    }
  }, [])

  const handleAddToCart = () => {
    const newItem = { name: 'Product Name', amount: 49.99 };
    setCartItems([...cartItems, newItem]);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleViewCart = () => {
    navigate('/Cart'); 
  };

  const handleDelete = async (productId) => {
    try {
      // Delete the document with the specified product ID
      await deleteDoc(doc(db, 'products', productId));
      console.log('Product deleted successfully!');

      // Refresh the products after deletion
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  return (
    <Container sx={{ py: 6, }} maxWidth="md">
         {loading ?

         <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center", marginTop:"5rem"}}>
          <CircularProgress sx={{justifyContent:"center", color:"chocolate"}} color="success" /> 
          </Box>:(
      <Grid container spacing={4}>
     {products.map((product) => (

           <StyledCard key={product.id}>
          <CardActionArea>
            <StyledCardMedia
              component="img"
              image={product.img}
              alt="Product Image"
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" sx={{fontWeight:"bolder", color:"chocolate"}} component="div">
               {product.name}
              </Typography>
              <StyledRating>
                <Typography variant="body2" sx={{color:"orange"}}>
                  ★ {product.rate}
                </Typography>
              </StyledRating>
              <StyledAmount>
                ₦ {product.ammount}
              </StyledAmount>
              <Typography variant="body2" sx={{color:"green"}}>
                 {product.aval}
                </Typography>

            </StyledCardContent>
          </CardActionArea>
          <CardActions>
            <StyledButton onClick={() => navigate(`/UpdateProduct/${product.id}`)} size="small">
              Edit
            </StyledButton>
            <StyledButton onClick={() => handleDelete(product.id)} sx={{background:"red"}} size="small">
              Delete
            </StyledButton>
          </CardActions>
        </StyledCard>


      ))}
      
       
      </Grid>

        )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Item added to cart!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Shopproducts;
