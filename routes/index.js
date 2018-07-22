const router = require('koa-router')();
//引入文件读取

const readFile = require('../service/read_file/readFile');

const Student = require('../mongoose_demos/demo1');

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
});

router.get('/readFile', async (ctx, next) => {
    ctx.body = await readFile()


});

router.get('/mongoose', async (ctx, next) => {
    ctx.body = await Student
        .findStu()
        .then((doc, len, err) => {
            console.log(`result:${doc}`);
            console.log(`err:${err}`);
            console.log(`length:${len}`);
            return doc
        })
        .catch(reason => {
            console.log(reason);
            return reason
        })
});

module.exports = router;
