const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(function callback(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var parsed = url.parse(request.url, true);
    var date = new Date(parsed.query.iso);
    var json;
    console.log(date);
    if (parsed.pathname === '/api/parsetime'){
        json = JSON.stringify({ hour: date.getHours(),
                                minute: date.getMinutes(),
                                second: date.getSeconds()});
    }
    if (parsed.pathname === '/api/unixtime')
    {
        json = JSON.stringify({unixtime: +date});

    }
    if(!json){
        response.writeHead(404);
    }
    response.end(json);
});
server.listen(port);