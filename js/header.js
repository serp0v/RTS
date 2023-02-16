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

const headerProfile = document.querySelector('#headerProfile');

// headerProfile.classList.remove('dn');
// headerAuthorization.classList.add('dn');
// const exit = document.querySelector('#exit').onclick = () => {
//     headerProfile.classList.add('dn');
//     authorization.classList.remove('dn');
// };

const authForm = document.querySelector('#authForm');
const inputLogin = document.querySelector('#inputLogin');
const inputPassword = document.querySelector('#inputPassword');

const isVisibleBtn = document.querySelector('.password-visible');
const isVisibleImg = document.querySelector('.password-visible img');

const headerAuthorization = document.querySelector('#headerAuthorization');
const authorizationOnclick = Array.from(document.querySelectorAll('.authorizationOnclick'))

authForm.addEventListener('submit', (e) => e.preventDefault())

eventListenerForArray(authorizationOnclick, 'click', (e) => {
    if (e.target === e.currentTarget) {
        // authForm.classList.toggle("dn");
        authForm.classList.toggle('active');
    }  
})

isVisibleBtn.addEventListener('click', (e) => {
    console.log(inputPassword.setAttribute);
    if (e.target.classList.contains('visible')) {
        inputPassword.setAttribute('type', 'text')
        e.target.classList.remove('visible');
        isVisibleImg.setAttribute('src', '/multimedia/hidden.svg')

        // changeInputVisibility(true, inputPassword);
    } else {
        inputPassword.setAttribute('type', 'password')
        e.target.classList.add('visible');
        isVisibleImg.setAttribute('src', '/multimedia/visible.svg')

        // changeInputVisibility(false, inputPassword);
    }
})


function changeInputVisibility(isVisible, input) {
    if (isVisible) {
        input.setAttibute('type', 'text')
    } else {
        input.setAttibute('type', 'password')
    }
}

function eventListenerForArray (arr, eventType, cb) {
    arr.forEach(item => {
        item.addEventListener(eventType, (e) => cb(e))
    })
}