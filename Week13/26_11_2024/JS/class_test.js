function sortArray(arr) {
    let templetArry = arr.slice();
    let len = templetArry.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (templetArry[j] > templetArry[j + 1]) {
                let temp = templetArry[j];
                templetArry[j] = templetArry[j + 1];
                templetArry[j + 1] = temp;
            }
        }   
    }

    return templetArry;
}

function inputArray() {
    let arr = [];
    while (true) {
        let inputCount = +prompt("Enter the number of array count:");
        if (inputCount === null || inputCount === "" || isNaN(inputCount)) {
            alert("Invalid input! Please enter a valid number.");
            continue;
        }
        for (let i = 0; i < inputCount; i++) {
            let inputValue = +prompt("Enter the value:");
            if (inputValue === null || inputValue === "" || isNaN(inputValue)) {
                alert("Invalid input! Please enter a valid number.");
                i--;
                continue;
            }
            arr.push(inputValue);
        }
        break;
    }
    alert('The array length is' + arr.length + 'and the array items are:' + arr.join(", "));

    alert('The sorted array items are:' + sortArray(arr).join(", "));
}