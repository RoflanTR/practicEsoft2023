var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('user connect')
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(3001, function () {
    console.log('listennnn')
})