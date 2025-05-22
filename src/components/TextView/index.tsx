import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

interface CommonTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<CommonTextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  );
};

