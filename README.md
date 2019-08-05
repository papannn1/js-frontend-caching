# JS Frontend Caching

> :mega: Now Include Local Storage & Cookie!

A simple, and lightweight helper function that can help you to cache your data in your browser!

## Installation

Install the helper using [npm](https://www.npmjs.com/package/js-frontend-caching):

```bash
npm install js-frontend-caching --save
```

## Example

```js
    const js_caching = require('js-frontend-caching');

    function tell_someone(){
        console.log("I saved your name!")
    }

    var name = "Kevin";



    js_caching.init('localstorage'); //Save the cache using localstorage

    //Save Kevin with name_person as a key. After that, do tell_someone()
    js_caching.save('name_person', name, tell_someone, 5);
```

## Usage

Call the lib to your app:
```js
    const js_caching = require('js-frontend-caching');
```

Then initialize the js-frontend-caching
```js
    //This will initialize Cookie to be the Driver
    js_caching.init('cookie')
```

If you want to save the data, do the following code:
```js
    function callback_function() {
        console.log("I saved your age");
    }

    var age = 19;

    //This will put var age to the age_people key, with 5 min timeout
    js_caching.save('age_people', age, callback_function, 5);
```

If you want to retreive the data, do the following code:
```js
    function errorHandling() {
        return 19
    }

    //This will retrieve age_people and will put the value into var age
    //If age_people is not present at your cache, errorHandling will executed and will use the return value
    var age = js_caching.get('age_people', errorHandling);

```