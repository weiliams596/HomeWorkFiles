const fetchData = (url)=>{
    return new Promise((res,rej)=>{
        fetch(url).then(response =>{
            if(response.ok){
                console.log("Get all data is success!");
                res(response.json());
            }
            else{
                rej(new Error("Erorr:You have failed!We can not get data from server!"));
            }
        });
    });
}


const container = document.getElementsByClassName("container")[0];

fetchData("https://jsonplaceholder.typicode.com/users").then(data=>{
    data.forEach(element => {
        const card = document.createElement("div");
        const username = document.createElement("h2");
        const email = document.createElement("p");
        username.textContent=element.username;
        email.textContent=element.email;
        card.appendChild(username);
        card.appendChild(email);
        container.appendChild(card);
    });
});


const btn_searcher=document.getElementById("btn_searcher");
const input_searcher=document.getElementById("input_searcher");
const container2 = document.getElementsByClassName("container2")[0];

btn_searcher.addEventListener("click",()=>{
    fetchData("https://jsonplaceholder.typicode.com/users").then(data=>{
        const search_result=data.filter(element => {
            return element.username.toLowerCase().includes(input_searcher.value.toLowerCase());
        });
    });
});