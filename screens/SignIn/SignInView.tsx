import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Routes, useAppNavigation} from '../../models/navigation';
import {useAppDispatch} from '../../store/hooks';
import {signIn} from '../../store/slices/auth';

const VALID_EMAIL_REGEX = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/g;

export const SignInView = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isloginValid, seIsLoginValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  const handleSignIn = useCallback(() => {
    if (login.length < 3) {
      seIsLoginValid(false);
      return;
    }

    if (!isloginValid) {
      seIsLoginValid(true);
    }

    if (!VALID_EMAIL_REGEX.test(email)) {
      setIsEmailValid(false);
      return;
    }

    if (!isEmailValid) {
      setIsEmailValid(true);
    }

    if (password.length < 8) {
      setIsPassValid(false);
      return;
    }

    if (!isPassValid) {
      setIsPassValid(true);
    }

    dispatch(
      signIn({
        userData: {
          login,
          email,
        },
      }),
    );

    navigation.navigate(Routes.Home);
  }, [
    dispatch,
    email,
    isEmailValid,
    isPassValid,
    isloginValid,
    login,
    navigation,
    password.length,
  ]);

  return (
    <Container>
      <FormContainer>
        <FormInput
          placeholder="Login..."
          onChangeText={setLogin}
          value={login}
        />
        <FormInput
          placeholder="Email..."
          onChangeText={setEmail}
          value={email}
        />
        <FormInput
          placeholder="Password..."
          onChangeText={setPassword}
          value={password}
        />
        <SubmitBtn onPressOut={handleSignIn}>
          <Title>Войти</Title>
        </SubmitBtn>
        {!isloginValid && <ErrorMessage>Длина логина не меньше 3</ErrorMessage>}
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

const Title = styled.Text`
  font-size: 24px;
  color: #000;
`;

const ErrorMessage = styled.TextInput`
  width: 100%;
  color: crimson;
  font-size: 18px;
`;
