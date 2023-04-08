import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const UserIcon = ({fill = '#232323', ...props}: {fill?: string}) => {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" {...props}>
      <Path fill={fill} d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-6a4 4 0 100 8 4 4 0 000-8zm5.111 9.997c.758.488.721 1.552.031 2.132A7.968 7.968 0 0112 20a7.967 7.967 0 01-5.114-1.848c-.697-.58-.734-1.649.028-2.14.236-.153.494-.287.774-.402C8.815 15.145 10.254 15 12 15c1.755 0 3.202.136 4.331.595.283.115.542.25.78.402z"
        fill="#8120f7"
      />
    </Svg>
  );
};
