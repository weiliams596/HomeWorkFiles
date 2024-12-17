const searcher = document.getElementById("search");
const searcher_div = document.getElementById("searcher_div");
const hiddenItems = document.getElementById("hiddenItems");

const snow_shower = document.getElementById("snow_shower");

let insertArray = [];


let bIsClicked = false;

searcher_div.appendChild(hiddenItems);

function showItems() {
    if (bIsClicked) {
        hiddenItems.style.height = "auto";
        hiddenItems.style.visibility = "visible";
    }
    else {
        hiddenItems.style.visibility = "hidden";
        hiddenItems.style.height = "0";
    }
}

function makeShower() {
    showItems();
}


function snowRandomMove(snow) {
    let randomNum = Math.random() * 15;
    snow.style.left = parseFloat(snow.style.left) + (randomNum % 2 ? randomNum : -randomNum) + "px";
}


function makeSnow() {
    let snow = document.createElement("div");
    snow.classList.add("snow_item");
    snow.style.left = Math.random() * snow_shower.clientWidth + "px";
    snow.style.top = "0";
    snow.style.animationName = "snowDown";
    snow.style.animationDuration = Math.random() * 5 + 10 + "s";
    snow.style.opacity = Math.random();
    snow_shower.appendChild(snow);
    let intervalId = setInterval(() => {
        snowRandomMove(snow);
    }, 500);
    setTimeout(function () {
        clearInterval(intervalId);
        snow_shower.removeChild(snow);
    }, 10000);
}

snow_shower.addEventListener("click", function () {
    makeSnow();
});

function addHiddenItems() {
    insertArray.forEach(function (item) {
        const newItem = document.createElement("div");
        const newImg = document.createElement("img");
        newImg.src = "Assets/Icon/search.svg";
        newImg.alt = "search";
        newItem.classList.add("item");
        newItem.appendChild(newImg);
        newItem.appendChild(document.createTextNode(item));
        newItem.addEventListener("click", function () {
            searcher.value = this.textContent;
            console.log("You clicked on " + this.textContent);
            
        });
        hiddenItems.appendChild(newItem);
    });
}

function removeHiddenItems() {
    hiddenItems.innerHTML = "";
}

searcher.addEventListener("change", function () {
    if (insertArray.length < 1 || searcher.value !== "") {
        if (insertArray.includes(searcher.value) === false) {
            insertArray.push(searcher.value);
        }
    }
    console.log(insertArray);
});

searcher.addEventListener('focus', function () {
    bIsClicked = true;
    removeHiddenItems();
    addHiddenItems();
    makeShower();
});

searcher.addEventListener('blur', function () {
    setTimeout(() => {
        bIsClicked = false;
        removeHiddenItems();
        makeShower();
    }, 500);
});
