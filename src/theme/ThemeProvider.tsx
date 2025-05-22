import React, {createContext, useContext, useMemo} from 'react';
import {
  Appearance,
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from 'react-native';
import {Theme, lightTheme, darkTheme} from './index';

const ThemeContext = createContext<Theme>(lightTheme);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const systemScheme: ColorSchemeName = _useColorScheme();

  const scheme = systemScheme ?? Appearance.getColorScheme() ?? 'light';

  const theme = useMemo<Theme>(
    () => (scheme === 'dark' ? darkTheme : lightTheme),
    [scheme],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};
