import { useState } from 'react';
import { Button, Container, Text, TextInput, Title } from '@mantine/core';
import classes from './ChallengeCancer.module.css';

export function ChallengeCancer() {
  const [name, setName] = useState('');

  const handleGoActivity = () => {
    window.location.href = 'https://playcanv.as/p/vrjvGQDR/';
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Title className={classes.title}>AYÚDANOS A DESAFIAR EL CÁNCER</Title>

        <div style={{ height: '250px' }}>
          <Text> </Text>
        </div>

        <div className={classes.logoContainer}>
          <img
            src="/images/LOGOSIMBOLO_ASOCIACION.png"
            alt="Asociación Logo"
            className={classes.logoSimbolo}
          />
        </div>

        <div className={classes.logoContainer}>
          <img
            src="/images/LOGO_CONQUER.png"
            alt="Conquer Cancer Logo"
            className={classes.logoConquer}
          />
        </div>

        <TextInput
          variant="unstyled"
          className={classes.textInput}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          placeholder="INGRESA TU NOMBRE AQUÍ"
        />

        <Button variant="filled" color="lime" mt="lg" size="lg" onClick={handleGoActivity}>
          SIGUIENTE
        </Button>
      </Container>
    </div>
  );
}
