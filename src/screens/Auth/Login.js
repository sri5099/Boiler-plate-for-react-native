import {Loader} from '@/components';
import {CONFIG} from '@/constants';
import {useSignInMutation} from '@/redux/services';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from './../../redux/reducers/authReducer';

const Login = ({navigation}) => {
  const [signInAPI, APIResponse] = useSignInMutation();
  const dispatch = useDispatch();

  const requestBody = {
    email: 'sidds@gmail.com',
    password: 123456,
  };

  React.useEffect(() => {
    if (APIResponse.isError) {
      console.log('APIResponse', APIResponse);
      alert('Unauthorized');
    } else if (APIResponse.isSuccess) {
      console.log('APIResponse', APIResponse);
      if (APIResponse.data.data.code == 0) {
        dispatch(login({accessToken: APIResponse.data.data.data.Token}));
      } else {
        alert(APIResponse.data.data.message);
      }
    }
  }, [APIResponse]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {APIResponse.isLoading && <Text>Loading </Text>}
      <Text>
        ENV : {CONFIG.ENV} - {CONFIG.APIBASEURL}
      </Text>
      <Text>Login</Text>
      <Button title="Login now" onPress={() => signInAPI(requestBody)} />
      <Button
        title="Register now"
        onPress={() => navigation.navigate('Register')}
      />
      <Text>{requestBody.email}</Text>
      <Text>{requestBody.password}</Text>
      {APIResponse.isLoading ? <Loader /> : <Text>Not Loading</Text>}
    </View>
  );
};

export default Login;
