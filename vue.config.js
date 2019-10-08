const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'ca',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  configureWebpack: {
    plugins: [
      new HardSourceWebpackPlugin(),
    ],
  },
};
