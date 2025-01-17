const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#btn-search');
const userList = document.querySelector('.user-list');

const userData = [];

const init = () => { 
    fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        userData.push(...data);
        userData.forEach(user => {
            const newDiv=document.createElement('div');
            newDiv.classList.add('user-info-card');
            newDiv.innerHTML = `
                <img src="${user.image}">
                <h2>Name:${user.name}</h2>
                <p>Post:${user.post}</p>`;
        });
    })
    .catch(error => console.error('Error:', error));
};

searchButton.addEventListener('click', (e) => {

});


init();