// // 1. 
// // addEventListener(type, listener) - додаємо слухач подій
// // target.removeEventListener(type, listener) - видаляємо слухач подій
// // Будемо рухати кубик по сторінці при нажатті на нього
const box = document.querySelector('.box');
box.addEventListener('click', onClick);
let step = 0;
function onClick(event) {
    console.dir(event);
    step += 50;
    event.target.style.margin = step + 'px'; //якщо  marginLeft бокс рухається вправо
    if (step >= 600) {
        removeBoxClickListener();
    }
}
function removeBoxClickListener() {
    box.removeEventListener('click', onClick);//при нажатті step300 він видаляється і рухатись не буде
}
//
//
//
//



