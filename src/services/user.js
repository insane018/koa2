const {User} = require('../db/model/index')
const {formatUserInfo} = require('./_format')
/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string=} password 密码
 */
async function getUserInfo(userName, password) {
    const whereOpt = {
        userName
    }
    if (password) {
        Object.assign(whereOpt, { password })
    }

    const result = User.findOne({
        attributes: ['userName', 'password', 'gender', 'city', 'picture'],
        whereOpt
    })

    if (result == null) {
        return result
    }

    return formatUserInfo(result.dataValues)
}

module.exports = {
    getUserInfo
}