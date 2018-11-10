const importExternalHelpers = require('./plugins/babelPluginImportExternalHelpers')

const getPresets = () => [
  ['@babel/preset-env', { targets: { browsers: ['ie >= 11'] }, modules: false }],
  ['@babel/preset-react', { pragma: 'h' }]
]

const getPlugins = (modules, forProduction = true, logoutHelpers) => {
  const plugins = [
    [importExternalHelpers, {
      modules,
      root: 'src',
      path: './utils/babelHelpers.js',
      logoutHelpers,
      removeExportsInitialization: true,
    }]
  ]
  if (modules === 'commonjs') {
    plugins.push(['@babel/plugin-transform-modules-commonjs', { loose: true }])
  }
  if (forProduction) {
    plugins.push(['babel-plugin-transform-react-remove-prop-types', { removeImport: true }])
  }
  return plugins
}

module.exports = api => {
  api.assertVersion(7)
  api.cache.invalidate(() => process.env.NODE_ENV)
  const presets = getPresets()
  return {
    exclude: '/**/node_modules/**',
    env: {
      production: { presets, plugins: getPlugins('commonjs') },
      es: { presets, plugins: getPlugins(false) },
      test: { presets, plugins: getPlugins('commonjs', false) },
      helpers: { presets, plugins: getPlugins('commonjs', false, true) }
    }
  }
}
