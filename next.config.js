/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'
process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD = '1'

const plugins = [
  withTamagui({
    config: './tamagui.config.js',
    components: ['tamagui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: true,
    // experiment - reduced bundle size react-native-web
    useReactNativeWebLite: false,
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      disableStaticImages: true,
    },
    transpilePackages: [
      'react-native-web',
    ],
    experimental: {
      // optimizeCss: true,
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
