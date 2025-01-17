const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#btn-search');
const userList = document.querySelector('.user-list');

const userData = [];

const makeUserCard = (user) => {
    if(!user)
        return;
    const newDiv = document.createElement('div');
                newDiv.classList.add('user-info-card');
                newDiv.innerHTML = `
                <img src="${user.image}">
                <h2>Name:${user.name}</h2>
                <p>Post:${user.post}</p>`;
                userList.appendChild(newDiv);
}

const makeUserList = (data) =>{
    data.forEach(user => {
        makeUserCard(user);
    });
}

// const init = () => {
//     fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);

//             userData.push(...data);
//             makeUserList(userData);
//         })
//         .catch(error => console.error('Error:', error));
// };

const init = async () => {
    try{
        const newFetch = await fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/users");
        if(!newFetch.ok){
            throw  new Error('Network response was not ok');
        }
        console.log(newFetch);
        const newData = await newFetch.json();
        userData.push(...newData);
        makeUserList(userData);
    }
    catch(error){
        console.error('Error:', error);
    }
};

searchButton.addEventListener('click', (e) => {
    const inputValue = searchInput.value.toLowerCase();
    let filteredData;
    if(inputValue =='' || inputValue ==undefined){
        filteredData = userData;
    }
    filteredData = userData.filter(user => {
        return user.name.toLowerCase().includes(inputValue) || user.post.toLowerCase().includes(inputValue);
    });
    userList.innerHTML = '';
    makeUserList(filteredData);
});


init();