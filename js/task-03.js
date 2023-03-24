
// 3.
// Напишемо чотири кнопки стрілочок. За допомогою тих кнопок будемо рухати наш кубик по сторінці
// const arrows = document.querySelectorAll('.arr');
// const box = document.querySelector('.box');
// const [arrowUp, arrowLeft, arrowBottom, arrowRight] = arrows;
// let topCounter = 0;
// let leftCounter = 0;
// let bottomCounter = 0;
// let rightCounter = 0;
// arrowUp.addEventListener('click', (event) => {
//     topCounter += 20;
//     box.style.marginTop = `${topCounter}px`;
// });
// arrowLeft.addEventListener('click', (event) => {
//     leftCounter += 20;
//     box.style.marginLeft = `${leftCounter}px`;
// });
// arrowBottom.addEventListener('click', (event) => {
//     bottomCounter += 20;
//     box.style.marginBottom = `${bottomCounter}px`;
// });
// arrowRight.addEventListener('click', (event) => {
//     rightCounter += 20;
//     box.style.marginRight = `${rightCounter}px`;
// });
//
//
//
//
//
//
//
// 4. Будемо рухати наш бокс натисканням на кнопки клавіатури
const [box] = document.getElementsByTagName('div');
const box = document.getElementsByTagName('div')[0];
const box = document.querySelector('div');
const box = document.querySelectorAll('div')[0];
console.dir(box);
let topCounter = 0;
let leftCounter = 0;
let bottomCounter = 0;
let rightCounter = 0;
document.addEventListener('keydown', (_event) => {
    console.log({ code: _event.code, key: _event.key, event: _event });
    if (_event.code === 'ArrowUp') {
        topCounter += 20;
        box.style.paddingTop = `${topCounter}px`;
        box.classList.toggle('yellow-box');
    }
    if (_event.code === 'ArrowRight') {
        leftCounter += 20;
        box.style.paddingLeft = `${leftCounter}px`;
        box.classList.toggle('yellow-box');
    }
    if (_event.code === 'ArrowDown') {
        bottomCounter += 20;
        box.style.paddingBottom = `${bottomCounter}px`;
        box.classList.toggle('yellow-box');
    }
    if (_event.code === 'ArrowLeft') {
        rightCounter += 20;
        box.style.paddingRight = `${rightCounter}px`;
        box.classList.toggle('yellow-box');
    }
});