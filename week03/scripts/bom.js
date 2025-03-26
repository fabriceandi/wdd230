const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const listChapter = document.querySelector('#list');

let chapArray = getChapterList() || [];

chapArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {

    if (input.value != '') {
        displayList(input.value);
        chapArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus;
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    listChapter.append(li);

    deleteBtn.addEventListener('click', function () {
        listChapter.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavoriteBOMChapters', JSON.stringify(chapArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavoriteBOMChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapArray = chapArray.filter(item => item != chapter);
    setChapterList();
}