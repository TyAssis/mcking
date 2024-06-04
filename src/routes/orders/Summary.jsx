import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

import styles from './Summary.styles';

export default function Summary() {
  return (
    <Container disableGutters sx={styles.container}>
      <Container disableGutters sx={styles.horizontalContainer}>
        <Container disableGutters sx={styles.leftContainer}>
          <Typography variant="h6">Resumo do Pedido</Typography>
          <Typography>Burguer X R$ 6.99</Typography>
          <Typography>Burguer Y R$ 6.99</Typography>
          <Typography>Burguer Z R$ 6.99</Typography>
        </Container>
        <Container disableGutters sx={styles.rightContainer}>
          <Typography variant="h6">Total do Pedido</Typography>
          <Box sx={styles.priceBox} >
            <Typography>R$ 20.97</Typography>
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