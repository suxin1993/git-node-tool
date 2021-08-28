let fs = require('fs');
let path = require("path")


// 传入文件夹的路径看是否存在，存在不用管，不存在则直接创建文件夹
/**
 * 判断文件夹是否存在，不存在可以直接创建
 * @param reaPath {String} 文件路径
 * @returns {Promise<boolean>}
 */
exports.exitsFolder = async function (reaPath) {
    try {
       let abc= await fs.promises.stat(reaPath)
       return true
    } catch (e) {
        return false
        // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
        // await fs.promises.mkdir(absPath, {recursive: true})
    }
 }


/**
 * 获取路径
 * @param reaPath {String} 文件路径
 */
exports.parsePath = async function (reaPath) {
       let abc= path.join(reaPath,'../')
        console.log(abc)
        return abc
 }


 

