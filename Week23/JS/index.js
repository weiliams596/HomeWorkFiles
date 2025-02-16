const first_section = document.getElementById("first-section");

async function getInfo(){
    try{
        const response = await fetch("JS/images.json");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const images = data.images;
        images.forEach(element => {
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.src = element.url;
            img.alt = element.name;
            const title = document.createElement("h3");
            title.textContent = element.name;
            //const description = document.createElement("p");
            //description.textContent = element.description;
            card.appendChild(img);
            card.appendChild(title);
            //card.appendChild(description);
            first_section.appendChild(card);
        });
    }catch(error){
        console.log(error);
    };
};


getInfo();