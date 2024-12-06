
const students = [
    {
        name: "Asan",
        age: 15,
        grades: {
            math: 85,
            english: 90,
            science: 80
        },
        address: {
            country: "Kazahstan",
            city: "Almaty",
            street: "Abaya"
        }
    },
    {
        name: "Alymjan",
        age: 18,
        grades: {
            math: 90,
            english: 95,
            science: 90
        },
        address: {
            city: "Almaty",
            street: "Baikonyr"
        }
    },
];

function ShowInfo(param) {
    return `Aty: ${param.name} \nJasy : ${param.age} \nMemyleket: ${param.address.country ? param.address.country : "Kazahstan"} 
    Kalasy : ${param.address.city} \nKoshesy : ${param.address.street} \nMatematika : ${param.grades.math} \nIngliz : ${param.grades.english} 
    Fizika : ${param.grades.science} `
}

function Task1() {
    console.log("Task 1");
    for (student of students) {
        console.log(ShowInfo(student));
    }
}

Task1();

const classA = ["Magauiya", "Islam", "Sanjar", "Symbat", "Sagymjan"];
const classB = ["Erkejan", "Erkejan", "Cagnysh", "Eldoc", "Erdoc"];

function makeAppendArray(arr1, arr2) {
    return [...arr1, ...arr2];
}

function Task2() {
    console.log("Task 2");
    let result = makeAppendArray(classA, classB);
    result = makeAppendArray(['Директор'], result);
    result = makeAppendArray(result,['Мұғалім']);
    console.log(result);
}

Task2();