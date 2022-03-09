/**
 * @description sequlize同步数据库
 */

const req = require('./seq')

// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth err')
})

// 执行同步
seq.sync({force: true}).then(() => {
    console.log('sync ok')
    process.exit()
})