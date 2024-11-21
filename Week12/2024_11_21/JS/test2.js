
function NumberOneStudent(){
    let inputInfo = prompt("Enter your name:").toLowerCase();
    let score = prompt("Enter your score:").toLowerCase();
    let numberOne='';
    let firstScore=0;

    while(true){
        if(inputInfo==null || inputInfo==''||inputInfo == undefined){
            inputInfo = prompt("Enter your name:").toLowerCase();
            continue;
        }
        if(score==null || score==''||score == undefined){
            alert("You must enter 0-100:");
            score = prompt("Enter your score:").toLowerCase();
            continue;
        }
        if(inputInfo=="stop"|| score=="stop"){
            break;
        }
        if(score>100||score<0){
            alert("You must enter 0-100:");
            score = prompt("Enter your score:").toLowerCase();
            continue;
        }
        else{
            if(firstScore<score){
                numberOne=inputInfo;
                firstScore=Number(score);
            }
        }
        inputInfo = prompt("Enter your name:").toLowerCase();
        score = prompt("Enter your score:").toLowerCase();
    }
    alert("First student is " + numberOne + ". Score is :" + firstScore);
}

NumberOneStudent();