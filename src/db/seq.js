const Sequelize = require('requelize')
const { MYSQL_CONF } = require('../config/db')
const { isProd, isTest } = require('../utils/env')

const {database, user, password, host, dialect} = MYSQL_CONF

const conf = {
    host,
    dialect
}

if (isTest) {
    conf.logging = () => {}
}

if (isProd) {
    conf.pool = {
        max: 5, // 连接池中最大的连接数量
        min: 0, // 连接池中最小的连接数量
        idle: 10000 // 如果一个连接池10s之内没有被使用，则释放
    }
}

const req = new Sequelize(database, user, password, conf)

module.exports = req