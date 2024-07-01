var startTime = Date.now();
var running = 1;
let field = document.querySelectorAll('.tail')
let count = 1;
var board = [
    0, //tail 0
    0, //tail 1
    0, //tail 2
    0, //tail 3
    0, //tail 4
    0, //tail 5
    0, //tail 6
    0, //tail 7
    0  //tail 8
];
let _host = (window.location.href)[32] ?  true : false;

/*Изменение стилей при игре оффлайн */
document.querySelector('.info-players').style.height = '170px';
document.querySelector('.list-player').style.gap = '30px';
/*Запуск новой игры */
document.getElementById('new-game').addEventListener('click', () => {
    location.reload();
})
socket.on('count step', function (msg) {
    count = msg;
})
/*Игровое поле */
for (let index = 0; index < field.length; index++) {
    field[index].addEventListener('click', () => {
        if (field[index].classList.contains('tail-cross') || field[index].classList.contains('tail-zero')) {
        }
        else {
            if (count == 1 && _host) {
                field[index].classList.add('tail-cross')
                count++;
                socket.emit('count step', count);
                board[index] = '1';
                if (checkWin(board) == 1 || checkWin(board) == 2 || checkWin(board) == 3) {
                }
                else {
                    document.querySelector('.status__p').textContent = document.getElementById("player__name2").textContent;
                    document.querySelector('.status-img img').src = '/assets/img/Zero.svg'
                }
            }
            else if(count==2 && !_host) {
                field[index].classList.add('tail-zero')
                count--;
                socket.emit('count step', count);
                board[index] = '2';
                if (checkWin(board) == 1 || checkWin(board) == 2 || checkWin(board) == 3) {
                }
                else {
                    document.querySelector('.status__p').textContent = document.getElementById("player__name1").textContent;
                    document.querySelector('.status-img img').src = '/assets/img/Union.svg'
                }

            }
        }
        /*Проверка на победу */
        if (checkWin(board) == 1) {
            pauseStopwatch();
            document.querySelector('.popup').style.display = 'flex';
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.popup__winner').textContent = document.getElementById('player__name1').textContent + " Победил!";
        }
        else if (checkWin(board) == 2) {
            pauseStopwatch()
            document.querySelector('.popup').style.display = 'flex';
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.popup__winner').textContent = document.getElementById('player__name2').textContent + " Победил!";
        }
        else if (checkWin(board) == 3) {
            pauseStopwatch()
            document.querySelector('.popup').style.display = 'flex';
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.popup__winner').textContent = "Ничья";
        }

    })
}





/*Функция проверки игрового поля */
function checkWin(board) {
    // Проверка горизонталей и вертикалей
    for (var i = 0; i < 3; i++) {
        var row = i * 3;
        if (board[row] === board[row + 1] && board[row + 1] === board[row + 2] && board[row] !== 0) {
            if (field[row].classList.contains('tail-cross') && field[row + 1].classList.contains('tail-cross') && field[row + 2].classList.contains('tail-cross')) {
                field[row].style.backgroundImage = "url(/assets/img/crossWin.svg)"
                field[row + 1].style.backgroundImage = "url(/assets/img/crossWin.svg)"
                field[row + 2].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            }
            else if (field[row].classList.contains('tail-zero') && field[row + 1].classList.contains('tail-zero') && field[row + 2].classList.contains('tail-zero')) {
                field[row].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
                field[row + 1].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
                field[row + 2].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            }
            return board[row];
        }
        if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] !== 0) {
            if (field[i].classList.contains('tail-cross') && field[i + 3].classList.contains('tail-cross') && field[i + 6].classList.contains('tail-cross')) {
                field[i].style.backgroundImage = "url(/assets/img/crossWin.svg)"
                field[i + 3].style.backgroundImage = "url(/assets/img/crossWin.svg)"
                field[i + 6].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            }
            else if (field[i].classList.contains('tail-zero') && field[i + 3].classList.contains('tail-zero') && field[i + 6].classList.contains('tail-zero')) {
                field[i].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
                field[i + 3].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
                field[i + 6].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            }
            return board[i];
        }
    }
    // Проверка диагоналей
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== 0) {
        if (field[0].classList.contains('tail-cross') && field[4].classList.contains('tail-cross') && field[8].classList.contains('tail-cross')) {
            field[0].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            field[4].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            field[8].style.backgroundImage = "url(/assets/img/crossWin.svg)"
        }
        else if (field[0].classList.contains('tail-zero') && field[4].classList.contains('tail-zero') && field[8].classList.contains('tail-zero')) {
            field[0].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            field[4].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            field[8].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
        }
        return board[0];
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== 0) {
        if (field[2].classList.contains('tail-cross') && field[4].classList.contains('tail-cross') && field[6].classList.contains('tail-cross')) {
            field[2].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            field[4].style.backgroundImage = "url(/assets/img/crossWin.svg)"
            field[6].style.backgroundImage = "url(/assets/img/crossWin.svg)"
        }
        else if (field[2].classList.contains('tail-zero') && field[4].classList.contains('tail-zero') && field[6].classList.contains('tail-zero')) {
            field[2].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            field[4].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
            field[6].style.backgroundImage = "url(/assets/img/zeroWin.svg)"
        }

        return board[2];
    }

    // Проверка на ничью
    if (!board.includes(0)) {
        return 3;
    }
}



/*Функции таймера */
function pauseStopwatch() {
  running = 0;
}
function updateStopwatch() {
  if (running) {
    var currentTime = Date.now() - startTime;
    var hours = Math.floor(currentTime / 3600000);
    var minutes = Math.floor((currentTime % 3600000) / 60000);
    var seconds = Math.floor((currentTime % 60000) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('stopwatch').innerHTML =  minutes + ':' + seconds;
  }
}

setInterval(updateStopwatch, 1000);

