function Adult() {
    while (true) {
        let tempt =prompt("Enter your age:");
        if (tempt>17){
            alert("You are adult!");
            break;
        }else if(tempt<18){
            alert("You are not adult!");
            break;
        }
        else{
            alert("Invalid enter!");
        }
    }
}

Adult();