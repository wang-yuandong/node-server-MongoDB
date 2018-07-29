const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * 分类表
 */
const ClassifySchema = new mongoose.Schema({
    name: String,
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'classify'
    }
});

module.exports = ClassifySchema;