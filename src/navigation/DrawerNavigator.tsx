import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabNavigator';
import { Profile } from '../screens/Profile';
import { RootStackParamList } from './config/RootStackList';
import HomeStack from './stack/HomeStack';

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function AppDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={HomeStack} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}