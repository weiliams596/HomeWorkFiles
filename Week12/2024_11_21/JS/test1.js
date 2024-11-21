

function GuessTheNumber() {
    let temptRandomNumber = parseInt(Math.random() * 100) % 100;
    console.log(temptRandomNumber);
    const offset=5;
    alert("I have a " + temptRandomNumber>50?"big number.":"small number." + "(0-100):");
    let temptNumb=+prompt("Please enter your first number!");
    while(true){
        if(temptRandomNumber== temptNumb){
            alert("Well done!");
            break;
        }else if((temptRandomNumber - temptNumb)>offset||(temptRandomNumber - temptNumb)<-offset){
            alert("Your number is far.");
        }else {
            alert("Your number is close.");
        }
        temptNumb=+prompt("Please enter your number!");
    }
}

GuessTheNumber();