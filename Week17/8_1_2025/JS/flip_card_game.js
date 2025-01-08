const game_root = document.getElementById('card-root');
game_root.innerHTML = '';

let check_cards = [];

const cardMap = [];

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

const checkCard = () => {
    if (check_cards.length === 2) {
        console.log(check_cards);
        if(check_cards[0].card_index === check_cards[1].card_index){
            console.log('match');
            check_cards[0].isRight = true;
            check_cards[1].isRight = true;
            check_cards = [];
            return true;
        }
        else {
            let temp =[];
            check_cards.map(card => {temp.push(card);});
            console.log('not match');
            check_cards[0].isRight = false;
            check_cards[1].isRight = false;
            temp[0].node.click();
            temp[1].node.click();
            return false;
        }
    }
}

const card = {
    image: '',
    card_index: 0,
    isClicked: false,
    isRight: false,
    node: null,
    makeCard: function () {
        let newCard = document.createElement('div');
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
        newCard.addEventListener('click', (e) => {
            if(this.isRight)return;
            this.isClicked=!this.isClicked;
            this.flipCard();
            checkCard();
        });
        this.node = newCard;
        game_root.appendChild(newCard);
    },
    flipCard: function () {
        if (this.isClicked) {
            check_cards.push(this);
            this.node.classList.add('oc-flip-card');
        }else{
            check_cards.splice(check_cards.indexOf(this),1);
            this.node.classList.remove('oc-flip-card');
        }
        console.log(check_cards);
    }
};


const randomFunc = () => {
    return Math.random() * 100 % 8;
}

const createCards = () => {
    cardMap.map(index=>{
        let cardObj = Object.create(card);
        cardObj.image = imageArray[index].image;
        cardObj.card_index = imageArray[index].card_index;
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
    createCards();
}

init();
