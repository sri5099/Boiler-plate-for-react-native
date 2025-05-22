import {View, Text} from 'react-native';
import {navigate} from '../../navigation/NavigationService';

export const Log = () => {
  return (
    <View>
      <Text onPress={() => navigate('Settings')}>Log</Text>
    </View>
  );
};
