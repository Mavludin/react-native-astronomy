import React from 'react';
import styled from 'styled-components/native';

const IMAGE_URL = require('../../assets/background.jpeg');

export const HomeView = () => {
  return (
    <Container>
      <Background source={IMAGE_URL} resizeMode="cover">
        <StartButton>
          <ButtonText>Начать</ButtonText>
        </StartButton>
      </Background>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.TouchableOpacity`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px;

  background-color: #fff;
  border-radius: 16px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #000;
`;
