import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {Routes, useAppNavigation} from 'utils/navigation';

const IMAGE_URL = require('assets/background.jpeg');

export const StartView = () => {
  const navigation = useAppNavigation();

  const navigateToSignIn = useCallback(() => {
    navigation.navigate(Routes.SignIn);
  }, [navigation]);

  return (
    <Container>
      <Background source={IMAGE_URL} resizeMode="cover">
        <StartButton onPress={navigateToSignIn}>
          <Title>Начать</Title>
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
  width: 150px;
  height: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 16px;
`;

const Title = styled.Text`
  font-size: 28px;
  color: #000;
`;
