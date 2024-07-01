const express = require('express')
const path = require('path')
const session = require('express-session')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const routerHome = require('./routes/home')
const routerAuth = require('./routes/auth')
const routerHistory = require('./routes/history')
const routerActivePlayer = require('./routes/activePlayer')
const app = express()



var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function (socket) {
  console.log('user connect')
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})
io.on('connection', function (socket) {
  socket.on('id player invite', (msg) => {
      io.emit('id player invite', msg);
  });
})
io.on('connection', function (socket) {
  socket.on('count step', (msg) => {
      io.emit('count step', msg);
  });
})
io.on('connection', function (socket) {
  socket.on('reload', (msg) => {
    io.emit('reload', msg);
});
})
io.on('connection', function (socket) {
  socket.on('exit', (msg) => {
    io.emit('exit', msg);
});
})
io.on('connection', function (socket) {
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg);
});
})
io.on('connection', function (socket) {
  socket.on('id player connect', (msg) => {
    let x = msg['userName']
      io.emit('id player connect', x);
      
  });
})
http.listen(3000, function () {
  console.log('listennnn')
})





const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false
}))

app.use('/history', routerHistory)
app.use('/auth', routerAuth)
app.use('/', routerHome)
app.use('/activePlayers', routerActivePlayer)

const PORT = process.env.PORT || 3001

let connect = null;
global.DB = async function () {
  if (connect == null || connect.state == 'disconnected') {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tic-tac-toe'
    });

    return new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          console.error('Ошибка подключения к базе данных: ' + err.stack);
          reject(err);
          return;
        }
        console.log('Подключение к базе данных успешно установлено');
        connect = connection;
        resolve(connection);
      });
    });
  }
  else {
    return connect;
  }
}






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})