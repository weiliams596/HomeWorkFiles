const game_root = document.getElementById('card-root');
game_root.innerHTML = '';

const timer_root = document.getElementById('time');
const player_root = document.getElementById("player");
const Score_root = document.getElementById('score');

let check_cards = [];
let Score = 0;

let outTime = 35;

var cardMap = [];
let playerName = '';

let timer = null;


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
        if (check_cards[0].card_index === check_cards[1].card_index) {
            check_cards[0].isRight = true;
            check_cards[1].isRight = true;
            check_cards = [];
            outTime += 5;
            Score += 2;
            if (allCompleted()) {
                setTimeout(() => {
                    clearInterval(timer);
                    if (prompt("Do you play agian?(Type 'y' to try again)").toLowerCase() == 'y') {
                        reStart();
                    }
                },2500);
            }
            return true;
        }
        else {
            let temp = [];
            check_cards.map(card => { temp.push(card); });
            check_cards[0].isRight = false;
            check_cards[1].isRight = false;
            setTimeout(() => {
                temp[0].node.click();
                temp[1].node.click();
            }, 500);
            outTime -= 2;

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
        // newCard.addEventListener('click', (e) => {
        //     if (this.isRight) return;
        //     this.isClicked = !this.isClicked;
        //     this.flipCard();
        //     checkCard();
        // });
        this.node = newCard;
        game_root.appendChild(newCard);
    },
    flipCard: function () {
        if (this.isClicked) {
            check_cards.push(this);
            this.node.classList.add('oc-flip-card');
        } else {
            check_cards.splice(check_cards.indexOf(this), 1);
            this.node.classList.remove('oc-flip-card');
        }
    }
};


const randomFunc = () => {
    return Math.random() * 100 % 8;
}

const allCompleted = () => {
    let isCompleted = true;
    cardMap.map(card => {
        if (!card.isRight) {
            isCompleted = false;
        }
    });
    return isCompleted;
}

const createCards = () => {
    let temptArray = [];
    temptArray = cardMap.map(index => {
        let cardObj = Object.create(card);
        cardObj.image = imageArray[index].image;
        cardObj.card_index = imageArray[index].card_index;
        cardObj.makeCard();
        return cardObj;
    });
    cardMap = [];
    cardMap.push(...temptArray);
    console.log(cardMap);
    cardMap.map(card => {
        card.node.classList.add('oc-flip-card');
    });
}

const reStart = () => {
    game_root.innerHTML = '';
    init();
}

const init = () => {
    let temptArray = [];
    cardMap = [];
    outTime = 35;
    Score_root.textContent = Score;
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

    do {
        playerName = prompt('Plase enter your name:');
    } while (playerName == '' || playerName == null || playerName == undefined);
    player_root.textContent = playerName;


    createCards();


    setTimeout(() => {
        cardMap.map(card => {
            card.node.classList.remove('oc-flip-card');
            card.node.addEventListener('click', (e) => {
                if (card.isRight) return;
                card.isClicked = !card.isClicked;
                card.flipCard();
                checkCard();
            });
        });
    }, 5000);



    timer = setInterval(() => {
        outTime--;
        if (outTime < 0) {
            outTime = 0;
            clearInterval(timer);
            if (prompt("Do you try agian?(Type 'y' to try again)").toLowerCase() == 'y') {
                reStart();
            }
        }
        timer_root.textContent = outTime + 's';
    }, 1000);
}



init();
