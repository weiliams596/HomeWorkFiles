

const game_root = document.getElementById('card-root');
game_root.innerHTML = '';

const imageArray = [
    { image: 'Assets/Images/Banana.png', card_index: 0 },
    { image: 'Assets/Images/Cherry.png', card_index: 1 },
    { image: 'Assets/Images/Orange.png', card_index: 2 },
    { image: 'Assets/Images/Plum.png', card_index: 3 },
    { image: 'Assets/Images/Blueberry.png', card_index: 4 },
    { image: 'Assets/Images/Grape.png', card_index: 5 },
    { image: 'Assets/Images/Peach.png', card_index: 6 },
    { image: 'Assets/Images/Pomegranate.png', card_index: 7 },
];

const card = {
    image: '',
    card_index: 0,
    makeCard: function () {
        newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${this.image}" alt="Card front">
            </div>
            <div class="card-back">
                <img src="Assets/Images/bg.jpg" alt="Card background">
            </div>
        </div>
        `;
        game_root.appendChild(newCard);
    }
};

const randomFunc = () => {
    return Math.random() * 100 % 8;
}

const cardMap = [];

const createCards = () => {
    cardMap.forEach(cardIndex => {
        let cardObj = Object.create(card);
        cardObj.image = imageArray[cardIndex].image;
        cardObj.card_index = imageArray[cardIndex].card_index;
        cardObj.makeCard();
        console.log(cardObj);
    });
}

const init = () => {
    let temptArray = [];
    while (cardMap.length < 8) {
        let randomNumb = randomFunc();
        if (!cardMap.length) {
            cardMap.push(parseInt(randomNumb));
        }
        else {
            if (cardMap.includes(parseInt(randomNumb)))
                continue;
            else
                cardMap.push(parseInt(randomNumb));
        }
    }
    while (temptArray.length < 8) {
        let randomNumb = randomFunc();
        if (!temptArray.length) {
            temptArray.push(parseInt(randomNumb));
        }
        else {
            if (temptArray.includes(parseInt(randomNumb)))
                continue;
            else
                temptArray.push(parseInt(randomNumb));
        }
    }
    cardMap.push(...temptArray);
    console.log(cardMap);
    createCards();
}
