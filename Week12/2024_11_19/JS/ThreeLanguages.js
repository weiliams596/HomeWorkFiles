
function English(props) {
    alert("Hello," + props + "!");
}

function Kazakh(props) {
    alert("Salam," + props + "!");
}

function Russian(props) {
    alert("Здравствуйте!" + props +"!" +". Как я могу вам помочь сегодня?");
}

function threeLanguages() {
    let userName=prompt("Please enter your name:");
    let language=prompt("Please select your language:(English/Kazakh/Russian)").toLowerCase();
    if(language=="english") {
        English(userName);
    } else if(language=="kazakh") {
        Kazakh(userName);
    } else if(language=="russian") {
        Russian(userName);
    } else {
        alert("Sorry, we don't support this language yet.");
    }
}

threeLanguages();