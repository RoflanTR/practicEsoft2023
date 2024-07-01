let img = document.getElementById('navbar__img');

function hover(img) {
    img.setAttribute('src', '/assets/img/logoutGreen.svg');
}
function unhover(img) {
    img.setAttribute('src', '/assets/img/logout.svg');
}




let tails = document.querySelectorAll('.tail');

for (let index = 0; index < tails.length; index++) {
    
    tails[index].addEventListener('mousemove',()=>{
        if(tails[index].classList.contains('tail-zero')){
            tails[index].style.backgroundImage = "url(/assets/img/zeroHover.svg)"
        }
        if(tails[index].classList.contains('tail-cross')){
            tails[index].style.backgroundImage = "url(/assets/img/crossField.svg)"
        }
        else {
            tails[index].style.backgroundColor = "#eee";
        }
    })
    tails[index].addEventListener('mouseout',()=>{
        
        
        if(tails[index].classList.contains('tail-zero')){
            tails[index].style.backgroundImage = "url(/assets/img/zeroField.svg)"
        }
        if(tails[index].classList.contains('tail-cross')){
            tails[index].style.backgroundImage = "url(/assets/img/crossHover.svg)"
            
        }
        else {
            tails[index].style.backgroundColor = "#fff";
        }
    })
}
