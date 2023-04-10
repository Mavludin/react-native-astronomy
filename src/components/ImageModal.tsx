import React, {useState} from 'react';
import {Modal, useWindowDimensions} from 'react-native';

import styled from 'styled-components/native';

import {CloseIcon} from './icons/CloseIcon';
import {FasterImage} from './FasterImage';

type Props = {
  visible: boolean;
  onClose: () => void;
  imageUrl: string;
};

export const ImageModal = ({visible, onClose, imageUrl}: Props) => {
  const {width: screenWidth} = useWindowDimensions();
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <Modal
      transparent
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
      visible={visible}
      animationType="fade"
      statusBarTranslucent>
      <SModalContent>
        <SContentHeader>
          <CloseButton onPress={onClose}>
            <CloseIcon />
          </CloseButton>
        </SContentHeader>

        <SContentWrapper>
          {isImageLoading && <LoaderText>Loading...</LoaderText>}
          <FasterImage
            width={screenWidth}
            uri={imageUrl}
            onLoadStart={() => setIsImageLoading(true)}
            onLoadEnd={() => setIsImageLoading(false)}
          />
        </SContentWrapper>
      </SModalContent>
    </Modal>
  );
};

const SModalContent = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
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
  top: 40px;
  right: 15px;
`;

const SContentWrapper = styled.View`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: #2c2c2d;

  justify-content: center;
  align-items: center;
`;

const LoaderText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;

  position: absolute;
  top: 50%;
  z-index: 100;
`;
