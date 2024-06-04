import React from 'react';
import { Outlet } from "react-router-dom";
import { Box, Container } from '@mui/material';
import styles from './Order.styles';

export default function Order() {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Outlet />
      </Box>
    </Container>
  )
}