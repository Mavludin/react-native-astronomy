import React, {Dispatch} from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
  imageUrl: string;
};

export const ModalComponent = ({
  modalVisible,
  setModalVisible,
  imageUrl,
}: Props) => {
  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Image source={{uri: imageUrl}} />
      </Modal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
