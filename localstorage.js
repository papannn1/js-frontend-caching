module.exports.localFunction = (key, data, action, expire_time) => {
    const ls = window.localStorage;

    ls.setItem(key, data);

    let expire_data = {
        time: new Date().getTime(),
        expire: expire_time*60*1000
    }

    ls.setItem(`${key}_expire`, JSON.stringify(expire_data));
    action();
}
