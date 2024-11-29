function cubeNumbers(param) {
    //  This is a function to calculate the cube of a number.
    //  First method is using Math.pow() method.
    //return Math.pow(param, 3);
    //  Second method is using a for loop.
    // let cube = param;
    // for(let i=1; i<3; i++){
    //     cube *= param;
    // }
    // Thirds method is using a single line of code.
    let cube = param * param * param;
    //  Fouth method is using ** operator.
    // let cube = param ** 3;
    // return cube
    return cube;
}
function insertNumbersAndAlert() {
    //  This function will insert numbers from the user and alert the cube of the numbers.
    //  Nums will save user input as an array.
    let nums = [];

    //  This loop will keep asking the user for input until they type "done".
    while (true) {
        let num = prompt("Enter a number (or type 'done' to stop):");
        if (isNaN(num) || num == "" || num == null || num == undefined) {
            alert("Invalid input! Please enter a valid number.");
            continue;
        }
        else if (num.toLowerCase() == "done") break;
        if (nums.length == 0) return;
        nums.push(Number(num));
    }

    let alertNums = nums.map(num => cubeNumbers(num));
    let retValue = 'This array contains the cubes of the odd numbers: ';
    for (let num of alertNums) {
        if ((num % 2)) {
            retValue += num + ", ";
        }
    }
    alert(retValue);
}


insertNumbersAndAlert();