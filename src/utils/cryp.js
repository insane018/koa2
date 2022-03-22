const crypto = require('crypto')

const CRYPTO_SECRET_KEY = 'SD123ui_sd$@'
/**
 * md5加密
 * @param {string} content 加密内容
 */
function _md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCrypto(content) {
    let str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
    return _md5(str)
}

module.exports = doCrypto