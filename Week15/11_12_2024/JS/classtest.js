
const my_title = document.getElementById("title");
my_title.addEventListener("click",()=>{
    my_title.style.color = "red";
    my_title.style.fontSize = "2em";
    my_title.style.textDecoration = "underline";
})



function handleClick(event) {
    my_title.style.color = "blue";
    my_title.textContent="This is change!";
    event.target.style.backgroundColor = "yellow";
}

const my_box = document.getElementById("box");
my_box.addEventListener("mouseenter", ()=>{
    my_box.style.borderRadius="50%";
    my_box.style.transitionDuration="1s";
});

var count =0;
const my_heart = document.getElementById("heart");
const my_mark_text=document.getElementById("top-right-mark");
my_heart.addEventListener('click',()=>{
    count++;
    my_mark_text.textContent=count;
});