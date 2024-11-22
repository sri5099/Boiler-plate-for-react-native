import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '@/components';
import {authIsLogedIn} from '@/redux/reducers/authReducer';

//STACKS
import AuthStack from '@/navigations/AuthStack';
import HomeStack from '@/navigations/HomeStack';

export default function Navigations() {
  const accessToken = useSelector(state => state.auth.accessToken);
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authIsLogedIn());
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={{marginTop: '50%'}}>
          <Loader />
        </View>
      ) : accessToken ? (
        <HomeStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
}
