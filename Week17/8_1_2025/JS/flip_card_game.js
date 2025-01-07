

const game_root = document.getElementById('card-root');

const imageArray = [
    {image:'Assets/Images/Banana.png', card_index:0},
    {image:'Assets/Images/Cherry.png', card_index:1},
    {image:'Assets/Images/Orange.png', card_index:2},
    {image:'Assets/Images/Plum.png', card_index:3},
];

const card ={
    image:'',
    card_index:0,
    makeCard:function(){
        game_root.innerHTML = `
        <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${this.image}" alt="Card front">
                    </div>
                    <div class="card-back">
                        <img src="Assets/Images/bg.jpg" alt="Card background">
                    </div>
                </div>
            </div>
        `;
    }
};

