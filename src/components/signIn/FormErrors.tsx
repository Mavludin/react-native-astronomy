import React from 'react';
import styled from 'styled-components/native';

type Props = {
  isLoginValid: boolean;
  isEmailValid: boolean;
  isPassValid: boolean;
};

export const FormErrors = ({
  isLoginValid,
  isEmailValid,
  isPassValid,
}: Props) => {
  return (
    <Container>
      {!isLoginValid && <ErrorMessage>Длина логина не меньше 3</ErrorMessage>}
      {!isEmailValid && <ErrorMessage>Формат почты неверный</ErrorMessage>}
      {!isPassValid && <ErrorMessage>Длина пароля не меньше 8</ErrorMessage>}
    </Container>
  );
};

const Container = styled.View``;

const ErrorMessage = styled.TextInput`
  width: 100%;
  color: crimson;
  font-size: 18px;
`;
