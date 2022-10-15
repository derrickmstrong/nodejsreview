// Operation System (OS)

const os = require('os'); // Default module

const currentOS = {
    Uptime: os.uptime(),
    Homedir: os.homedir(),
    Hostname: os.hostname(),
    Type: os.type(),
    UserInfo: os.userInfo(),
    Version: os.version(),
    Release: os.release(),
    TotalMemory: os.totalmem(),
    FreeMemory: os.freemem(),
}

console.log('currentOS:', currentOS);
