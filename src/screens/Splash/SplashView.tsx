import {SaturnIcon} from 'components/icons/SaturnIcon';
import React from 'react';
import styled from 'styled-components/native';

export const SplashView = () => {
  return (
    <Container>
      <SaturnIcon />
    </Container>
  );
};

const Container = styled.View`
  background-color: #1f1f20;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
  padding-horizontal: 20px;
`;
