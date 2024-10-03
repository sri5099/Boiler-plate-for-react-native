import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  [key: string]: any;
}

const CustomButton: React.FC<Props> = ({ title, onPress, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#007bff', // blue color
        padding: 10,
        // borderRadius: 5,
      },
      text: {
        fontSize: 16,
        color: '#007bff', // white color
        textAlign: 'center',
      },
    
});

export default CustomButton;