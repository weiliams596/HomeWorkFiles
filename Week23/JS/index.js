const first_section = document.getElementById("first-section");

function onCardClick(event) {
    const card = event.currentTarget;
    if (card.dataOnclicked != true) {
        card.dataOnclicked = true;
        const newDiv = document.createElement("div");
        newDiv.classList.add("back-shadow");
        card.style.animation = "showdetails 6s ease-in-out";
        card.children[0].style.animation = "showdetailsImage 6s ease-in-out";
        newDiv.appendChild(card);
        first_section.appendChild(newDiv);
        setTimeout(() => {
            if(card.dataOnclicked == false) return;
            card.children[1].children[1].classList.remove("hidden");
            card.classList.remove("card");
            card.classList.add("card-final");
        }, 5980);
    }
    else {
        card.dataOnclicked = false;
        const newDiv = card.parentElement;
        card.style.animation="none";
        card.classList.remove("card-final");
        card.classList.add("card");
        card.children[1].children[1].classList.add("hidden");
        first_section.appendChild(card);
        first_section.removeChild(newDiv);
    }
}

async function getInfo() {
    try {
        const response = await fetch("JS/images.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const images = data.images;
        images.forEach(element => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.addEventListener("click", onCardClick);
            const img = document.createElement("img");
            img.src = element.url;
            img.alt = element.name;
            const descriptionAndTitle = document.createElement("div");
            descriptionAndTitle.classList.add("description-and-title");
            const title = document.createElement("h3");
            title.textContent = element.name;
            const description = document.createElement("p");
            description.textContent = element.description;
            description.classList.add("hidden");
            card.appendChild(img);
            descriptionAndTitle.appendChild(title);
            descriptionAndTitle.appendChild(description);
            card.appendChild(descriptionAndTitle);
            first_section.appendChild(card);
        });
    } catch (error) {
        console.log(error);
    };
};


getInfo();