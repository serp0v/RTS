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
// const authorization = document.querySelector('#authorization');
// const authorizationOnclick = document.querySelector('#authorizationOnclick').onclick = () => {
//     headerProfile.classList.remove('dn');
//     authorization.classList.add('dn');
// };
// const exit = document.querySelector('#exit').onclick = () => {
//     headerProfile.classList.add('dn');
//     authorization.classList.remove('dn');
// };