import {DefaultTheme} from '@react-navigation/native';
import {extendTheme} from 'native-base';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
  } from 'react-native-responsive-screen';
  
  export {WP, HP};

  import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const ICONTYPE = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
};

export const ICON = ({type, name, color, size = 24, style}) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

export const ICONS = {
  test: 'isv',
  testType: ICONTYPE.AntDesign,
};




//FONT COLLECTIONS
const FONTBLACK = 'SourceSansPro-Black';
const FONTBOLD = 'SourceSansPro-Bold';
const FONTSEMIBOLD = 'SourceSansPro-SemiBold';
const FONTREGULAR = 'SourceSansPro-Regular';

//COLOR COLLECTIONS
export const COLORS = {
  primary: '#e73955',
  primaryLight: '#fb7185',
  transparentPrimary: 'rgba(227, 120, 75, 0.4)',
  secondary: '#FFA133',
  secondaryLight: '#FDDED4',
  transparentSecondary: '#FFD9AD',

  //COLORS SHADES
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',

  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',

  blue: '#0064C0',
  darkBlue: '#111A2C',

  green: '#008e03',
  lightGreen: '#75ff71',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',
  white2: '#FBFBFB',

  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

//SIZES COLLECTIONS
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: '5%',

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 15,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 18,
  body4: 16,
  body5: 12,

  // app dimensions
  width,
  height,
};

//FONT STYLES COLLECTIONS
export const FONTS = {
  largeTitle: {fontFamily: FONTBLACK, fontSize: SIZES.largeTitle},
  h1: {fontFamily: FONTBOLD, fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: FONTBOLD, fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: FONTSEMIBOLD, fontSize: SIZES.h5, lineHeight: 22},
  body1: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: FONTREGULAR,
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

//CUSTOM LIBRARY THEME
//NATIVE BASE
export const NBTheme = extendTheme({
  colors: {
    primary: {
      50: '#e69eaa',
      100: '#e08997',
      200: '#e0798a',
      300: '#e0677b',
      400: '#e0586e',
      500: '#fb7185',
      600: '#de4b63',
      700: '#db3d57',
      800: '#db324e',
      900: '#db2c49',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});
//REACT NAVIGATION
export const RNTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
    background: '#fcfcfc',
  },
};

const THEME = {COLORS, SIZES, FONTS, NBTheme, RNTheme};

export default THEME;