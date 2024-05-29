import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';

export default function Root() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Box
        sx={{
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          backgroundColor: '#fff',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Bem vindo ao MCKing!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          hamburguer de verdade
        </Typography>
        <Button variant="contained" size="large"
          sx={{
            marginTop: '16px',
            backgroundColor: '#4caf50',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#388e3c'
            }
          }}>
          Fazer pedido
        </Button>
      </Box>
    </Container>
  );
}