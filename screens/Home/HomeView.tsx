import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {RootStackParamList, Routes} from '../../models/navigation';
import axios from 'axios';
import {DataItem} from '../../models/data';

type Props = NativeStackScreenProps<RootStackParamList, Routes.Home>;

export const HomeView = ({navigation}: Props) => {
  const [data, setData] = useState<DataItem | null>(null);

  useEffect(() => {
    axios
      .get('https://go-apod.herokuapp.com/apod')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={{uri: data.url}} />
      </ImageContainer>
      <MainContainer>
        <Title>{data.title}</Title>
        <Date>{data.date}</Date>
        <Description>{data.explanation}</Description>
      </MainContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2d;
  padding-horizontal: 20px;
`;

const ImageContainer = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  border-radius: 20px;
  padding: 15px;

  background-color: #232323;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #8120f7;
`;

const Date = styled.Text`
  font-size: 13px;
  color: white;
  opacity: 0.5;
`;

const Description = styled.Text`
  color: white;
  font-style: italic;
`;
