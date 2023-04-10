import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Linking, useWindowDimensions} from 'react-native';
import axios from 'axios';
import {Header} from 'components/Header';
import {ImageModal} from 'components/ImageModal';
import {DataItem} from 'utils/data';
import FastImage from 'react-native-fast-image';

export const HomeView = () => {
  const [data, setData] = useState<DataItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const {width: screenWidth} = useWindowDimensions();

  useEffect(() => {
    axios
      .get('https://go-apod.herokuapp.com/apod')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  const openWeb = useCallback(() => {
    Linking.openURL('https://go-apod.herokuapp.com/#api-docs');
  }, []);

  // Заблаговременная загрузка картинок
  useEffect(() => {
    if (data?.url && data.hdurl) {
      FastImage.preload([
        {
          uri: data.url,
        },
        {
          uri: data.hdurl,
        },
      ]);
    }
  }, [data?.hdurl, data?.url]);

  if (!data) {
    return null;
  }

  return (
    <SafeArea>
      <Container>
        <Header />

        <BodyContainer>
          <PressableContainer onPress={() => setModalVisible(true)}>
            <FastImage
              style={{width: screenWidth - 40, height: '100%'}}
              source={{uri: data.url}}
            />
          </PressableContainer>

          <InnerContainer>
            <Title>{data.title}</Title>
            <Date>{data.date}</Date>
            <Description>{data.explanation}</Description>
          </InnerContainer>
        </BodyContainer>

        <ResourceButton onPress={openWeb}>
          <ResourceText>Ссылка на ресурс</ResourceText>
        </ResourceButton>
      </Container>
      <ImageModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        imageUrl={data.hdurl}
      />
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #2c2c2d;
  height: 100%;
`;

const Container = styled.ScrollView`
  padding-horizontal: 20px;
`;

const BodyContainer = styled.View`
  width: 100%;
  border-radius: 20px;
`;

const PressableContainer = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const InnerContainer = styled.View`
  width: 100%;
  justify-content: center;
  border-radius: 20px;
  padding: 15px;
  background-color: #232323;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #8120f7;
  margin-bottom: 10px;
`;

const Date = styled.Text`
  font-size: 13px;
  color: white;
  opacity: 0.5;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  color: white;
  font-style: italic;
  font-size: 16px;
`;

const ResourceButton = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
`;

const ResourceText = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: #8120f7;
`;
