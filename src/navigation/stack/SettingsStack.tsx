import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../config/RootStackList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsStack} />
    </Stack.Navigator>
  );
}
