const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        msg: '你好',
        isMe: false,
        blogList: [
            {
                id: 1,
                title: 'aaa'
            },
            {
                id: 2,
                title: 'bbb'
            },
            {
                id: 3,
                title: 'ccc' 
            }
        ]
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    throw Error('23')
    // const session = ctx.session
    // if (session.viewNum === undefined) {
    //     session.viewNum = 0
    // }
    // session.viewNum++
    ctx.body = {
        title: 'koa2 json',
        // viewNum: session.viewNum
    }
})

module.exports = router
