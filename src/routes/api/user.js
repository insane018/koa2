const router = require('koa-router')()
const {isExist, register} = require('../../controller/user')
const genValidator = require('../../middlewares/validator')
const validateUser = require('../../validator/user')

router.prefix('/api/user')



router.post('/registerddd', genValidator(validateUser), async (ctx, next) => {
    const {userName, password, gender} = ctx.request.body
    
    ctx.body = await register({
        userName,
        password,
        gender
    })
})

router.post('/isExist', async (ctx, next) => {
    const {userName} = ctx.request.body
    console.log(ctx.request)
    console.log('11', userName)
    console.log('1', await isExist(userName))
    ctx.body = await isExist(userName)
    // await 
})

module.exports = router