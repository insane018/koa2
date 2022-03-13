const {getUserInfo} = require('../services/user')
const {SuccessModel, ErrorModel} = require('../model/ResModel')
const {ErrorUserNameIsExist} = require('../model/ErrorInfo')
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

module.exports = {
    isExist
}