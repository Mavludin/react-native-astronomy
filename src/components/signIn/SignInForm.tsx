import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {FormErrors} from './FormErrors';
import {useAppDispatch} from 'store/hooks';
import {signIn} from 'store/slices/auth';
import {SpaceshipIcon} from 'components/icons/SpaceshipIcon';

const VALID_EMAIL_REGEX = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/gi;

type Props = {
  handleInputFocus: () => void;
  handleInputBlur: () => void;
};

export const SignInForm = ({handleInputFocus, handleInputBlur}: Props) => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Рефы нужны для перехода от одного input поля к следующему
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [isLoginValid, seIsLoginValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  // Поэтапная валидация
  const handleSignIn = useCallback(() => {
    if (login.length < 3) {
      seIsLoginValid(false);
      return;
    }

    if (!isLoginValid) {
      seIsLoginValid(true);
    }

    if (!email.match(VALID_EMAIL_REGEX)) {
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
    isLoginValid,
    isPassValid,
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
        textContentType="username"
        onSubmitEditing={() => emailRef.current?.focus()}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete="username"
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
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        caretHidden={false}
        autoComplete="email"
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
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete="password"
      />
      <SubmitBtn onPress={handleSignIn}>
        <Title>Войти</Title>
      </SubmitBtn>

      <FormErrors
        isLoginValid={isLoginValid}
        isEmailValid={isEmailValid}
        isPassValid={isPassValid}
      />
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
