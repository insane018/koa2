const {DEFAULT_PICTURE} = require('../config/constant')
/**
 * 兼容用户信息图片为空的情况
 * @param {Object} obj 
 */
function _formatUserPicture(obj) {
    if (!obj.picture) {
        obj.picture = DEFAULT_PICTURE
    }
    return obj
}

/**
 * 格式化用户信息
 * @param {Array | Object} list 用户信息列表或对象
 */
function formatUserInfo(list) {
    if (list == null) {
        return list
    }

    if (list instanceof Array) {
        list.map(_formatUserPicture)
    }

    return _formatUserPicture(list)
}

module.exports = {
    formatUserInfo
}