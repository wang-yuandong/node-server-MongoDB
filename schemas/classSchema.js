const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*定义数据模式*/
const ClassSchema = new mongoose.Schema({
    name: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
    /*更新时间的*/
});
module.exports = ClassSchema;