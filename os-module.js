//OS module
const os = require('os')

const user = os.userInfo()
console.log(user) // { uid: 501, gid: 20, username: 'michael', homedir:.......

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

//system uptimes
console.log(`uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
currentOS.usedMemPercentage = (currentOS.totalMem - currentOS.freeMem)/currentOS.totalMem * 100