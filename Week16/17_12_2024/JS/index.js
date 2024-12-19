const section = document.getElementById('section');

const data = [
    { title: '" Абай жолы" - МұхтарӘуезов', description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.' },
    { title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов', description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.' },
    { title: '"Көшпенділер" - Ілияс Есенберлин', description: 'Қазақ хандығының қалыптасу тарихы.' },
    { title: '"За нами Москва" - Александр  Бек', description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.' }
];

function changeStyle(){
    section.style.display = 'grid';    
    section.style.gridTemplateColumns = 'repeat(4,1fr)';
    section.style.gridTemplateRows = `repeat(${parseInt(section.children.length%4?section.children.length/4:section.children.length/4 +1)} , 1fr)`;
    section.style.gap = '20px';
}

function makeCard() {
    data.forEach(item => {
        const newCard = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        title.textContent = item.title;
        description.textContent =item.description;
        newCard.classList.add('card');
        newCard.appendChild(title);
        newCard.appendChild(description);
        section.appendChild(newCard);
    });
    changeStyle();
}

makeCard();