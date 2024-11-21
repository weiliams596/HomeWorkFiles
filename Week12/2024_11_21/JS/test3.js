function DoSomeThing(){
    let min=document.getElementById("min_number").value;
    let max=document.getElementById("max_number").value;
    let showAll=document.getElementById("show_all");
    let lineCount=0;
    if(min<max){
        let index=Number(min);
        while(index<(Number(max)+1)){
            showAll.innerHTML +=index + " , ";
            index++;
            lineCount++;
            if(lineCount>9){
                lineCount %=10;
                showAll.innerHTML+='\n';
            }
        }
    }
    else{
        alert("Min number must smaller than max!");
    }
}