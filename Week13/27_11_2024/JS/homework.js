
function insertEvenAndOddInArray() {
    let sandar = [];
    while (true) {
        let temptNumb = parseInt(prompt("Enter a number to insert in the array or type 'done' to stop:"));
        if (temptNumb === 0) {
            break;
        }
        if (temptNumb == null || isNaN(temptNumb)) {
            alert("Please enter a valid number!");
            continue;
        }
        temptNumb = parseInt(temptNumb);
        if (temptNumb % 2 == 0) {
            sandar.unshift(temptNumb);
        } else {
            sandar.push(temptNumb);
        }
    }
    alert("The array length is :" + sandar.length + "\nThe array is:" + sandar.join(", "));
}

insertEvenAndOddInArray();