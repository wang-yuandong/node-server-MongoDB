const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * blog表
 */
const BlogSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    typeId: {
        type: Schema.Types.ObjectId,
        ref: ''
    },
    title: String,
    abstract: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    }
});

module.exports = BlogSchema;