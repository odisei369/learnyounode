var fs = require('fs');
var buf = fs.readFile(process.argv[2], function (err, buf) {
    var str = buf.toString();
    console.log(str.split('\n').length-1);
});