import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../services/reducers/authReducer';
import { useLoginMutation } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigation = useNavigation();


  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      const result = await login({ username, password });
      console.log(result);
      console.log(data, typeof data, data.accessToken, error);
      dispatch(loginSuccess({ username, accessToken: result.accessToken }));
    } catch (err) {
      dispatch(loginFailure(err.message || 'Login failed'));
    }
    
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}} />
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      {/* <Button title="Login" onPress={handleLogin} /> */}
      {error ? <Text>{error}</Text> : null}
    </View>
  )

};

export default Login;