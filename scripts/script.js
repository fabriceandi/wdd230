const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#fff";
        modeButton.textContent = "🕶️";
    }
});

