const Ftp = require('./Ftp')

const HOST = '49.51.233.235'
const USERNAME = 'root'
const PASSWORD = 'tR6oxLD93i7cg0oD'
const PORT = 22

const ftp = new Ftp()

ftp.connect({
  host: HOST,
  username: USERNAME,
  password: PASSWORD,
  port: PORT
}).then(async() => {
  const remotePath = '/home/node/aozhou-pc/'
  await ftp.remove(remotePath, ['.nuxt', 'server'])
  await ftp.uploadDir('.nuxt', remotePath + '.nuxt')
  await ftp.uploadDir('server', remotePath + 'server')
  await ftp.uploadDir('static', remotePath + 'static')
  await ftp.uploadFile('pm2.json', remotePath + 'pm2.json')
  await ftp.uploadFile('nuxt.config.js', remotePath + 'nuxt.config.js')
  await ftp.uploadFile('package.json', remotePath + 'package.json')
  ftp.end()
}).catch((err) => {
  console.log(err)
})
