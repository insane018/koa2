const {getUserInfo, createUser} = require('../services/user')
const {SuccessModel, ErrorModel} = require('../model/ResModel')
const {ErrorUserNameIsExist} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')
/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
    let userInfo = await getUserInfo(userName)
    if (userInfo) {
        return new ErrorModel(ErrorUserNameIsExist)
    }
    return new SuccessModel()
}

/**
 * 注册用户
 * @param {Object} param 注册参数
 * @param {string} param.userName 注册参数
 * @param {string} param.password 注册密码
 * @param {number} param.gender 用户性别
 */
async function register({userName, password, gender}) {
    let userInfo = await getUserInfo(userName)
    if (userInfo) {
        return new ErrorModel(ErrorUserNameIsExist)
    }
    try {
        await createUser({
            userName,
            password: doCrypto(password),
            gender
        })
        console.log(new SuccessModel())
        return new SuccessModel()
    } catch (err) {
        console.error(err.message, err.stack)
    }
}

module.exports = {
    isExist,
    register
}