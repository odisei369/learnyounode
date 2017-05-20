const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];
var server = net.createServer(function (socket) {
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end('\n');
})
server.listen(port);