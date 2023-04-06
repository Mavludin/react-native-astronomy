import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {RootStackParamList, Routes} from '../../models/navigation';

const VALID_EMAIL_REGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

type Props = NativeStackScreenProps<RootStackParamList, Routes.SignIn>;

export const SignInView = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  const handleSignIn = useCallback(() => {
    if (!VALID_EMAIL_REGEX.test(email)) {
      setIsEmailValid(false);
      return;
    }

    if (password.length < 8) {
      setIsPassValid(false);
      return;
    }

    navigation.navigate(Routes.Home);
  }, [email, navigation, password.length]);

  return (
    <Container>
      <FormContainer>
        <FormInput placeholder="Email..." onChangeText={setEmail} />
        <FormInput placeholder="Password..." onChangeText={setPassword} />
        <SubmitBtn>
          <ButtonText onPress={handleSignIn}>Войти</ButtonText>
        </SubmitBtn>
        {!isEmailValid && <ErrorMessage>Формат почты неверный</ErrorMessage>}
        {!isPassValid && <ErrorMessage>Длина пароля не меньше 8</ErrorMessage>}
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

const ErrorMessage = styled.TextInput`
  width: 100%;
  color: crimson;
  font-size: 18px;
`;
