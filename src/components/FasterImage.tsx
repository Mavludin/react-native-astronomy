import React from 'react';
import FastImage from 'react-native-fast-image';

type Props = {
  width: number;
  uri?: string;
  onLoadStart: () => void;
  onLoadEnd: () => void;
};

export const FasterImage = ({width, uri, onLoadStart, onLoadEnd}: Props) => {
  return (
    <FastImage
      style={{width, height: '100%'}}
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      onError={console.error}
    />
  );
};
