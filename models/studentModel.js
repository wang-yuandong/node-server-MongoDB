const mongoose = require('mongoose');
const StudentSchema = require('../schemas/studentSchema');

/*通过model编译模式为模型*/
const Student = mongoose.model('student', StudentSchema);

/*导出Student模型 模块*/
module.exports = Student;