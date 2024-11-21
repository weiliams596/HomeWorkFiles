function Adult() {
    while (true) {
        if (prompt("Enter your age:")>17){
            alert("You are adult!");
            break;
        }else if(prompt("Enter your age:")<17){
            alert("You are not adult!");
            break;
        }
        else{
            alert("Invalid enter!");
        }
    }
}

Adult();