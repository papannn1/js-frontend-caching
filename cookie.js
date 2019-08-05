module.exports.saveFunction = (key, data, action, time_expire) => {

    var c = document.cookie;
    var date = new Date();
    date.setTime(date.getTime + time_expire*60*1000);
    var final_data = ""
    
    final_data = JSON.stringify(data);

    c = `${key}=${final_data}; expires=${date.toUTCString()};`

    action();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const DEFAULT_TIME_EXPIRE = 5 * 60 * 1000;

module.exports.get = (key, catchFunction) => {
    
    const res = getCookie(key);
    var c = document.cookie;


    if (!res){
        const data = catchFunction();
        const date = new Date();
        date.setTime(date.getTime() + DEFAULT_TIME_EXPIRE);
        c = `${key}=${JSON.stringify(key)}; expires=${date.toUTCString()};`;
        return JSON.parse(getCookie(key));
    }else{
        return JSON.parse(getCookie(key));
    }
}