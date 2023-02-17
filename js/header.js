// menu

const burgerMenu = document.querySelector('#burgerMenu');
const gear = document.querySelector('#gear');
const burgerMenuButton = document.querySelector('#burgerMenuButton').onclick = () => {
    burgerMenu.classList.toggle('anim-menu');
    gear.classList.toggle('anim-gear');
};

const languageMenu = document.querySelector('#languageMenu');
const languageMenuButton = document.querySelector('#languageMenuButton').onclick = () => {
    languageMenu.classList.toggle('anim-menu-language');
};

// authorization

const headerProfile = document.querySelector('#headerProfile');
const nickname = document.querySelector('.nickname');

const exit = document.querySelector('#exit').onclick = () => {
    headerAuthorization.classList.remove('dn');
    headerProfile.classList.add('dn');
};

const authForm = document.querySelector('#authForm');
let inputLogin = document.querySelector('#inputLogin').value;
const inputPassword = document.querySelector('#inputPassword');

const isVisibleBtn = document.querySelector('.password-visible');
const isVisibleImg = document.querySelector('.password-visible img');

const headerAuthorization = document.querySelector('#headerAuthorization');
const authorizationOnclick = Array.from(document.querySelectorAll('.authorizationOnclick'))

authForm.addEventListener('submit', (e) => {
    // headerAuthorization.classList.add('dn');
    // headerProfile.classList.remove('dn');
    e.preventDefault();
})

eventListenerForArray(authorizationOnclick, 'click', (e) => {
    if (e.target === e.currentTarget) {
        authForm.classList.toggle('active');
    }  
})

isVisibleBtn.addEventListener('click', (e) => {
    console.log(inputPassword.setAttribute);
    if (e.target.classList.contains('visible')) {
        inputPassword.setAttribute('type', 'text')
        e.target.classList.remove('visible');
        isVisibleImg.setAttribute('src', '/multimedia/hidden.svg')
    } else {
        inputPassword.setAttribute('type', 'password')
        e.target.classList.add('visible');
        isVisibleImg.setAttribute('src', '/multimedia/visible.svg')
    }
})

function eventListenerForArray (arr, eventType, cb) {
    arr.forEach(item => {
        item.addEventListener(eventType, (e) => cb(e))
    })
}