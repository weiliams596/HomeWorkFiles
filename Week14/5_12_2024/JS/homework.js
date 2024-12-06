let homeWorkList = ["Homework 1", "Homework 2", "Homework 3", "Homework 4", "Homework 5"];

function showAndAskHomeworkIsDone(){
    let userInput;
    const userInfo ={
        name: prompt("What is your name?"),
        userHomeworks:[]
    }
    for(HWName of homeWorkList){
        userInput = prompt("Are you done with " + HWName + "? (yes/no)");
        if(userInput.toLowerCase() === "yes"){
            let temptScore = +prompt("What is your score for " + HWName + "?");
            userInfo.userHomeworks.push({name:HWName,score:temptScore, isDone:true});
        }
        else if(userInput.toLowerCase() === "no"){
            userInfo.userHomeworks.push({name:HWName, isDone:false});
        }
        else{
            alert("Invalid input. Please enter 'yes' or 'no'.");
            return;
        }
    }
    return userInfo;
}

function showHomeworkNotDone(){
    const userInfo = showAndAskHomeworkIsDone();
    const notDoneHomeworks = userInfo.userHomeworks.filter(HW => !HW.isDone);
    if(notDoneHomeworks.length === 0){
        alert("Congratulations! You have completed all the homeworks.");
    }
    else{
        alert("You have not completed the following homeworks: " + notDoneHomeworks.map(HW => HW.name).join(", "));
    }
    return userInfo;
}

function makeHomeworkEnd(){
    const userInfo = showHomeworkNotDone();
    for(HW of userInfo.userHomeworks){
        if(!HW.isDone){
            let userInput = prompt("The lesson " + HW.name + " is finished (yes/no)?");
            if(userInput.toLowerCase() === "yes"){
                HW.isEnded = true;
                alert("Congratulations! You have completed the homework " + HW.name + " with a score of " + HW.score + ".");
            }else if(userInput.toLowerCase() === "no"){
                alert("You have not completed the homework " + HW.name + ".");
            }
            else {
                alert("Invalid input. Please enter 'yes' or 'no'.");
            }
        }
    }
}

makeHomeworkEnd();