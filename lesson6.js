var myMod = require('./les6module');
myMod(process.argv[2], process.argv[3], function (err, list) {
    if(err)console.log(err);
    list.forEach(function (elem) {console.log(elem);  })
})
