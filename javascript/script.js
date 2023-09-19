let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river5');
let boat = document.getElementById('boat6');
let nouvil = document.querySelector('.nouvil2');
let main = document.querySelector('.main');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';

    if (scrollY >= 74) {
        nouvil.style.fontSize = '74px';
        nouvil.style.position = 'fixed';

        if (scrollY >= 386) {
            nouvil.style.display = 'none';
        } else {
            nouvil.style.display = 'block';
        }

        if (scrollY >= 132) {
            main.style.background = 'linear-gradient(#3c4c53,#2b5f63)';
        } else {
            main.style.background = 'linear-gradient(#513c53,#751a2e)';
        }
    }
};




