const mongoose = require('mongoose');

const db = require('../db/connect');
db.start();

const Class = require('../models/classModel');
const Student = require('../models/studentModel');
/*
插入
 */
/*const classOne = new Class({
    name: '一（2）班'
});

classOne
    .save()
    .then((doc, len, err) => {
        console.log(`result:${doc}`);
        console.log(`err:${err}`);
        console.log(`length:${len}`)
    })
    .catch(reason => {
        console.log(reason)
    });*/

Class.findOne(function (error, result) {
    console.log(`error:${error}`);
    console.log(`result:${result}`);
    const id = result._id;
    console.log(id);
    Student.create({
        name: '小明',
        classId: result._id,
        age: 6,
        number: 37
    }, function (err, doc) {
        if (err) return console.log(err);
        console.log(doc)
    });
});
