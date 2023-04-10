import React from 'react';
import styled from 'styled-components/native';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import {SignInForm} from 'components/signIn/SignInForm';

export const SignInView = () => {
  return (
    <SafeArea>
      <ScrollableContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
            <SignInForm />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollableContainer>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #2c2c2d;
  height: 100%;
`;

const ScrollableContainer = styled.ScrollView`
  padding-horizontal: 40px;
`;
