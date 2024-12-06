// let someObj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     job: "Software Engineer"
// }

// //  Get someObj's name property
// //  And get other properties saved in others

// let {name,...others}=someObj;
// console.log(name); // John
// console.log(others); // {age: 30, city: "New York", job: "Software Engineer"}

// let someArray = [1, 2, 3, 4, 5];

//  Get the first two elements of someArray
// //  And get the rest of the elements saved in the rest

// let [first, second,...rest] = someArray;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]


// let person = {
//     name : prompt("Enter your name"),
//     age : +prompt("Enter your age"),
//     hobby : prompt("Enter your hooby"),
//     allInfo:function(){
//         return `Name: ${this.name}, Age: ${this.age}, Hobby: ${this.hobby}`;
//     }
// }

// alert(person.allInfo());

// let {name, age, hobby} = person;

// if(age <0){
//     alert("Invalid age");
// }
// else if (age < 18){
//     alert("You are underage");
// }
// else{
//     alert("You are eligible to vote");
// }

// // Class end test 1
// const book = {title:"Абай жолы",author:"Мұхтар Әуезов",year: 1942}
// let {title, author, year} = book;
// console.log(title); // Абай жолы
// console.log(author); // Мұхтар Әуезов
// console.log(year); // 1942


// // Class end test 2
// const fruits = ["Алма", "Алмұрт", "Шие"];
// let [first, ...rest] = fruits;
// console.log(first); // Алма
// console.log(rest); // ["Алмұрт", "Шие"]

// // Class end test 3
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5, 6]

// // Class end test 4
// const user ={name : "Али",age :25}

// const otherUser = {...user, city : "New York"};

// console.log(user); // Али
// console.log(otherUser); // {name: "Али", age: 25, city: "New York"}



const myClass = {
    students: [
        { name: "Sanjar", age: 20, hobby: "Working" },
        { name: "Smbat", age: 18, hobby: "Reading" },
        { name: "Elnura", age: 18, hobby: "Playing sport" }
    ],
    makeChoose: function (chos) {
        if (chos.toLowerCase() === "add") {
            this.students.push({ name: prompt("Enter name"), age: +prompt("Enter age"), hobby: prompt("Enter hobby") });
        }else if(chos.toLowerCase() === "show"){
            this.students.forEach(student => console.log(student.name + " " + student.age + " " + student.hobby));
        }
        else{
            console.log("Invalid choice");
        }
    },
    showAll: function () {
        this.students.forEach(student => console.log(student.name + " " + student.age + " " + student.hobby));
    }
}

myClass.makeChoose(prompt("Enter choice (add/show): "));
myClass.showAll();
