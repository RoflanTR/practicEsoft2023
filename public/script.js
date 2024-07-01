const input = document.querySelectorAll('.auth__input')
const btn = document.querySelector('.auth__btn')

let x = false;
let y = false;



function checkFilledfirst(input) {
    if (input.value !== '') {
        x = true
        if (x && y) {
            btn.removeAttribute('disabled');
        }

    } else {
        x = false
        if (!x || !y) {
            btn.disabled = true;
        }
    }
}
function checkFilledsecond(input) {
    if (input.value !== '') {
        y = true
        if (x && y) {
            btn.removeAttribute('disabled');
        }
    } else {
        y = false
        if (!x || !y) {
            btn.disabled = true;
        }
    }
}
