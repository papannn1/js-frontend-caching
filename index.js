const local = require('./localstorage')
const c = require('./cookie');

var DRIVER = "";


const LOCAL_STORAGE = 'localstorage';
const COOKIE = 'cookie'

const MINUTE = 60

module.exports.init = (driver = 'localstorage') => {
    DRIVER = driver;
    // EXPIRE_TIME = MINUTE * expire;
}

module.exports.save = (key, data, action, expire_time = 5) => {
    switch(DRIVER){
        case LOCAL_STORAGE:
            local.saveFunction(key, data, action, expire_time);
            break;
        case COOKIE:
            c.saveFunction(key, data, action, expire_time);
            break;
        default:
            //Cookie
            break;
    }
}

module.exports.get = (key, errorHandling) => {
    switch(DRIVER){
        case LOCAL_STORAGE:
            return local.get(key, errorHandling);
        case COOKIE:
            break;
        default:
            //Cookie
            break;
    }
}






