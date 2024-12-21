import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import {RNTheme, NBTheme} from './constants';
import Navigations from './navigations';
// import {oneSignalInit, handleNotifications} from './utils';

const Main = () => {
  // useEffect(() => {
  //   //PUSH NOTIFICATION CONFIGS
  //   oneSignalInit();
  //   handleNotifications();
  // }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={NBTheme}>
        <NavigationContainer theme={RNTheme}>
          <Navigations />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default Main;
