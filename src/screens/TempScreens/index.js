import {Button, View, Text} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CONFIG, FONTS, WP} from '@/constants';
import {logout} from './../../redux/reducers/authReducer';

const Screen2 = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={FONTS.h2}>Screen2</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer {CONFIG.ENV} </Text>
      </TouchableOpacity>
      <Button colorScheme="primary">Success</Button>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen3</Text>
    </View>
  );
};

const Screen4 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen4</Text>
    </View>
  );
};

const Screen5 = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen5</Text>
      <Button
        style={{width: WP('70%')}}
        onPress={() => dispatch(logout())}
        colorScheme="primary">
        Logout
      </Button>
    </View>
  );
};

export {Screen2, Screen3, Screen4, Screen5};
