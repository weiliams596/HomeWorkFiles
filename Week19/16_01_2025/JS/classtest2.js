const body = document.querySelector('body');

const getItems = async() => {
    try{
        const respose = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/products');
        if(!respose.ok)
            throw new Error('Network response was not ok');
        const data = await respose.json();
        const newElement = document.createElement('div');
        newElement.classList.add('container');
        data.forEach(item=>{
            const newCard = document.createElement('div');
            newCard.classList.add('card');
            const elementItem=`
            <h2>${item.name}</h2>
            <p>${item.price}</p>
            `;
            newCard.innerHTML = elementItem;
            newElement.appendChild(newCard);
        });
        body.appendChild(newElement);
    }
    catch(error){
        console.error(error);
    }
};

getItems();