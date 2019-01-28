let packageVersion = require('../package.json').version
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

let result = {
  NODE_ENV: '"development"',
  PACKAGE_VERSION: '"' + packageVersion + '"'
}
module.exports = merge(prodEnv, result)
