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
function Engineer({state}){

    const [fuel,setFuel] = React.useState(null);
    const [engine,setEngine] = React.useState(null);
    const [inspect,setInspect] = React.useState(null);
    const [atc,setAtc] = React.useState(null);
    const [emission,setEmission] = React.useState(null);
    const [time,setTime] = React.useState(null);
    const [id,setId] = React.useState(null);

    const navigateTo = useNavigate();

    const handleSubmit = async(event)=>{
            event.preventDefault();
            // const image = 'image1';
            // const name = 'flight1';
            // const model = 'model1';
            // const transaction = await state.contract.addFlights(image,name,model,id);
            // await transaction.wait();
            // const details="nice flight";
            // const duration = "2 hours";
            // const stamp = "82hasduif123";
            // console.log(details,duration,stamp);
            // const transaction = await state.contract.updateFlightLogs(details,duration,stamp,1);
            // await transaction.wait();
            toast.success('Flight Log added');
            setTimeout(()=>{
                navigateTo('/')
            },4000);
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
            Enter Flight Logs
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Id"
              label="Flight Id"
              name="Flight Id"
              autoFocus
              onChange={(e)=>setId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="fuel"
              label="Fuel Capacity"
              name="fuel"
              autoFocus
              onChange={(e)=>setFuel(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="engine"
              label="Engine Status"
              name="engine"
              autoFocus
              onChange={(e)=>setEngine(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="inspect"
              label="Safety Inspection"
              name="inspect"
              autoFocus
              onChange={(e)=>setInspect(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="atc"
              label="ATC Logs"
              name="atc"
              autoFocus
              onChange={(e)=>setAtc(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="emission"
              label="Emission Records"
              name="emission"
              autoFocus
              onChange={(e)=>setEmission(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="time"
              label="Sign Time"
              name="time"
              autoFocus
              onChange={(e)=>setTime(e.target.value)}
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

export default Engineer;
