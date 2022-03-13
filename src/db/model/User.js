const Sequelize = require('../seq')
const { STRING, DECIMAL } = require('../types')

const User = Sequelize.define('user', {

    userName: {
        type: STRING,
        allowNum: false,
        unique: true
    },
    password: {
        type: STRING,
        allowNum: false,
    },
    nickName: {
        type: STRING,
        allowNum: false,
    },
    gender: {
        type: DECIMAL,
        allowNum: false,
        defaultValue: 3
    },
    picture: {
        type: STRING,
        allowNum: false,
    },
    city: {
        type: STRING,
        allowNum: false,
    }
})

module.exports = User