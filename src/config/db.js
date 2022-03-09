const {isProd} = require('../utils/env')

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    dialect: 'mysql',
    password: 'zhang5388202A',
    port: '3306',
    database: 'koa2_weibo_db'
}

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

if (isProd) {

}


module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}