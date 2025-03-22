//Last modification
let lastModif = new Date(document.lastModified);
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;

// Hamburger menu
const hamButton = document.querySelector('#hbButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});