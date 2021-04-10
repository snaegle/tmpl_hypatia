const Encore = require('@symfony/webpack-encore');
const StyleLintPlugin = require('stylelint-webpack-plugin');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath('Resources/Public/')
  // .cleanupOutputBeforeBuild()
  // public path used by the web server to access the output path
  .setPublicPath('/typo3conf/ext/tmpl_hypatia/Resources/Public/')
  // only needed for CDN's or sub-directory deploy
  // .setManifestKeyPrefix('build/')

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addEntry('hypatia', './Resources/Private/JavaScript/hypatia.js')
  .addEntry('goeml', './Resources/Private/JavaScript/goeml.js')

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(false)

  .enableSassLoader()
  .enablePostCssLoader()
  // uncomment if you're having problems with a jQuery plugin
  .autoProvidejQuery()
  //.addPlugin(new StyleLintPlugin({
  //  files: './Resources/Private/Scss/*.scss',
  //  fix: true,
  //}));

if (!Encore.isProduction()) {
  Encore.enableEslintLoader((options) => {
    options.fix = true;
  });
}

module.exports = Encore.getWebpackConfig();
