const addBtn = document.querySelector('#add-film-btn');
const clerAddeds = document.querySelector('#clear-added-film-btn');
const filmInsertFrom = document.querySelector('.insert-form');
const addNewFilm = document.querySelector('#add-btn');
let allFilms = [];
let localFilms = [];
let onlineCount = 0;
const savedName = 'append-films';

filmInsertFrom.classList.add("hidden");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBtn.classList.add("hidden");
    clerAddeds.classList.add("hidden");
    filmInsertFrom.classList.remove("hidden");


});

clerAddeds.addEventListener('click', (e) => {
    e.preventDefault();
    localFilms = [];
    localStorage.removeItem(savedName);
    refreshData();
});

addNewFilm.addEventListener('click', (e) => {
    e.preventDefault();
    const filmName = document.querySelector('#film-name');
    const filmImg = document.querySelector('#film-image');
    const filmType = document.querySelector('#film-type');
    if (filmName.value && filmImg.value && filmType.value) {
        localFilms.push({ filmName: filmName.value, image: filmImg.value, Genre: filmType.value });
        localStorage.setItem(savedName, JSON.stringify(localFilms));
        filmName.value = '';
        filmImg.value = '';
        filmType.value = '';
        refreshData();
    } else {
        return;
    }


    filmInsertFrom.classList.add("hidden");
    addBtn.classList.remove("hidden");
    clerAddeds.classList.remove("hidden");
});

const initData = async () => {
    const response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films');
    if (response.ok) {
        const datas = await response.json();
        allFilms.push(...datas);
        onlineCount = datas.length;
    }
    if (localStorage.getItem(savedName)) {
        localFilms = JSON.parse(localStorage.getItem(savedName));
        allFilms.push(...localFilms);
        console.log(allFilms);
    }
    showAllFilms();
};

const removeFilm = (index) => {
    if(index < onlineCount){
        alert("Онлайн фильмы өшіруге болмайды!");
        return;
    }
    localFilms.splice(index-onlineCount, 1);
    localStorage.setItem(savedName, JSON.stringify(localFilms));
    refreshData();
};

const showAllFilms = () => {
    const showAll = document.querySelector('.show-all-films');
    showAll.innerHTML = '';
    allFilms.forEach((film, index) => {
        const div = document.createElement('div');
        div.classList.add('film-card');
        div.innerHTML = `
        <img src="${film.image}" alt="${film.filmName}">
        <h3>${film.filmName}</h3>
        <p>${film.Genre}</p>
        <button onclick='removeFilm(${index})'>Өшыру</button>`;
        showAll.appendChild(div);
    });
}

const refreshData = async () => {
    allFilms = [];
    await initData();
};

initData();