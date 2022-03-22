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

/**
 * 
 * @param {Object} param0 创建账户参数
 * @param {string} param0.userName 账户
 * @param {string} param0.password 密码
 * @param {number=} param0.gender 性别
 * @param {string=} param0.nickname 昵称
 */
async function createUser({userName, password, gender = 3, nickName}) {
    const result = User.create({
        userName,
        password,
        nickName: nickName ? nickName : userName,
        gender
    })
    return result.dataValues
}

module.exports = {
    getUserInfo,
    createUser
}