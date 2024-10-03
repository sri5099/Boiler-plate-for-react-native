import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './services/store';
import {RNTheme, NBTheme} from './assets/constants/theme';
import Navigations from './navigations';

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <NativeBaseProvider theme={NBTheme}>
        <NavigationContainer theme={RNTheme}>
          <Navigations />
        </NavigationContainer>
      </NativeBaseProvider>
      </SafeAreaProvider>   
    </Provider>
  );
};

export default Main;