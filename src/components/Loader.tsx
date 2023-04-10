import React from 'react';
import styled from 'styled-components/native';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderText>Loading ...</LoaderText>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #1f1f20;
`;

const LoaderText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
