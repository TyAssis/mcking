import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';

import { burgers } from '../../backend/BurguesMenu';

export default function Order() {
  return (
    <>
      <Container sx={{
        height: '75%',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
        {burgers.map((burger, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 2,
              borderBottom: '1px solid #ccc',
              marginBottom: 2,
            }}
          >
            <img src={burger.image} alt={burger.name} width={100} height={100} style={{ marginRight: 16 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{burger.name}</Typography>
              <Typography variant="body1">{burger.price}</Typography>
            </Box>
            <Button variant="contained" color="primary" startIcon={<Add />} />
          </Box>
        ))}
      </Container>
      <Outlet />
    </>
  )
}