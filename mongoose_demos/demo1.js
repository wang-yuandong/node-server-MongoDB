const mongoose = require('mongoose');

const Class = require('../models/classModel');
const Student = require('../models/studentModel');

/*
 查询
 */

exports.findStu = () => {
    return Student
        .findOne({})
        .populate('classId', 'name')
}
/*.then((doc, len, err) => {
    console.log(`result:${doc}`);
    console.log(`err:${err}`);
    console.log(`length:${len}`);
    mongoose.disconnect()
})
.catch(reason => {
    mongoose.disconnect()
})*/
