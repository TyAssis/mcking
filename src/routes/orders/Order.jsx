import React from 'react';
import { Outlet } from "react-router-dom";
import { Button, Box, Typography, Container } from '@mui/material';

export default function Order() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Box sx={{
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        backgroundColor: '#fff',
        maxWidth: '400px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Outlet />
      </Box>
    </Container>
  )
}