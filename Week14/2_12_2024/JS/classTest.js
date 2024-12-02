// let Object1={
//     name: "John",
//     age: 30,
//     city: "New York",
//     info: function(){
//         return `My name is ${this.name},I'm ${this.age} years old, I live in ${this.city}`
//     }
// }

// console.log(Object1.info());


// let Product={
//     name: "iPhone",
//     price: 999,
//     brand: "Apple",
//     category: "Smartphone",
//     description: "A smartphone with 4G LTE connectivity",
//     discount:(discount)=>{return this.price * discount},
//     showInfo: function(){
//         // console.log(`Name: ${this.name}`);
//         // console.log(`Price: ${this.price}`);
//         // console.log(`Brand: ${this.brand}`);
//         // console.log(`Category: ${this.category}`);
//         // console.log(`Description: ${this.description}`);
//         // console.log(`Discounted Price: ${this.discount()}`);
//         return `Product Information : 
//                 This production name:${this.name}
//                 Product negizgi bagasy:${this.price}
//                 Product skidkamen baga:${this.discount(0.9)}`
//     }
// }

// alert(Product.showInfo());


let filmInsertObj={
    filmNameList:[],
    addFilmWithName:function(filmName){
        if(fileName === null || fileName === "" || fileName === undefined){
            alert("Please enter a valid film name");
        }
        else {
            if(this.filmNameList.includes(fileName)){
                alert("This film is already in the list");
            }
            else{
                this.filmNameList.push(fileName);
                alert("The film has been added to the list");
            }
        }
    },
    // addFilm:function(){
    //     const fileName = prompt("Please enter the name of the film you want to insert:");
    //     if(fileName === null || fileName === "" || fileName === undefined){
    //         alert("Please enter a valid film name");
    //     }
    //     else {
    //         if(this.filmNameList.includes(fileName)){
    //             alert("This film is already in the list");
    //         }
    //         else{
    //             this.filmNameList.push(fileName);
    //             alert("The film has been added to the list");
    //         }
    //     }
    // },
    loopPushFilmName:function(){
        while(true){
            const fileName = prompt("Please enter the name of the film you want to insert:(type 'q' to exit)");
            if(fileName.toLowerCase() === "q"){
                break;
            }
            this.addFilmWithName(fileName);
        }
    },
    showFilms:function(){
        if(this.filmNameList.length === 0){
            alert("There are no films in the list");
        }
        else{
            let filmList = "";
            for(let i=0; i<this.filmNameList.length; i++){
                filmList += this.filmNameList[i] + "\n";
            }
            alert("The list of films:\n" + filmList);
        }
    }
}

filmInsertObj.loopPushFilmName();
filmInsertObj.showFilms();