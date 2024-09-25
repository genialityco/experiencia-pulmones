import { Container, Divider, Text, Title } from '@mantine/core';
import classes from './fitstslides.module.css';

export function FirstSlide() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Title className={classes.titleBlue}>LOGRASTE</Title>
        <Title className={classes.titleBlue}>DESAFIAR</Title>
        <Title className={classes.titleBlue}>EL CÁNCER</Title>
        <div className={classes.logoContainer}>
          <img
            src="/images/SIMBOLO_MAS.png"
            alt="Asociación Logo"
            className={classes.plusImage}
          />
        </div>
        <Title className={classes.titleBlue}>LA LABOR</Title>
        <Title className={classes.titleBlue}>CONTINUA</Title>
        <div style={{ marginTop: '5px' }}>
          <Text className={classes.description}>La Asociación Colombiana</Text>
          <Text className={classes.description}>de Hematología y Oncología,</Text>
          <Text className={classes.description}>lanza su programa</Text>
        </div>
        <div className={classes.logoContainer}>
          <img
            src="/images/LOGOS_DESAFIANDO_EL_CANCER-02.png"
            alt="Asociación Logo"
            className={classes.logoCancer}
          />
        </div>
        <div style={{ marginBottom: '8px' }}>
          <Text className={classes.subDescription}>en alianza con</Text>
          <Text className={classes.subDescription}>Conquer Cancer ASCO</Text>
          <Text className={classes.subDescription}>Fundation...</Text>
        </div>
        <Divider color="black" />
        <div style={{ marginBlock: '5px' }}>
          <img
            src="/images/LOGO_ASOCIACION.png"
            alt="Asociación Logo"
            className={classes.logoAsociacion}
          />
        </div>
        <Divider color="black" />
        <div>
          <img
            src="/images/LOGO_CONQUER.png"
            alt="Asociación Logo"
            className={classes.logoConquer}
          />
        </div>
        <Divider color="black" />
      </Container>
    </div>
  );
}
