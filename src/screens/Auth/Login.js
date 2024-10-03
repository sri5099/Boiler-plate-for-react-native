import React, { useState , useCallback} from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './../../services/reducers/authReducer';
import {InputBox , CustomButton} from '../../components/common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSecure, setIsSecure] = useState(true);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    dispatch(login({ username, password }))
    .then((response) => {
      if (response.error) {
        setError(response.error.message);
      } else {
        navigation.navigate('Home');
      }
    })
    .catch((error) => {
      setError('An error occurred while logging in');
    });
};

const onPresseye = useCallback(() => {
  setIsSecure(!isSecure);
}, [isSecure]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}
      <View style={styles.inputContainer}>
        <InputBox
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter your username"
        />
        <InputBox
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
          icon={
            <TouchableOpacity onPress={onPresseye}>
              <MaterialIcons name={isSecure ? 'visibility-off' : 'visibility'} size={20} />
            </TouchableOpacity>
          }
        />
      </View>
      {/* <View style={styles.buttonContainer}> */}
        <CustomButton title="Login now" onPress={handleLogin} />
        <View style={styles.registerContainer}>

        <Text>Not a User Please </Text><CustomButton title="Register now" onPress={() => navigation.navigate('Register')} />
        </View>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // maxHeight: '80%'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
    // maxHeight: '30%'
    // marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default Login;