const {localFunction} = require('./localstorage')

var DRIVER = "";


const LOCAL_STORAGE = 'localstorage';
const SESSION_STORAGE = 'session';
const COOKIE = 'cookie'

const MINUTE = 60

module.exports.init = (driver = 'localstorage', expire = 5) => {
    DRIVER = driver;
    EXPIRE_TIME = MINUTE * expire;
}

module.exports.save = (key, data, action, expire_time = 5) => {
    switch(DRIVER){
        case LOCAL_STORAGE:
            localFunction(key, data, action, expire_time)
            break;
        case SESSION_STORAGE:
            break;
        case COOKIE:
            break;
        default:
            //Cookie
            break;
    }
}

module.exports.get = (key, errorHandling) => {
    
}






