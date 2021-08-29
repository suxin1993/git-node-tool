/*
 * @Author: your name
 * @Date: 2021-08-28 18:06:15
 * @LastEditTime: 2021-08-28 18:07:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /git-node-tool/test-pull.js
 */
let Date = require('./date');

let { exitsFolder, parsePath,pathBasename,pathBasefilename,pathJoinDir } = require('./node-common.js');

let { gitPull, gitClone } = require('./git-common')

const argv = process.argv

let githref = argv[2]
const cloneDress = argv[3]

const looptime = argv[4]
const cloneFilder = pathBasefilename(cloneDress)

githref=pathJoinDir(githref,cloneFilder)




async function isPull() {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time)
    await gitPull(githref)
    time = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time)
}

async function isClone(git) {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time)
    await gitClone(git, cloneDress)
    time = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time)
}

async function toGoCloneOrPull() {
    if (await exitsFolder(githref)) {
        if (await exitsFolder(githref + "/.git")) {
            isPull()
        }
    } else {
        let cloneHref = await parsePath(githref)
        isClone(cloneHref)
    }
}
toGoCloneOrPull()

// const timeout = setInterval(() => {
//   let time=new Date().format("yyyy-MM-dd hh:mm:ss");
//    isPull()
// }, looptime * 1000)