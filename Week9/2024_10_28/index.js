// This is the one line comment in JS

/* This is the multi-line comment in JS 
    This is second line of the multi-line comment in JS 
    This is third line of the multi-line comment in JS */

console.log("Hello, World!");
console.log("My name is MaHaoYa · AKeMuJiang");
console.log("This is a console log in JS");

function showForm() {
    let bodyDoc = document.querySelector("body");
    let fillDiv = document.createElement("div");
    fillDiv.style.display = "flex";
    fillDiv.style.position = "absolute";
    fillDiv.style.top = "0";
    fillDiv.style.left = "0";
    fillDiv.style.width = window.innerWidth + "px";
    fillDiv.style.height = window.innerHeight + "px";
    fillDiv.style.backgroundColor = "rgba(0,0,0,0.5)";
    let formDoc = document.createElement("form");
    formDoc.className = "alert-form";
    formDoc.id = "alert-form";
    formDoc.style.display = "flex";
    formDoc.style.position = "absolute";
    formDoc.style.justifyContent = "center";
    formDoc.style.alignItems = "center";
    formDoc.style.flexDirection = "column";
    formDoc.style.backgroundColor = "#f2f2f2";
    // formDoc.style.transform="translate(-50%, -50%)";
    formDoc.style.borderRadius = "10px";
    formDoc.style.padding = "20px";
    formDoc.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    formDoc.style.borderRadius = "10px";
    fillDiv.appendChild(formDoc);
    bodyDoc.appendChild(fillDiv);
    let formTitle = document.createElement("h2");
    formTitle.textContent = "Alert Form";
    formTitle.style.textAlign = "center";
    formDoc.appendChild(formTitle);
    let formInmage = document.createElement("img");
    formInmage.src = "https://www.w3schools.com/w3images/avatar2.png";
    formInmage.style.width = "100px";
    formInmage.style.height = "100px";
    formInmage.style.borderRadius = "50%";
    formInmage.style.marginBottom = "20px";
    formDoc.appendChild(formInmage);
    let innerDocument = document.createElement("p");
    innerDocument.style.textAlign = "center";
    innerDocument.innerHTML = "Please select your choose:";
    formDoc.appendChild(innerDocument);
    let greetButton = document.createElement("button");
    greetButton.textContent = "Greet";
    greetButton.style.marginTop = "20px";
    greetButton.style.backgroundColor = "#4CAF50";
    greetButton.style.color = "white";
    greetButton.style.border = "none";
    greetButton.style.padding = "10px 20px";
    greetButton.style.borderRadius = "5px";
    greetButton.style.cursor = "pointer";
    greetButton.onclick = function () {
        fillDiv.remove();
        alert("Hello, World!");
    }
    formDoc.appendChild(greetButton);
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.style.marginTop = "20px";
    cancelButton.style.backgroundColor = "#f44336";
    cancelButton.style.color = "white";
    cancelButton.style.border = "none";
    cancelButton.style.padding = "10px 20px";
    cancelButton.style.borderRadius = "5px";
    cancelButton.style.cursor = "pointer";
    cancelButton.onclick = function () {
        fillDiv.remove();
    }
    formDoc.appendChild(cancelButton);
    
    let topOffset = (window.innerHeight / 2) -formDoc.clientHeight / 2;
    console.log(topOffset);
    let leftOffset = (window.innerWidth / 2) -formDoc.clientWidth / 2;
    console.log(leftOffset);
    topOffset > 0 ? topOffset : -topOffset;
    leftOffset > 0 ? leftOffset : -leftOffset;
    formDoc.style.top = topOffset + "px";
    formDoc.style.left = leftOffset + "px";
    console.log(formDoc.style.top);
    console.log(formDoc.style.left);
}   