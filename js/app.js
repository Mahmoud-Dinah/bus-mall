'use strict'



let leftImageElment = document.getElementById('leftImage');
let midImageElment = document.getElementById('midImage');
let rightImageElment = document.getElementById('rightImage');

let count = 0;
let maxAttemp = 5;

let leftIndex;
let midIndex;
let rightIndex;
Bus.allOfThem = [];

function Bus(name, source) {
    this.name = name;
    this.sourc = source;
    this.show = 0;
    this.vote = 0;
    Bus.allOfThem.push(this);
}
console.log(Bus.allOfThem);
new Bus('bag', 'img/bag.jpg');
new Bus('banana', 'img/banana.jpg');
new Bus('bathroom', 'img/bathroom.jpg');
new Bus('boots', 'img/boots.jpg');
new Bus('breakfast', 'img/breakfast.jpg');
new Bus('bubblegum', 'img/bag.jpg');
new Bus('chair', 'img/chair.jpg');
new Bus('cthulhu', 'img/cthulhu.jpg');
new Bus('dog-duck', 'img/dog-duck.jpg');
new Bus('dragon', 'img/dragon.jpg');
new Bus('pen', 'img/pen.jpg');
new Bus('pet-sweep', 'img/pet-sweep.jpg');
new Bus('scissors', 'img/scissors.jpg');
new Bus('shark', 'img/shark.jpg');
new Bus('sweep', 'img/sweep.png');
new Bus('tauntaun', 'img/tauntaun.jpg');
new Bus('unicorn', 'img/unicorn.jpg');
new Bus('usb', 'img/usb.gif');
new Bus('water-can', 'img/water-can.jpg');
new Bus('wine-glass', 'img/wine-glass.jpg');


function render() {
    leftIndex = genrateRandomIndex();
    midIndex = genrateRandomIndex();
    rightIndex = genrateRandomIndex();

    while ((leftIndex === midIndex) || (leftIndex === midIndex) || (midIndex === rightIndex)) {
        leftIndex = genrateRandomIndex();
        midIndex = genrateRandomIndex();

    }

    leftImageElment.src = Bus.allOfThem[leftIndex].sourc;
    midImageElment.src = Bus.allOfThem[midIndex].sourc;
    rightImageElment.src = Bus.allOfThem[rightIndex].sourc;
}
render();
// console.log(leftIndex);
// console.log(midIndex);
// console.log(rightIndex);


leftImageElment.addEventListener('click', handelClicking);
midImageElment.addEventListener('click', handelClicking);
rightImageElment.addEventListener('click', handelClicking);


function handelClicking(event) {
    count++;
    if (maxAttemp >= count) {

        if (event.target.id === 'leftImage') {
            Bus.allOfThem[1].vote++;
        } else if (event.target.id === 'rightImage') {
            Bus.allOfThem[1].vote++;
        } else if (event.target.id === 'midImage') {
            Bus.allOfThem[1].vote++;
        } render();
        console.log(event.target.id);

    } else {
        renderUl();
        leftImageElment.removeEventListener('click', handelClicking)
        midImageElment.removeEventListener('click', handelClicking)
        rightImageElment.removeEventListener('click', handelClicking)
    }
}

function renderUl() {
    let ul = document.getElementById('list');
    for (let i = 0; i < Bus.allOfThem.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li);
        li.textContent = `${Bus.allOfThem[i].name} had ${Bus.allOfThem[i].vote} , and was seen  times`

    }
}






function genrateRandomIndex() {
    return Math.floor(Math.random() * Bus.allOfThem.length);
}
//  console.log(genrateRandomIndex());
