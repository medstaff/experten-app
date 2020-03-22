const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  // https://github.com/react-native-web-community/react-native-web-maps
  // with syntax from official docs https://docs.expo.io/versions/latest/guides/customizing-webpack/
  config.resolve.alias['react-native-maps'] = 'react-native-web-maps';

  return config;
};
