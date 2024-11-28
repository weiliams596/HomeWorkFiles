function addFruit(){
    let fruits = ["apple", "banana", "orange"];
    let appandFruitCount=0;
    let indexOfFruitCount=0;
    while(true){
        if(appandFruitCount === 0 || appandFruitCount === null || isNaN(appandFruitCount)){
            appandFruitCount = +prompt("How many fruits do you want to add?");
            continue;
        }
        let fruit=prompt("Enter fruit name:");
        if(fruit === null || fruit === ""){
            continue;
        }
        fruits.push(fruit);
        indexOfFruitCount++;
        if(indexOfFruitCount === appandFruitCount){
            break;
        }
    }
    console.log(fruits.join(", "));
}

addFruit();