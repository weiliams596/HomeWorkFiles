const getUsers = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
   })
   .then(data => console.log(data))
   .catch(error => console.log(error));
}

getUsers();

async function getUsersAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
    }
}

console.log(getUsersAsync());

async function getPosts(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        console.log(await response.json());
    }
    catch(error){
        console.error(error);
    }
}

getPosts()