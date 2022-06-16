const numbers = ['00', '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21'
];

const names = ['The Fool', 'The Magician', 'High Priestess', 'The Empress',
    'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength',
    'The Hermit', 'Wheel of Fortune', 'The Justice', 'The Hanged Man', 'The Death',
    'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'The Judgement',
    'World'
];

const container = document.getElementById('container');
let positions = [];
const shuffleBtn = document.getElementById('shuffleBtn');

function createCards(numbers, topIndex, leftIndex) {
    const cardElement = document.createElement('div');

    cardElement.classList.add('card');

    const TOP = topIndex + 'px';
    const LEFT = leftIndex + 'px';

    cardElement.style.top = TOP;
    cardElement.style.left = LEFT;

    positions.push([TOP, LEFT]);

    cardElement.innerHTML = `
    <img class="card-img" src="./img/Card Back.jpg" id="${numbers}"/>
    `;

    container.appendChild(cardElement);

}

var topIndex = 100;
var leftIndex = 120;

numbers.forEach(number => {
    createCards(number, topIndex, leftIndex);

    if (leftIndex >= 1000) {
        leftIndex = 0;
        topIndex += 175;
    }
    leftIndex += 120;

});

const cards = document.querySelectorAll('.card');

shuffleBtn.addEventListener('click', () => {

    cards.forEach((card, idx) => {

        setTimeout(() => {
            card.style.zIndex = 22 - idx;
            card.style.top = '50%';
            card.style.left = '50%';
        }, idx * 50);

    })

    // at 3s
    setTimeout(shuffleBack, 50 * 22 + 200);
    setTimeout(showBack, 50 * 22 + 500);

})

function shuffleBack() {
    //shuffle the positions
    shufflePositions();

    cards.forEach((card, idx) => {

        setTimeout(() => {
            card.style.top = positions[idx][0];
            card.style.left = positions[idx][1];
        }, idx * 150);

    })


}

function shufflePositions() {
    for (let i = 0; i < 500; i++) {

        const rand1 = Math.floor(Math.random() * 22);
        const rand2 = Math.floor(Math.random() * 22);

        const temp = positions[rand1];
        positions[rand1] = positions[rand2];
        positions[rand2] = temp;

    }
}

const text = document.getElementById('text');

function showBack() {

    let showIndex = Math.floor(Math.random() * 22);

    if (showIndex < 10) {
        showIndex = Number("0" + showIndex);
    }

    console.log(showIndex)

    let card = document.getElementById(`${showIndex}`);
    let title = "";
    if (card != null) {
        card.setAttribute('src', `./img/${showIndex}.jpg`);
        card.style.filter = "brightness(1)";
        title = names[showIndex];
        console.log(title)
        text.innerText = `${title}`;
    } else {


        showIndex = Math.floor(Math.random() * 22);

        if (showIndex < 10) {
            showIndex = Number("0" + showIndex);
        }

        card = document.getElementById(`${showIndex}`);

        if (card != null) {
            card.setAttribute('src', `./img/${showIndex}.jpg`);
            card.style.filter = "brightness(1)";
            title = names[showIndex];
            console.log(title)
            text.innerText = `${title}`;
        } else {
            text.innerText = "Can't idenify the card. Please shuffle & draw again!"
        }


    }

    showIndex = 0;

}