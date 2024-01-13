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
function Pilot({state}){

    const [duration,setDuration] = React.useState(null);
    const [consumption,setConsumption] = React.useState(null);
    const [blackBox,setBlackBox] = React.useState(null);
    const [details,setDetails] = React.useState(null);
    const [id,setId] = React.useState(null);

    const navigateTo = useNavigate();

    const handleSubmit = async(event)=>{
            event.preventDefault();
            const transaction = await state.contract.addLogs(id,details,duration,blackBox,consumption);
            await transaction.wait();
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
              id="duration"
              label="Flight Duration"
              name="duration"
              autoFocus
              onChange={(e)=>setDuration(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="consumption"
              label="Fuel Consumption"
              name="consumption"
              autoFocus
              onChange={(e)=>setConsumption(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="details"
              label="Enter Fight Details"
              name="details"
              autoFocus
              onChange={(e)=>setDetails(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="box"
              label="Black Box status"
              name="duration"
              autoFocus
              onChange={(e)=>setBlackBox(e.target.value)}
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

export default Pilot;
