import {Loader} from '@/components';
import {useSignUpMutation} from '@/redux/services';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from './../../redux/reducers/authReducer';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [signUpAPI, APIResponse] = useSignUpMutation();

  const requestBody = {
    name: 'Sidds',
    email: 'kajhsdkjas123d111ss@gmail.com',
    password: 123456,
  };

  React.useEffect(() => {
    if (APIResponse.isError) {
      alert('Unauthorized');
    } else if (APIResponse.isSuccess) {
      if (APIResponse.data.data.code == 0) {
        alert('Registered');
        dispatch(register({accessToken: APIResponse.data.data.data.Token}));
      } else {
        alert(APIResponse.data.data.message);
      }
    }
  }, [APIResponse]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{requestBody.name}</Text>
      <Text>{requestBody.email}</Text>
      <Text>{requestBody.password}</Text>

      <Button title="Register now" onPress={() => signUpAPI(requestBody)} />
      {APIResponse.isLoading ? <Loader /> : <Text>Not Loading</Text>}
    </View>
  );
};

export default Register;
