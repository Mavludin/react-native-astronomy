import {SpaceStationIcon} from 'components/icons/SpaceStationIcon';
import React from 'react';
import styled from 'styled-components/native';

export const NoConnectionView = () => {
  return (
    <Container>
      <SpaceStationIcon />
      <Text>Соединение потеряно</Text>
      <SubText>Проверьте подключение к интернету</SubText>
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

const Text = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: white;
`;

const SubText = styled.Text`
  font-size: 16px;
  color: gray;
`;
