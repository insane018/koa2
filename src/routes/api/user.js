const router = require('koa-router')()
const {isExist} = require('../../controller/user')

router.prefix('/api/user')

router.post('/register', async (ctx, next) => {

})

router.post('/isExist', async (ctx, next) => {
    const {userName} = ctx.request.body
    console.log(ctx.request)
    console.log('11', userName)
    ctx.body = await isExist(userName)
    // await 
})

module.exports = router