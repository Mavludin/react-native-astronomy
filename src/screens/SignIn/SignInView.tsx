import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Animated, Keyboard, TouchableWithoutFeedback} from 'react-native';
import AndroidKeyboardAdjust from 'rn-android-keyboard-adjust';
import {IS_ANDROID} from '../../utils/device';
import {SignInForm} from '../../components/signIn/SignInForm';

export const SignInView = () => {
  const [isKeyboardShown, setKeyboardShown] = useState(false);

  const animatedValue = useRef(new Animated.Value(1)).current;

  const positionOutsideInput = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const positionInsideInput = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const handleInputFocus = useCallback(() => {
    positionOutsideInput();
    setKeyboardShown(true);

    if (IS_ANDROID) {
      AndroidKeyboardAdjust.setAdjustNothing();
    }
  }, [positionOutsideInput]);

  const handleInputBlur = useCallback(() => {
    positionInsideInput();
    setKeyboardShown(false);
  }, [positionInsideInput]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Wrapper
        isFocused={isKeyboardShown}
        style={{flex: 1}}
        behavior="height"
        enabled>
        <ScrollableContainer>
          <SignInForm
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
          />
        </ScrollableContainer>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

const ScrollableContainer = styled.ScrollView`
  flex: 1;
  padding-horizontal: 40px;
  padding-bottom: 40px;
  padding-top: 40px;
  height: 100%;
  background-color: #1f1f20;
`;

const Wrapper = styled.KeyboardAvoidingView<{
  isFocused: boolean;
}>`
  width: 100%;
  border-color: #1f1f20;
`;
