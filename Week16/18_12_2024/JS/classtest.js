const insertText = document.getElementById("add-text");
const show_list = document.getElementById("show_list");
const addBtn=document.getElementById("add-btn");

const searchInput = document.getElementById("search-text");
const searcherBtn = document.getElementById("search-btn");


function makeItems(text){
    const newItem = document.createElement("div");
    const newBtn = document.createElement("button");
    const newImg = document.createElement("img");
    newImg.src="Assets/Icon/trash3.svg";
    newItem.classList.add("item");
    newBtn.appendChild(newImg);
    newBtn.addEventListener("click",(event)=>{
        show_list.removeChild(newItem);
    });
    newItem.addEventListener('dblclick',event=>{
        event.preventDefault();
        insertText.value=newItem.textContent;
        show_list.removeChild(newItem);
    });
    newItem.appendChild(document.createTextNode(text));
    newItem.appendChild(newBtn);
    return newItem;
}


addBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(insertText.value.trim()==""){
        return;
    }
    const newItem = makeItems(insertText.value);
    show_list.appendChild(newItem);
    insertText.value="";
});

searcherBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const searchText = searchInput.value.trim();
    const items = show_list.querySelectorAll(".item");
    items.forEach((item)=>{
        if(searchText=="" || searchText==null|| searchText.length==0 || searchText==undefined){
            item.style.display="block";
        }
        if(item.textContent.toLowerCase().includes(searchText.toLowerCase())){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
});