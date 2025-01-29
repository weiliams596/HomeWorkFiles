const title = document.getElementById("title");
const url = "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions";
const timer = document.getElementById("timer");

const allAnswerBtn = document.querySelectorAll(".answer")[0].children;
const answerDiv = document.querySelectorAll(".answer")[0];
const time_left = 3;
var timerHandle = null;

const nextBtn = document.getElementById("next");

let currentQuestion = -1;
let selection = -1;
let score = 0;

const allAns = [];

const startItmer = () => {
    let count = time_left;
    const timerInterval = setInterval(() => {
        timer.textContent = "Time remaining: " + count;
        count--;
        if (count < 0) {
            timer.textContent = "Time's up!";
            clearInterval(timerInterval);
            nextBtn.click();
        }
    }, 1000);
    return { handle: timerInterval, timeout: count < 0 };
}



nextBtn.addEventListener("click", () => {
    if (timerHandle) {
        clearInterval(timerHandle);
        timerHandle = null;
    }
    nextBtn.classList.add("hidden");
    if (selection != -1) {
        if (selection === allAns[currentQuestion].answer) {
            score += 2;
        }
    }
    else {
        score += 0;
    }
    if (currentQuestion < allAns.length - 1) {
        currentQuestion++;
        title.textContent = allAns[currentQuestion].question;
        Array.from(allAnswerBtn).forEach((btn, index) => {
            btn.textContent = allAns[currentQuestion].options[index];
        });
        timerHandle = startItmer().handle;
    }
    else {
        title.textContent = "Congratulations! You have completed the test.";
        nextBtn.textContent = "Қайталау!";
        nextBtn.addEventListener("click", () => {
            location.reload();
        });
        answerDiv.innerHTML = "<p id='score'>Your score is: " + score + " out of " + allAns.length * 2 + " points.</p>";
        nextBtn.classList.remove("hidden");
        timer.innerHTML = "";
    }
});



const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.forEach(item => {
            allAns.push({ options: item.options, answer: item.answer, question: item.question });
        });
        Array.from(allAnswerBtn).forEach((btn, index) => {
            btn.addEventListener("click", () => { selection = index; nextBtn.classList.remove("hidden"); });
            btn.textContent = allAns[0].options[index];
            currentQuestion = 0;
        });
        nextBtn.classList.add("hidden");
        timerHandle = startItmer().handle;
    }
    catch (error) {
        console.error(error);
    }
}


fetchData();