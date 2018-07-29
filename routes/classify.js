const router = require('koa-router')();
const classify = require('../services/classifyService');

router.prefix('/');

router.get('/getClassify', async (ctx, next) => {
    // ctx.body = await classify.getClassify({})
    ctx.body = ctx
});

router.post('/saveClassify', async (ctx, next) => {
    ctx.body = await classify.saveClassify(ctx.request.body)
});

router.post('/updateClassify', async (ctx, next) => {
    ctx.body = await classify.updateClassify(ctx.request.body)
});

router.post('/deleteClassify', async (ctx, next) => {
    ctx.body = await classify.deleteClassify(ctx.request.body)
});

module.exports = router;
