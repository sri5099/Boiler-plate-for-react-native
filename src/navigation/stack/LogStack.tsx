import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../config/RootStackList';
import { Log } from '../../screens/Log';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function LogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Log" component={Log} />
    </Stack.Navigator>
  );
}
