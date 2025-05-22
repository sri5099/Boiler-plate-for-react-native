// navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../../screens/Profile';
import { RootStackParamList } from '../config/RootStackList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
