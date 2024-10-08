import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen6} from './../screens';
import Tabs from './Tabs';

const HomeStack = createNativeStackNavigator();

export default function CommonStack({route, navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Screen6"
        component={Screen6}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
