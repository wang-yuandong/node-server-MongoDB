const ClassModel = require('../models/classifyModel');

/**
 * 保存类别方法
 * @param data
 */
exports.saveClassify = data => {
    ClassModel.create(data, function (err, doc) {
        if (err) {
            console.log(err)
        }
        console.log(doc)
    });
};

/**
 * 获取所有类型
 * @param data
 * @returns {Promise<any | never>}
 */
exports.getClassify = data => {
    return ClassModel
        .find(data)
        .then((doc) => {
            return doc
        })
        .catch(reason => {
            return reason
        })
};

/**
 * 修改类型
 * @param data
 */
exports.updateClassify = data => {
};

/**
 * 删除类型
 * @param data
 */
exports.deleteClassify = data => {

};