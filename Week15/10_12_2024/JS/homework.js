const title = document.querySelector('#change-title');
title.textContent = "HW: Introduction to DOM";

const p_userName=document.getElementById("user-name");
p_userName.textContent = "Magauia";

const change_text = ['Coding','Teaching','Reading'];
const ul_li_list = document.getElementsByClassName("Hobby");
for(let index=0; index<ul_li_list.length; index++){
    ul_li_list[index].innerHTML = "<b>" + change_text[index] + "</b>"
}
