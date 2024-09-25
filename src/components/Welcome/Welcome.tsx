import { useNavigate } from 'react-router-dom';
import { Button, Container, Divider, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const navigate = useNavigate();

  const handleStartExperience = () => {
    navigate('/challenge-cancer');
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.logoContainer}>
          <img
            src="/images/LOGO_CANCER-01.png"
            alt="Logo"
            className={classes.firstLogo}
          />
        </div>
        <Divider color="white" />
        <div className={classes.logoContainer}>
          <img
            src="/images/LOGOSIMBOLO_ASOCIACION.png"
            alt="Logo"
            className={classes.secondLogo}
          />
        </div>
        <div className={classes.logoContainer}>
          <img
            src="/images/LOGO_CONQUER_BLANCO.png"
            alt="Logo"
            className={classes.thirdLogo}
          />
        </div>
        <Divider color="white" />
        <Text className={classes.subtext}>
          Brindando oportunidades de financiamiento en investigación
        </Text>
        <Button variant="filled" color="lime" mt="lg" size="lg" onClick={handleStartExperience}>
          INICIAR EXPERIENCIA
        </Button>
      </Container>
    </div>
  );
}
