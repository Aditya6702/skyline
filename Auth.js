import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FlightIcon from '@mui/icons-material/Flight';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  createTheme,ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



//install toastify here
import { toast, Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();

function Auth({state}){
const [address,setAddress] = React.useState(null);
const navigateTo = useNavigate();

function handleSubmit(){
    // if(address == '')
    //     navigateTo('./');
    // else if(address == '')
    //     navigateTo('./');
    // if(address = '')
    //     navigateTo('./');
    navigateTo('./');

}

return (
    <>
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <FlightIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter The Wallet Address
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              id="address"
              onChange={(e)=>setAddress(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              SUBMIT 
            </Button>
            <Toaster toastOptions={{ duration: 4000 }} />
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </>

  );
}

export default Auth;
