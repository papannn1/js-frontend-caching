const ls = window.localStorage;
module.exports.saveFunction = (key, data, action, expire_time) => {
    

    ls.setItem(key, data);

    const expire_data = {
        time: new Date().getTime(),
        expire_time: expire_time * 60 * 1000
    }

    ls.setItem(`${key}_expire`, JSON.stringify(expire_data));
    action();
}

const DEFAULT_EXPIRE_TIME = 5 * 60 * 1000;

module.exports.get = (key, catchFunction) => {
    const res = ls.getItem(key);
    if (!res){
        
        const expire_data = {
            time: new Date().getTime(),
            expire_time: DEFAULT_EXPIRE_TIME
        }
        const result = catchFunction()
        ls.setItem(key, result);
        ls.setItem(`${key}_expire`, JSON.stringify(expire_data));

        return result;
    }else{
        const expire = JSON.parse(ls.getItem(`${key}_expire`));
        const expire_data = {
            time: new Date().getTime(),
            expire_time: expire.expire_time
        }
        const now = new Date().getTime();
        
        const timeDiff = now - expire.time;
        if(timeDiff > expire.expire_time){
            console.log(timeDiff, expire.expire_time)

            ls.removeItem(`${key}_expire`);
            ls.removeItem(key)

            const result = catchFunction();
            ls.setItem(key, result);
            ls.setItem(`${key}_expire`, JSON.stringify(expire_data));

            return result;
        }else{
            return res;
        }
    }
}