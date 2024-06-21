import React, { useState } from 'react';
import { View, Input } from 'native-base';
import { StyleSheet } from 'react-native';

interface Props {
  // Add props if needed
}

const InputBox: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Enter a value"
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputBox;