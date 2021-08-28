



let Date = require('./util');

let {exitsFolder,parsePath} = require('./node-common.js');

let {gitPull,gitClone} =require('./git-common')

const argv = process.argv

if (argv.length <= 2) {
    console.log("请指定目标地址!--->例如:node gitpull.js 'D:\\xxx\\xxxx' ")
    return
}
const githref = argv[2]

if (argv.length <= 3) {
  console.log("请指定脚本执行间隔时间!--->例如：60s 则输入:node gitpull.js 'D:\\xxx\\xxxx'  60")
  return
}
const looptime = argv[3]
const cloneDress = argv[4]




async function isPull() {
  let time=new Date().format("yyyy-MM-dd hh:mm:ss");
  console.log(time)
  await gitPull(githref)
  time=new Date().format("yyyy-MM-dd hh:mm:ss");
  console.log(time)
}

async function isClone(git) {
  let time=new Date().format("yyyy-MM-dd hh:mm:ss");
  console.log(time)
  await gitClone(git,cloneDress)
  time=new Date().format("yyyy-MM-dd hh:mm:ss");
  console.log(time)
}

async function toGoCloneOrPull() {
  if(await exitsFolder(githref)){
    console.log(githref)
    console.log("shifoucunzai")
    if(await exitsFolder(githref+"/.git")){
      isPull()
    }
  }else{
    let cloneHref=await parsePath(githref)
    isClone(cloneHref)
  }
}
toGoCloneOrPull()

// const timeout = setInterval(() => {
//   let time=new Date().format("yyyy-MM-dd hh:mm:ss");
//   child_process.exec(`git clone ${cloneDress}`, {cwd:githref}, function (error, stdout, stderr) {
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }else{
//       console.log(time+' '+ stdout)
//       // console.log(stdout)
//     }
// });
// }, looptime * 1000)