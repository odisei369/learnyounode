const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let str1 = '';
let str2 = '';
let str3 = '';
http.get(url1, function (response) {
    response.on('data', function (data) {
        str1 = str1 + data;
    })
    response.on('end', function () {
        counter();
    })
});
http.get(url2, function (response) {
    response.on('data', function (data) {
        str2 = str2 + data;
    })
    response.on('end', function () {
        counter();
    })
});
http.get(url3, function (response) {
    response.on('data', function (data) {
        str3 = str3 + data;
    })
    response.on('end', function () {
        counter();
    })
});
let count = 0;
function counter()
{
    count++;
    if(count == 3){
        print();
    }
}
function print() {
    console.log(str1);
    console.log(str2);
    console.log(str3);
}