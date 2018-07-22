const mongoose = require('mongoose');
const ClassSchema = require('../schemas/classSchema');

/*通过model编译模式为模型*/
const Class = mongoose.model('class', ClassSchema);

/*导出Class模型 模块*/
module.exports = Class;