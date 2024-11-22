const presets = ['module:@react-native/babel-preset'];
const plugins = [];

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
        // '^react-native$': 'react-native-web',
      },
    },
  ],
  'react-native-reanimated/plugin',
 
  
);

module.exports = {
  presets,
  plugins,
};
