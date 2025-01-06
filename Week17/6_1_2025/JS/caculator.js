let temptNumber = "0";
let bIsUseOparator = false;

const clear = () => {
    document.getElementById("calculator-input").value = "0";
    temptNumber = '0';
    bIsUseOparator = false;
};

const changeSign = () => {
    let input = document.getElementById("calculator-input").value;
    if (input.charAt(0) === "-") {
        input = input.slice(1);
    } else {
        input = "-" + input;
    }
    document.getElementById("calculator-input").value = input;
    document.getElementById("equal-btn").addEventListener("click", changeSign);
};

const inputNumber = (number) => {
    if (document.getElementById("calculator-input").value === "0") {
        if (number === "0") {
            return;
        }
        else {
            document.getElementById("calculator-input").value = number;
            return;
        }
    }
    if(bIsUseOparator){
        document.getElementById("calculator-input").value = number;
        bIsUseOparator = false;
    }
    else{
        document.getElementById("calculator-input").value += number;
    }
};

document.getElementById("clear-btn").addEventListener("click", clear);
document.getElementById("change-sign-btn").addEventListener("click", changeSign);


Array.from(document.getElementsByClassName("opreater-numb")).forEach((btn) => {
    btn.addEventListener("click", () => {
        inputNumber(btn.innerHTML);
    });
});

const add = () => {
    let input = document.getElementById("calculator-input").value;
    document.getElementById("calculator-input").value = parseFloat(temptNumber) + parseFloat(input);
    temptNumber = document.getElementById("calculator-input").value;
    bIsUseOparator = true;
    document.getElementById("equal-btn").addEventListener("click", ()=>{
        add();
        temptNumber = "0";
    });
};

const subtract = () => {
    let input = document.getElementById("calculator-input").value;
    document.getElementById("calculator-input").value = parseFloat(temptNumber) - parseFloat(input);
    temptNumber = document.getElementById("calculator-input").value;
    bIsUseOparator = true;
    document.getElementById("equal-btn").addEventListener("click", subtract);
};

const multiply = () => {
    let input = document.getElementById("calculator-input").value;
    document.getElementById("calculator-input").value = temptNumber * input;
    temptNumber = document.getElementById("calculator-input").value;
    bIsUseOparator = true;
    document.getElementById("equal-btn").addEventListener("click", multiply);
};

const divide = () => {
    let input = document.getElementById("calculator-input").value;
    document.getElementById("calculator-input").value = temptNumber / input;
    temptNumber = document.getElementById("calculator-input").value;
    bIsUseOparator = true;
    document.getElementById("equal-btn").addEventListener("click", divide);
};

const percentage = () => {
    document.getElementById("calculator-input").value = document.getElementById("calculator-input").value / 100;
    document.getElementById("equal-btn").addEventListener("click", percentage);
};

document.getElementById("plus-btn").addEventListener("click", add);
document.getElementById("subtract-btn").addEventListener("click", subtract);
document.getElementById("multiply-btn").addEventListener("click", multiply);
document.getElementById("divide-btn").addEventListener("click", divide);
document.getElementById("percent-btn").addEventListener("click", percentage);
