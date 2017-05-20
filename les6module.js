var fs = require("fs");
var path = require('path');

module.exports = function (dir, extension, callback) {
    var dotExt = '.' + extension;
    fs.readdir(dir, function (err, list) {
        if(err){return callback(err);}
        if(extension)
        {

            var newList = list.filter(function (elem)
            {
                return path.extname(elem) == dotExt;
            })
            return callback(null, newList);
        }
        return callback(null, list);
    })

}