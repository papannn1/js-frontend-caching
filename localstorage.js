module.exports.localFunction = (key, data, action) => {
    const ls = window.localStorage;

    ls.setItem(key, data);

    action()
}
