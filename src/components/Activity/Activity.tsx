import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Divider, Text, TextInput, Title } from '@mantine/core';
import classes from './Activity.module.css';

export function Activity() {
  const navigate = useNavigate();

  const handleGoPresentation = () => {
    navigate('/finish-presentation');
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container} onClick={handleGoPresentation}>
        <Divider color="transparent" />
      </Container>
    </div>
  );
}
