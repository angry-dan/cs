const _ = require('lodash');
const config = require('deeson-webpack-config-starter');

// this should be the real asset path in drupal
// so something like /sites/all/themes/blah_blah/assets
config.output.publicPath = '/assets/';

// this is how you get auto reload happening
// for your pages without adding them to ./src/app.js
config.entry.pages = './pages/index.js';

_.find(config.module.loaders, {loader: 'babel-loader'}).test = /\.jsx?$/;
_.find(config.module.loaders, {loader: 'babel-loader'}).query.presets = ['es2015', 'react'];

_.set(config, 'resolve.extensions', ['', '.js', '.jsx']);

config.devServer.host = '0.0.0.0';

module.exports = config;
