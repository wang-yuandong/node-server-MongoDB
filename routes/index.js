const router = require('koa-router')();

//引入文件读取
const readFile = require('../services/read_file/readFile');

router.prefix('/');

router.get('/readFile', async (ctx, next) => {
    ctx.body = {
        content: await readFile()
    }

});

module.exports = router;
