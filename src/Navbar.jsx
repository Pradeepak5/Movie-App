import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
              <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
              <Button color="inherit" onClick={()=>navigate('/add-movies')}>Add Movies</Button>
              <Button color="inherit" onClick={()=>navigate('/color-game')}>Color Game</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }