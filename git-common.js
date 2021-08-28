/*
 * @Author: your name
 * @Date: 2021-08-28 18:06:15
 * @LastEditTime: 2021-08-28 18:08:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /git-node-tool/git-common.js
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);



/**
 * git clone  
 * @param filePath {String} 文件路径
 * @param cloneDress {String} 克隆地址
 * @returns stdout
 */
exports.gitClone = async function(filePath, cloneDress, ) {
    try {
        const { stdout } = await exec(`git clone ${cloneDress}`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        return false
    }
}


/**
 * git pull
 * @param filePath {String} 文件路径
 * @returns stdout
 */
exports.gitPull = async function(filePath) {
    try {
        const { stdout } = await exec(`git pull`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        return false
    }
}


/**
 * git add
 * @param filePath {String} 文件路径
 * @returns stdout
 */
exports.gitAdd = async function(filePath) {
    try {
        const { stdout } = await exec(`git add .`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        return false
    }
}


/**
 * git push
 * @param filePath {String} 文件路径
 * @returns stdout
 */
exports.gitPush = async function(filePath) {
    try {
        const { stdout } = await exec(`git push`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        return false
    }
}

/**
 * git commit
 * @param filePath {String} 文件路径
 * @param name {String} 提交的commiit内容
 * @returns stdout
 */
exports.gitCommit = async function(filePath) {
    try {
        const { stdout } = await exec(`git commit -m"${name}"`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        return false
    }
}