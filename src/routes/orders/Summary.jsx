import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

import styles from './Summary.styles';
import { useLoaderData } from 'react-router-dom';

export default function Summary() {
  const orderList = useLoaderData();
  const orderTotal = orderList.reduce((total, { price }) => total + +price, 0).toFixed(2);

  return (
    <Container disableGutters sx={styles.container}>
      <Container disableGutters sx={styles.horizontalContainer}>
        <Container disableGutters sx={styles.leftContainer}>
          <Typography variant="h6">Resumo do Pedido</Typography>
          {orderList.map((order, index) => (
            <Typography variant="body2" key={index}>{order.name} R$ {order.price}</Typography>
          ))}
        </Container>
        <Container disableGutters sx={styles.rightContainer}>
          <Typography variant="h6">Total do Pedido</Typography>
          <Box sx={styles.priceBox} >
            <Typography>R$ {orderTotal}</Typography>
          </Box>
        </Container>
      </Container>
      <Container disableGutters sx={styles.buttonContainer}>
        <Button disableRipple sx={styles.cancelButton}>Cancelar</Button>
        <Button disableRipple sx={styles.buyButton}>Comprar</Button>
      </Container>
    </Container>
  )
}