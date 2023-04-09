module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.json', '.svg', '.jpeg'],
        root: ['./src/'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          store: './src/store',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
