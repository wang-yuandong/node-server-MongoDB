const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*定义数据模式*/
const StudentSchema = new mongoose.Schema({
    name: String,
    classId: {
        type: Schema.Types.ObjectId,
        ref: 'class'
    },
    age: Number,
    number: Number,
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
module.exports = StudentSchema;