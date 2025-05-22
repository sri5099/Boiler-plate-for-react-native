import {lightColors, darkColors, Colors} from './colors';
import {fonts, Fonts} from './fonts';
import {fontSizes, FontSizes} from './fontSizes';

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
}

export const lightTheme: Theme = {
  colors: lightColors,
  fonts,
  fontSizes,
};

export const darkTheme: Theme = {
  colors: darkColors,
  fonts,
  fontSizes,
};

