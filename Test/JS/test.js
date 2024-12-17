const sercher = document.getElementById("search");
const searcher_div = document.getElementById("searcher_div");
const hiddenItems = document.getElementById("hidenItems");

const snow_shower = document.getElementById("snow_shower");


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

sercher.addEventListener("focus", function () {
    bIsClicked = true;
    makeShower();
});

sercher.addEventListener("blur", function () {
    bIsClicked = false;
    makeShower();
});


function snowRandomMove(snow) {
    let randomNum = Math.random() * 15;
    snow.style.left = parseFloat(snow.style.left) + (randomNum % 2? randomNum : -randomNum)  + "px";
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