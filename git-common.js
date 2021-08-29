/*
 * @Author: your name
 * @Date: 2021-08-28 18:06:15
 * @LastEditTime: 2021-08-28 18:08:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /git-node-tool/git-common.js
 */
const util = require('util');
const exec = util. promisify(require('child_process').exec);
const spawn = util. promisify(require('child_process').spawn); 



/**
 * git clone  
 * @param filePath {String} 文件路径
 * @param cloneDress {String} 克隆地址
 * @returns stdout
 */
exports.gitClone = async function(filePath, cloneDress, ) {
    try {
        const { stdout, stderr } = await exec(`git clone ${cloneDress}`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        console.log(e);
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
        const { stdout , stderr } = await exec(`git pull`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        console.log(e);
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
        const { stdout , stderr  } = await exec(`git add .`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        console.log(e);
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
        const { stdout , stderr  } = await exec(`git push`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        console.log(e);
        return false
    }
}

/**
 * git commit
 * @param filePath {String} 文件路径
 * @param name {String} 提交的commiit内容
 * @returns stdout
 */
exports.gitCommit = async function(filePath,name) {
    try {
        const { stdout , stderr  } = await exec(`git commit -m"${name}"`, { cwd: filePath });
        console.log(stdout);
        return stdout
    } catch (e) {
        console.log(e);
        return false
    }
}

/**
 * git log
 * @param filePath {String} 文件路径
 * @param name {String} 提交的commiit内容
 * @returns stdout
 */
 exports.gitLog = async function(filePath) {
    try {
        const { stdout  , stderr } = await exec(`git log`, { cwd: filePath });
        return stdout
    } catch (e) {
        console.error(e)
        return false
    }
}

/**
 * git log
 * @param filePath {String} 文件路径
 * @param name {String} 提交的commiit内容
 * @returns stdout
 */
 exports.gitLogLast = async function(filePath) {
    try {
        // 获取最近一次的提交的commit id git rev-parse HEAD
        // `git show 不加 --stat 查看最后一次提价详情  
        // `git show commit id ，显示某一次commit的详情
        const { stdout  , stderr } = await exec(`git show --stat`, { cwd: filePath });
        return stdout
    } catch (e) {
        console.error(e)
        return false
    }
}