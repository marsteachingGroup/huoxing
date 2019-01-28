let packageVersion = require('../package.json').version
// 生产环境打上当前的年月日天时，如果是大于55分钟，则打个下一个小时
let d = new Date()
let h = d.getHours()
let m = d.getMinutes()
if (m > 55) {
  d.setHours(h + 1)
}
d.setMinutes(0, 0, 0)
let str2 = function (n) {
  return (n < 10 ? '0' : '') + n
}
packageVersion += '.' + d.getFullYear() + str2(d.getMonth() + 1) + str2(d.getDate()) + str2(d.getHours())

// 尝试获取git用户名，保存谁打的包
let packageAuthor = 'UNKNOW'
try {
  packageAuthor = require('child_process').execSync('git config user.name', {encoding: 'utf8'}).replace(/[\r\n]/g, '') || 'UNKNOW'
} catch (e) {
  console.log(e)
}
let result = {
  PACKAGE_AUTHOR: '"' + packageAuthor + '"',
  NODE_ENV: '"production"',
  PACKAGE_VERSION: '"' + packageVersion + '"'
}

module.exports = result
