const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('数据库成功连接到：mongodb://127.0.0.1/test')
    }
});
