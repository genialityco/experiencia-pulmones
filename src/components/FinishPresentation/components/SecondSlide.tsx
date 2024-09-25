import { Box, Container, Divider, Text } from '@mantine/core';
import classes from './secondslides.module.css';

export function SecondSlide() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <div style={{ marginTop: '5px' }}>
          <Text className={classes.description}>Bajo el nuevo programa de la Asociación</Text>
          <Text className={classes.description}>Colombiana de Hematología y Oncología</Text>
        </div>
        <div className={classes.logoContainer}>
          <img
            src="/images/LOGOS_DESAFIANDO_EL_CANCER-03.png"
            alt="Asociación Logo"
            className={classes.logoCancer}
          />
        </div>
        <div style={{ marginTop: '5px' }}>
          <Text className={classes.description}>se brindarán…</Text>
        </div>

        {/* Box para la tarjeta de subvenciones */}
        <Box className={classes.grantBox}>
          <div className={classes.textContent}>
            <Text className={classes.grantTitle}>
              DOS SUBVENCIONES DE INVESTIGACIÓN PARA INVESTIGADORES NIVEL SUPERIOR DE
            </Text>
            <Text className={classes.grantSubtitle}>
              Aprox. $300.000.000 de pesos colombianos.
            </Text>
          </div>
          <div className={classes.amountContent}>
            <Text className={classes.amountText} c="lime">USD 75.000</Text>
            <Text className={classes.amountSubText} c="lime">c/u</Text>
          </div>
        </Box>

        <Box className={classes.grantBox}>
          <div className={classes.textContent}>
            <Text className={classes.grantTitle}>
              DOS SUBVENCIONES DE INVESTIGACIÓN PARA INVESTIGADORES NIVEL MEDIO DE
            </Text>
            <Text className={classes.grantSubtitle}>
              Aprox. $100.000.000 de pesos colombianos.
            </Text>
          </div>
          <div className={classes.amountContent}>
            <Text className={classes.amountText} c="lime">USD 25.000</Text>
            <Text className={classes.amountSubText} c="lime">c/u</Text>
          </div>
        </Box>

        <Divider mt="xs" color="black" />
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
