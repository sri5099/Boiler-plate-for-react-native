import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/stack/AppStack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {navigationRef} from './src/navigation/NavigationService';
import {ThemeProvider} from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider>
          <SafeAreaView edges={['top', 'bottom']} style={{flex: 1}}>
            <AppStack />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
