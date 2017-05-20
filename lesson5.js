var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    if(err){console.log(err);}
    if(process.argv[3])
    {
        list.filter(function(elem)
        {
            if(path.extname(elem) == ("." + process.argv[3])){
                console.log(elem);
                return true;}
            return false;
        })
    }
});