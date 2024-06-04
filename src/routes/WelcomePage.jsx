import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Container } from '@mui/material';
import styles from './WelcomePage.styles';

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box} >
        <Typography variant="h4" gutterBottom>
          Bem vindo ao MCKing!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          hamburguer de verdade
        </Typography>
        <Button 
          variant="contained" size="large" sx={styles.button}
          onClick={() => navigate('/order/menu/summary')}
        >
          Fazer pedido
        </Button>
      </Box>
    </Container>
  );
}