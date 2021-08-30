/*
 * @Author: your name
 * @Date: 2021-08-28 18:06:15
 * @LastEditTime: 2021-08-30 19:46:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /git-node-tool/test-pull.js
 */
let Date = require('./date');

let { exitsFolder, parsePath, pathBasename, pathBasefilename, pathJoinDir, writeFileAsync } = require('./node-common.js');

let { gitPull, gitClone, gitLog, gitLogLast } = require('./git-common')

const argv = process.argv

let githref = argv[2]
const cloneDress = argv[3]

const looptime = argv[4]
const cloneFilder = pathBasefilename(cloneDress)

githref = pathJoinDir(githref, cloneFilder)




async function isPull() {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time)
    await gitPull(githref)
    // let log = await gitLog(githref)
    let log = await gitLogLast(githref)
    console.log(log)
    log = log.split("\n")
    let logObject = {}
    const splitList = ["commit ", "Author: ", "Date:   "]
    const logObjectKey = ["commit", "Author", "Date", "desc"]
    logObject[logObjectKey[3]] = log[4]
    log.forEach(element => {
        splitList.forEach((e, index) => {
            element.indexOf(e) !== -1 ? logObject[logObjectKey[index]] = element.substring(element.indexOf(e) + e.length, element.length) : ''
        })
    })
    logObject.Date = new Date(logObject.Date).format("yyyy-MM-dd hh:mm:ss")
    let logPath = pathJoinDir(process.cwd(), `${cloneFilder}.json`)
    await writeFileAsync(logPath, JSON.stringify(logObject))
    // 如何对字符串进行行数读取
    // 写入文件
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