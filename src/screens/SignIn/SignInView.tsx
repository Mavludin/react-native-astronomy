import React from 'react';
import styled from 'styled-components/native';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInForm} from '../../components/signIn/SignInForm';

export const SignInView = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <SafeAreaView style={{backgroundColor: '#1f1f20'}} />
        <ScrolledContainer>
          <SignInForm />
        </ScrolledContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const ScrolledContainer = styled.ScrollView`
  flex: 1;
  padding-horizontal: 40px;
  padding-bottom: 40px;
  padding-top: 40px;
  height: 100%;
  background-color: #1f1f20;
`;
