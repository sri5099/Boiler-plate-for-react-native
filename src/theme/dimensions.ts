// theme/dimensions.ts

import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const deviceWidth = width;
export const deviceHeight = height;

export const STATUSBAR_HEIGHT = Platform.select({
  ios: 20,
  android: StatusBar.currentHeight ?? 0,
});

export const NAVBAR_HEIGHT = 56;
