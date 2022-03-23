const {ErrorModel} = require('../model/ResModel')
const {ErrorSchemaValidate} = require('../model/ErrorInfo')

function genValidator(validateFun) {
    async function validate(ctx, next) {
        const data = ctx.request.body
        const err = validateFun(data)
        if (err) {
            ctx.body = new ErrorModel(ErrorSchemaValidate)
            return
        }
        await next()
    }
    return validate
}

module.exports = genValidator