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
const inputLogin = document.querySelector('#inputLogin').value;
const inputPassword = document.querySelector('#inputPassword').value;

const headerAuthorization = document.querySelector('#headerAuthorization');
const authorizationOnclick = document.querySelector('#authorizationOnclick');

authForm.addEventListener('submit', (e) => e.preventDefault())

authorizationOnclick.onclick = () => {
    authForm.classList.toggle('dn');
};