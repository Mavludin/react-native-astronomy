import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import styled from 'styled-components/native';

import {CloseIcon} from './CloseIcon';

type Props = {
  visible: boolean;
  onClose: () => void;
  imageUrl: string;
};

export const ImageModal = ({visible, onClose, imageUrl}: Props) => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  return (
    <Modal
      transparent
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
      visible={visible}
      animationType="fade"
      statusBarTranslucent>
      <SafeAreaView />
      {isImageLoading && (
        <LoaderWrapper>
          <LoaderText>Loading...</LoaderText>
        </LoaderWrapper>
      )}
      <SModalContent>
        <SContentWrapper>
          <SContentHeader>
            <CloseButton onPress={onClose}>
              <CloseIcon />
            </CloseButton>
          </SContentHeader>
          <Image
            onLoadStart={() => setIsImageLoading(true)}
            onLoadEnd={() => setIsImageLoading(false)}
            source={{uri: imageUrl}}
          />
        </SContentWrapper>
      </SModalContent>
    </Modal>
  );
};

const SModalContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SContentWrapper = styled.View`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: #2c2c2d;
`;

const SContentHeader = styled.View`
  flex-direction: row;
  width: 100%;
  position: relative;
  justify-content: center;
  z-index: 2;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 12px;
`;

const LoaderWrapper = styled.View`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;

  justify-content: center;
  align-items: center;
`;

const LoaderText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
