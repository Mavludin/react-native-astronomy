import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectUserData, signOut} from '../store/slices/auth';
import styled from 'styled-components/native';
import {UserIcon} from './UserIcon';

export const Header = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector(selectUserData);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Container>
      <Left>
        <UserIcon />
        <Text>{userData?.login}</Text>
      </Left>
      <SignOutButton onPress={handleSignOut}>
        <Text>Выйти</Text>
      </SignOutButton>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #232323;
  color: white;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

const Left = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

const Text = styled.Text`
  color: white;
  margin-left: 8px;
`;

const SignOutButton = styled.TouchableOpacity`
  color: white;
`;
