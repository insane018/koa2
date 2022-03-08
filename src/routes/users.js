const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/:username', function (ctx, next) {
  const { username } = ctx.params
  ctx.body = {
    title: 'haha',
    username
  }
})

module.exports = router
