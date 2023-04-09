import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {useAppDispatch} from '../store/hooks';
import {signIn} from '../store/slices/auth';
import {SpaceshipIcon} from '../components/SpaceshipIcon';
import {TextInput} from 'react-native';

const VALID_EMAIL_REGEX = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/gi;

export const SignInForm = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

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

    if (!email.length || !VALID_EMAIL_REGEX.test(email)) {
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
        login,
        email,
      }),
    );
  }, [
    dispatch,
    email,
    isEmailValid,
    isPassValid,
    isloginValid,
    login,
    password.length,
  ]);

  return (
    <FormContainer>
      <SpaceshipIcon />
      <MainTitle>Вход в космос</MainTitle>
      <FormInput
        placeholder="Login..."
        placeholderTextColor="gray"
        onChangeText={setLogin}
        value={login}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        ref={loginRef}
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <FormInput
        placeholder="Email..."
        placeholderTextColor="gray"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        textContentType="emailAddress"
        ref={emailRef}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <FormInput
        placeholder="Password..."
        placeholderTextColor="gray"
        onChangeText={setPassword}
        textContentType="password"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="done"
        value={password}
        ref={passwordRef}
      />
      <SubmitBtn onPress={handleSignIn}>
        <Title>Войти</Title>
      </SubmitBtn>
      {!isloginValid && <ErrorMessage>Длина логина не меньше 3</ErrorMessage>}
      {!isEmailValid && <ErrorMessage>Формат почты неверный</ErrorMessage>}
      {!isPassValid && <ErrorMessage>Длина пароля не меньше 8</ErrorMessage>}
    </FormContainer>
  );
};

const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  row-gap: 20px;
`;

const MainTitle = styled.Text`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 15px;
  color: #8120f7;
`;

const FormInput = styled.TextInput`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  position: relative;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 20px;
  height: 45px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #8120f7;
  font-weight: 600;
`;

const ErrorMessage = styled.TextInput`
  width: 100%;
  color: crimson;
  font-size: 18px;
`;
