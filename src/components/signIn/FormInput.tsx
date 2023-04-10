import React from 'react';
import {KeyboardTypeOptions, ReturnKeyType, TextInput} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  placeholder: string;
  returnKeyType: ReturnKeyType;
  textContentType: 'username' | 'emailAddress' | 'password';
  keyboardType?: KeyboardTypeOptions;
  autoComplete: 'username' | 'email' | 'password';
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  ref?: React.RefObject<TextInput>;
  value: string;
};

const MemoInput = ({
  placeholder,
  returnKeyType,
  textContentType,
  keyboardType,
  autoComplete,
  onFocus,
  onBlur,
  ref,
  onChangeText,
  value,
}: Props) => {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor="gray"
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onSubmitEditing={ref ? () => ref.current?.focus() : undefined}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType={returnKeyType}
      textContentType={textContentType}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
    />
  );
};

const Input = styled.TextInput`
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

export const FormInput = React.memo(MemoInput);
