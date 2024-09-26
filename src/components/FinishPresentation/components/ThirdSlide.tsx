import { Box, Container, Text } from '@mantine/core';
import classes from './thirdslides.module.css';

export function ThirdSlide() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        
        {/* Caja principal con fondo verde */}
        <Box className={classes.greenBox}>
          <Text className={classes.introText}>
            Información y requisitos para participar, próximamente
          </Text>

          {/* Logo Desafiando el Cáncer */}
          <div className={classes.logoContainer}>
            <img
              src="/images/LOGOS_DESAFIANDO_EL_CANCER-03.png"
              alt="Desafiando el Cáncer Logo"
              className={classes.logoCancer}
            />
          </div>

          <div className={classes.logoContainer}>
            <img
              src="/images/LOGOSIMBOLO_ASOCIACION.png"
              alt="Desafiando el Cáncer Logo"
              className={classes.logoSimboloAsociacion}
            />
          </div>

          {/* Texto adicional */}
          <Text className={classes.descriptionText}>
            El programa apoyará proyectos de investigación innovadores en el campo de la Hematología y la Oncología médica
          </Text>

          {/* Logo de la asociación */}
          {/* <div className={classes.logoContainer}>
            <img
              src="/images/LOGO_ASOCIACION.png"
              alt="Asociación Colombiana Logo"
              className={classes.logoAsociacion}
            />
          </div> */}
        </Box>

        {/* Logos de Conquer Cancer y la Asociación */}
        <div className={classes.logoBottomContainer}>
          <img
            src="/images/LOGO_CONQUER.png"
            alt="Conquer Cancer Logo"
            className={classes.logoConquer}
          />
        </div>
      </Container>
    </div>
  );
}
