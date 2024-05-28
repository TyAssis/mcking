import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import "./root.css";

export default function Root() {
  return (
    <Container className="container">
      <Box className="box">
        <Typography variant="h4" gutterBottom>
          Bem vindo ao MCKing!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          hamburguer de verdade
        </Typography>
        <Button className="button" variant="contained" size="large">
          Fazer pedido
        </Button>
      </Box>
    </Container>
  );
}