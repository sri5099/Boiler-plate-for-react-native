import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {navigate} from '../../navigation/NavigationService';

export const Profile = () => {
  return (
    <View>
      <Text onPress={() => navigate('Settings')}>Profile</Text>
    </View>
  );
};
