function enumNumbers() {
    let count = 0;
    while (true) {
        count = parseInt(+prompt("Enter a number for count of numbers: "));
        if (count > 0) {
            break;
        }
        else {
            alert("Please enter a positive number");
        }
    }
    let inputNumber = 0;
    let positiveCount = 0;
    let oddCount = 0;
    let evenCount = 0;
    while(count > 0){
        inputNumber = parseInt(+prompt("Enter a number: "));
        if (isNaN(inputNumber)) {
            alert("Please enter a valid number");
            continue;
        }
        if (inputNumber < 0) {
            positiveCount++;
        }
        if (inputNumber % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
        count--;
    }
    alert(`Positive numbers: ${positiveCount}\nEven numbers: ${evenCount}\nOdd numbers: ${oddCount}`);
}

enumNumbers();