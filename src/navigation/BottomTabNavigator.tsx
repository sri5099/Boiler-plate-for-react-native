import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './config/RootStackList';
import LogStack from './stack/LogStack';
import AppDrawer from './DrawerNavigator';
import BottomTabBar from '../components/BottomTabBar';
import {Profile} from '../screens/Profile';
import {MyPortfolio} from '../screens/MyPortfolio';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{title: 'Home', headerShown: false}}
      />
      <Tab.Screen
        name="Log"
        component={LogStack}
        options={{title: 'Log', headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile', headerShown: false}}
      />
      <Tab.Screen
        name="MyPortfolio"
        component={MyPortfolio}
        options={{title: 'MyPortfolio', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
