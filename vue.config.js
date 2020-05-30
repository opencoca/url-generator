const version = require('./package.json').version
const now = Math.round(Date.now() / 6000).toString(36)

process.env.VUE_APP_VERSION = `${version}-${now}`

const publicPath = process.env.NODE_ENV === 'production'
  ? '/gravatar-url-generator/'
  : '/'

const precacheSw = `${publicPath}precache-sw.js`

module.exports = {
  devServer: {
        disableHostCheck: true
  },
  publicPath,
  pwa: {
    name: 'Teaching URL Generator',
    themeColor: '#000086',
    msTileColor: '#000086',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxOptions: {
      importScripts: [precacheSw],
      skipWaiting: true
    }
  }
}
