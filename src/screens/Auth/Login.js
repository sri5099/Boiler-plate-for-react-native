import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from './../../services/reducers/authReducer';
import InputBox from '../../components/common/customInputTextField';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button
        title="Login now"
        onPress={() => dispatch(login({accessToken: 'ss'}))}
      />
      <Button
        title="Register now"
        onPress={() => navigation.navigate('Register')}
      />
      {/* <InputBox/> */}
    </View>
  );
};

export default Login;
