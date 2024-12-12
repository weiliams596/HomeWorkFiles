//  First function to change box background color to red
function changeColor() {
  document.getElementById("change_size_box").style.backgroundColor = "green";
}

var width = 200;
var height = 200;

//  Second function to change box width
function changeWidth(){
    width +=20;
    document.getElementById("change_size_box").style.width = width + "px";
}

//  Third function to change box height
function changeHeight(){
    height +=20;
    document.getElementById("change_size_box").style.height = height + "px";
}

//  Fourth function to change box text content
function onMouseEnter(){
    document.getElementById("change_size_box").textContent = "Сіздің мышкаңыз қораптың ішінде!";
}

//  Fifth function to reset box text content
function onMouseLeave(){
    document.getElementById("change_size_box").textContent = "Сіздің мышкаңыз қораптан шығып кетті!";
}

// const changeSizeBox = document.getElementById("change_size_box");
// changeSizeBox.addEventListener("click", changeColor);
// changeSizeBox.addEventListener("click", changeWidth);
// changeSizeBox.addEventListener("click", changeHeight);
// changeSizeBox.addEventListener("mouseenter", onMouseEnter);
// changeSizeBox.addEventListener("mouseleave", onMouseLeave);