const mongoose = require('mongoose');
const BlogSchema = require('../schemas/blogSchema');

/*通过model编译模式为模型*/
const BlogModel = mongoose.model('classify', BlogSchema);

/*导出Class模型 模块*/
module.exports = BlogModel;