import React from 'react';
import { Outlet } from "react-router-dom";
import { Button, Box, Typography, Container } from '@mui/material';

export default function Order() {
  return (
    <>
      <Container sx={{
        backgroundColor: 'black',
      }}>

      </Container>
      <Outlet />
    </>
  )
}