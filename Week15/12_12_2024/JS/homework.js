const errorMessage = document.getElementById("error_message");
const rangeContex = document.getElementById("interaction_text");
const rangeInteraction = document.getElementById("interaction");
const selection = document.querySelector("select");

rangeInteraction.addEventListener("change", function (event) {
    rangeContex.textContent = event.target.value;
    if (event.target.value > 9) {
        rangeContex.style.left = "1px";
    }
    else {
        rangeContex.style.left = "5px";
    }
});

const submitBtn = document.getElementById("submit_button");

var bIsWork = true;
submitBtn.addEventListener("click", function (event) {
    const checkText = document.getElementById("study_center").value;
    bIsWork = true;
    if (checkText.length > 15) {
        errorMessage.textContent = "Text is too long";
        bIsWork = false;
    }
    else if (checkText.length < 1 || checkText.split(" ").length < 2) {
        errorMessage.textContent = "Text is too short";
        bIsWork = false;
    }
    if (selection.value === "") {
        errorMessage.textContent = "Please select a topic";
        bIsWork = false;
    }
    if (checkText.split(" ").length > 2) {
        errorMessage.textContent = "You shuld enter only two words";
        bIsWork = false;
    }
    if (bIsWork) {
        const allData = {
            group: selection.value,
            feedback: checkText,
            rating: rangeInteraction.value
        }
        console.log('Оқушылар пікірі бойынша жиналған ақпараттар: ' + JSON.stringify(allData));
    }
    event.preventDefault();
});

selection.addEventListener("change", function (event) {
    const selectedOption = event.target.value;
    // console.log(`Таңдалған топ: ${item['data']}`);
    console.log(`Таңдалған топ: ${selectedOption}`);
});
