// This is a sample function to compare two words

function compareWords(){
    let word1 = document.getElementById("word1").value.toString().toLowerCase();
    let word2 = document.getElementById("word2").value.toString().toLowerCase();
    let retValue='';
    if(word1 === word2){
        retValue="The words are the same";
    }else{
        retValue="The words are different";
    }
    let result = document.getElementById("resultLabel");
    result.innerHTML = retValue;
}