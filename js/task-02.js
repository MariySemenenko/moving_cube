// 2. Будемо виводити текст при нажатті на кнопку і робити кнопку неактивною після того
const button = document.getElementById('show-greeting');
const divBlock = document.getElementsByClassName('js-greeting')[0];
button.addEventListener('click', (event) => {
    divBlock.style.display = 'block';
    console.log(event);
    event.target.disabled = true;
}); //видалити кнопку в кінці ми не можемо тому що функція стрілочна без назви анонімна
