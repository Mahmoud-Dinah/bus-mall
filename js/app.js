'use strict'



let leftImageElment = document.getElementById('leftImage');
let midImageElment = document.getElementById('midImage');
let rightImageElment = document.getElementById('rightImage');
let sec1 = document.getElementById('sec1');

let count = 0;
let maxAttemp = 10;

let leftIndex;
let midIndex;
let rightIndex;
Bus.allOfThem = [];
let arrOfName = [];
function Bus(name, source) {
    this.name = name;
    this.sourc = source;
    this.show = 0;
    this.vote = 0;
    Bus.allOfThem.push(this);
    arrOfName.push(this.name)
}
// console.log(Bus.allOfThem);

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

let newImage = [];
function render() {
    console.log('before',newImage);
    leftIndex = genrateRandomIndex();
    midIndex = genrateRandomIndex();
    rightIndex = genrateRandomIndex();

    while (leftIndex === midIndex || midIndex === rightIndex || leftIndex === rightIndex || newImage.includes(leftIndex) ||newImage.includes(midIndex) || newImage.includes(rightIndex)) {
        
        

        leftIndex = genrateRandomIndex();
        midIndex = genrateRandomIndex();
        rightIndex = genrateRandomIndex();
    }

    newImage = [leftIndex,midIndex,rightIndex];
console.log('after',newImage);

    leftImageElment.src = Bus.allOfThem[leftIndex].sourc;
    Bus.allOfThem[leftIndex].show++;
    midImageElment.src = Bus.allOfThem[midIndex].sourc;
    Bus.allOfThem[midIndex].show++;
    rightImageElment.src = Bus.allOfThem[rightIndex].sourc;
    Bus.allOfThem[rightIndex].show++;
}
render();
// console.log(leftIndex);
// console.log(midIndex);
// console.log(rightIndex);


// leftImageElment.addEventListener('click', handelClicking);
// midImageElment.addEventListener('click', handelClicking);
// rightImageElment.addEventListener('click', handelClicking);

sec1.addEventListener('click',handelClicking)

function handelClicking(event) {
    count++;
    if (maxAttemp >= count) {

        if (event.target.id === 'leftImage') {
            Bus.allOfThem[leftIndex].vote++;
            console.log("leftImage");
        } else if (event.target.id === 'rightImage') {
            Bus.allOfThem[rightIndex].vote++;
            console.log("rightImage");
        } else if (event.target.id === 'midImage') {
            Bus.allOfThem[midIndex].vote++;
            console.log("midImage");
        } 
        // console.log(event.target.id);
             render();
    } else {
        
       sec1.removeEventListener('click',handelClicking);
    }
}

let button = document.getElementById('btn');
button.addEventListener('click', showingList);

function showingList(){
    renderUl();
    chart();
  button.removeEventListener('click',showingList);
}

let arrOfShow = [];
let arrOfVote = [];

function renderUl() {
    let ul = document.getElementById('list');
    for (let i = 0; i < Bus.allOfThem.length; i++) {
        arrOfShow.push(Bus.allOfThem[i].show);
        arrOfVote.push(Bus.allOfThem[i].vote);
        let li = document.createElement('li')
        ul.appendChild(li);
        li.textContent = `${Bus.allOfThem[i].name} had ${Bus.allOfThem[i].vote} , and was seen ${Bus.allOfThem[i].show} times`

    }
}

function genrateRandomIndex() {
    return Math.floor(Math.random() * Bus.allOfThem.length);
}
//  console.log(genrateRandomIndex());

function chart(){
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfName,
        datasets: [{
            label: 'Number of votes',
            data: arrOfVote,
            backgroundColor: [
               
                'rgb(175, 0, 0) '
            ],
            borderColor: [
                
                'rgb(0, 0, 0)'
            ],
            borderWidth: 1
        }, {label: 'Number Of Shown', data: arrOfShow, borderColor: [
                
            'rgb(0, 0, 0)'
        ],borderWidth: 1
    }]
    }
   
})
};
