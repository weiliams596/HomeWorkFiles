const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

let studentsData = [];

function init() {
    if (localStorage.getItem("studentsData") !== null)
        studentsData=JSON.parse(localStorage.getItem("studentsData"));
}

init();

function addStudent() {
    const name = nameInput.value;
    const age = ageInput.value;
    const student = { name, age };
    studentsData.push(student);
    localStorage.setItem("studentsData",JSON.stringify(studentsData));
    alert("Student added successfully!");
}

function showAllStudents() {
    let index = 0;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = studentsData.map(student => `index: ${index++} - Name: ${student.name} - Age: ${student.age}`).join("<br>");
    document.body.appendChild(newDiv);
}

const addBtn = document.getElementById("insert-btn");
const showBtn = document.getElementById("show-btn");
const clearBtn = document.getElementById("clear-btn");

addBtn.addEventListener("click",(e) => {e.preventDefault(); addStudent()});
showBtn.addEventListener("click",e=> {e.preventDefault(); showAllStudents()});
clearBtn.addEventListener("click", () => {
    studentsData = [];
    localStorage.setItem("studentsData", JSON.stringify(studentsData));
    alert("All students cleared successfully!");
});