import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../screens/Login';
import { RootStackParamList } from '../config/RootStackList';
import BottomTabs from '../BottomTabNavigator';
import { Setting } from '../../screens/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name='Settings' component={Setting} />
        </Stack.Navigator>
    );
}