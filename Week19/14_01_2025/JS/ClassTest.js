const outjimanye = (otjimanye_sanaq){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        }otjimanye_sanaq*100);
    });
}

const prisedanye = (prisedanye_sanaq){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },prisedanye_sanaq * 100)
    });
};

otjimanye(10).then(()=>{
    console.log("Сіз otjimanye сәтті жасадңіэ");
    return prisedanye(10);
}).then(()=>{
    console.log("Сіз prisedanye сәтті жасадіңіз");
}).catch(()=>{
    console.log("Шәршадым.")
});

