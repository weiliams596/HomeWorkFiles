
const showInfo = `
<h1>Name: ${localStorage.getItem("name")}</h1>
<h2>Father Name: ${localStorage.getItem("fatherName")}</h2>
<h3>Favorite: ${localStorage.getItem("favorite")}</h3>
`;


const div = document.createElement("div");
div.innerHTML = showInfo;
document.body.appendChild(div);

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

const btnSave = document.getElementById("save-btn");
const btnAlert = document.getElementById("alert-btn");
const btnClear = document.getElementById("clear-btn");

btnSave.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("age",ageInput.value);
    alert("Data saved successfully!");
});

btnAlert.addEventListener("click", () => {
    alert(`Name: ${localStorage.getItem("name")}, Age: ${localStorage.getItem("age")}`);
});

btnClear.addEventListener("click", () => {
    localStorage.clear();
});