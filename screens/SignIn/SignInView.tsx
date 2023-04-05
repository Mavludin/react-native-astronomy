import React, {useState} from 'react';
import styled from 'styled-components/native';

export const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <FormContainer>
        <FormInput placeholder="Email..." onChangeText={setEmail} />
        <FormInput placeholder="Password..." onChangeText={setPassword} />
        <SubmitBtn>
          <ButtonText>Войти</ButtonText>
        </SubmitBtn>
      </FormContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.View`
  align-items: flex-start;
  width: 70%;
  row-gap: 20px;
`;

const FormInput = styled.TextInput`
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #000;
`;
