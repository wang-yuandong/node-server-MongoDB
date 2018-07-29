const mongoose = require('mongoose');
const ClassifySchema = require('../schemas/classifySchema');

/*通过model编译模式为模型*/
const ClassifyModel = mongoose.model('classify', ClassifySchema);

/*导出Class模型 模块*/
module.exports = ClassifyModel;