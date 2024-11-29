
function insertAndAlertInofmation(){
    let studentScorces =[];
    while(true){
        let studentScorce= prompt("Enter student score: (type 'stop' to stop,enter a valid score between 0 and 100)");
        console.log('Step one is done');
        if(studentScorce==null || studentScorce==undefined){
            console.log('Step two is done');
            continue;
        }
        else if(studentScorce.toLowerCase() == "stop")break;
        if(isNaN(studentScorce)){
            console.log('Step two is done');
            continue;
        }
        console.log('Step three is done');
        if(studentScorce<=0 || studentScorce>100){
            alert("Invalid score, please enter a valid score between 0 and 100.");
            console.log('Step four is done');
            continue;
        }
        studentScorces.push(Number(studentScorce));
        console.log('Step five is done');
    }
    if(studentScorces.length==0){
        alert("No valid scores entered.");
        return;
    }

    let sum=studentScorces.reduce((sum,score) => sum+=score);
    alert('The total score of all students is: '+sum + "\nThe midle score is: " + Number(sum/studentScorces.length).toFixed(2));
    alert('The hight scores are: ' + studentScorces.filter(items=>items>84).join(", "));
}

insertAndAlertInofmation();