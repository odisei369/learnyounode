const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    let string = '';
    response.on('data', function (data) {
        string = string + data.toString();
    })
    response.on('end', function () {
        console.log(string.length);
        console.log(string);
    })
    response.on('err', function (data) {
        console.error(data.toString());
    })

}).on('err', function (err) {
    console.log(err);
})