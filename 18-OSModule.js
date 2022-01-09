
const os = require('os')

//1 info about current user
const user = os.userInfo()
// console.log(user)

//2 returns the system uptime in seconds
console.log(`System up time is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalM:os.totalmem(),
    totalFM:os.freemem(),
}
console.log(currentOS)