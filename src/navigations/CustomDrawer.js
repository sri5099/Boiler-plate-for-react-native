import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CommonStack from './CommonStack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={CommonStack} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default CustomDrawer;
