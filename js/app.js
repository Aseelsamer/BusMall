<<<<<<< HEAD

'use strict';
=======
/* eslint-disable no-unused-vars */

'use strict';
// var names =[
//   'bag',
//   'banana',
//   'bathroom',
//   'boots',
//   'breakfast',
//   'bubblegum',
//   'chair',
//   'cthulhu',
//   'dog-duck',
//   'dragon',
//   'pen',
//   'pet-sweep',
//   'scissors',
//   'shark',
//   'tauntaun',
//   'unicorn',
//   'water-can',
//   'sweep',
//   'usb'
// ];

var clicksSecound=0;
var updatedclicks=0;
>>>>>>> 6f2bdc5a24d4d77467e7ff9810a0d1a10d8ce2eb
var leftImage =document.getElementById('leftImage');
var rightImage = document.getElementById('rightImage');
var middleImage = document.getElementById('middleImage');

Mall.all=[];
function Mall(mName, src) {
  this.mallNmae = mName;
  this.src= src;
  this.views=0;
  this.clicks=0;
  Mall.all.push(this);
}
<<<<<<< HEAD

=======
var randomArray=[];
var names =[];
for (var i=0;i<names.length;i++){
  new Mall(names[i]);
}
console.log(Mall.all);
>>>>>>> 6f2bdc5a24d4d77467e7ff9810a0d1a10d8ce2eb

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getrandomImages(min,max){
  var rand1= randomNumber(min,max);
  var rand2= randomNumber(min,max);
  var rand3= randomNumber(min,max);

  while(randomArray.includes(rand1)||randomArray.includes(rand2)||randomArray.includes(rand3)){
    rand1 = randomNumber(min,max);
    rand2=randomNumber(min,max);
    rand3=randomNumber(min,max);
  }
  randomArray=[rand1,rand2,rand3];

  return randomArray;
}


new Mall ('bag', 'assets/bag.jpg');
new Mall ('banana','assets/banana.jpg');
new Mall ('bathroom', 'assets/bathroom.jpg');
new Mall ('boots', 'assets/boots.jpg');
new Mall ('breakfast', 'assets/breakfast.jpg');
new Mall ('bubblegum', 'assets/bubblegum.jpg');
new Mall ('chair', 'assets/chair.jpg');
new Mall ('cthulhu', 'assets/cthulhu.jpg');
new Mall ('dog-duck', 'assets/dog-duck.jpg');
new Mall ('dragon', 'assets/dragon.jpg');
new Mall ('pen', 'assets/pen.jpg');
new Mall ('pet-sweep', 'assets/pet-sweep.jpg');
new Mall ('scissors', 'assets/scissors.jpg');
new Mall ('shark', 'assets/shark.jpg');
new Mall ('sweep', 'assets/sweep.png');
new Mall ('tauntaun', 'assets/tauntaun.jpg');
new Mall ('unicorn', 'assets/unicorn.jpg');
new Mall ('usb', 'assets/usb.gif');
new Mall ('water-can', 'assets/water-can.jpg');
new Mall ('wine-glass', 'assets/wine-glass.jpg');

var stuff1;
var stuff2;
var stuff3;
function renderImages(){
  var randArray=getrandomImages(0,(Mall.length-1));

<<<<<<< HEAD
var rounds=[];
var ifexisits;

=======
  stuff1 = Mall[randArray[0]];
  stuff2 = Mall[randArray[1]];
  stuff3 = Mall[randArray[2]];
  render();
}
renderImages();
>>>>>>> 6f2bdc5a24d4d77467e7ff9810a0d1a10d8ce2eb
var leftMall , rightMall , middleMall;
function render (){
  do {
    ifexisits=false; //vairable to store if any of current round picture equal any of previous one
    leftMall = Mall.all[randomNumber(0,Mall.all.length - 1)];
    rightMall = Mall.all[randomNumber(0,Mall.all.length - 1)];
    middleMall = Mall.all[randomNumber(0,Mall.all.length - 1)];
    for (var i=0;i<rounds.length;i++){
      if (rounds[i]===leftMall || rounds[i]===rightMall || rounds[i]===middleMall){
        ifexisits=true;
        break;
      }else { ifexisits=false;}

    }
  }while(leftMall===middleMall || leftMall===rightMall|| middleMall===rightMall ||ifexisits===true );

  rounds=[];

  rounds.push(leftMall);
  rounds.push(rightMall);
  rounds.push(middleMall);

<<<<<<< HEAD
=======

  leftMall = Mall.all[randomNumber(0,Mall.all.length - 1)];
  rightMall = Mall.all[randomNumber(0,Mall.all.length - 1)];
  middleMall = Mall.all[randomNumber(0,Mall.all.length - 1)];

>>>>>>> 6f2bdc5a24d4d77467e7ff9810a0d1a10d8ce2eb

  console.log(leftMall);
  console.log(rightMall);
  console.log(middleMall);

  leftImage.setAttribute('src',leftMall.src);
  leftImage.setAttribute('alt',leftMall.mallNmae);
  leftImage.setAttribute('title',leftMall.mallNmae);

  rightImage.setAttribute('src',rightMall.src);
  rightImage.setAttribute('alt',rightMall.mallNmae);
  rightImage.setAttribute('title',rightMall.mallNmae);

  middleImage.setAttribute('src',middleMall.src);
  middleImage.setAttribute('alt',middleMall.mallNmae);
  middleImage.setAttribute('title',middleMall.mallNmae);

}


var imageSection = document.getElementById('imageSection');
imageSection.addEventListener('click' , handleClickonMall);
var totalClick=0;

function handleClickonMall (event) {
  console.log(event.target.id);
  event.preventDefault();


  if (totalClick <25 ){
    if (event.target.id !== 'imageSection'){
      totalClick++;
      console.log(totalClick);
      rightMall.views++;
      leftMall.views++;
      middleMall.views++;

      if (event.target.id ==='leftImage'){
        leftMall.clicks++;
      }
      if (event.target.id === 'rightImage'){
        rightMall.clicks++;
      }
      if (event.target.id === 'middleImage'){
        middleMall.clicks++;
      }
      clickStore();
      render();
    }
    if(totalClick === 25) {
      // renderSummary();
      document.getElementById('button').addEventListener('click',renderSummary);
      console.log(totalClick);
      mallStorage();
    }

  }

}

function renderSummary() {
  imageSection.removeEventListener('click',handleClickonMall);

  var ulE1=document.getElementById('finalresults');
  for (var i=0;i<Mall.all.length;i++){
    var liE=document.createElement('li');
    ulE1.appendChild(liE);
    liE.textContent = `${Mall.all[i].mallNmae} has ${Mall.all[i].clicks} clicks and ${Mall.all[i].views} views`;
    renderChart();
  }
}

function mallStorage(){
  var orders=JSON.stringify(Mall.all);
  localStorage.setItem('Mall' , orders);
}
function getMall(){
  var food=localStorage.getItem('Mall');
  var food2=JSON.parse(food);

  if (food2){
    Mall.all=food;
  }
}
getMall();

function clickStore() {
  var clicksString = JSON.stringify(totalClick);
  localStorage.setItem('Clicks',clicksString);
}


function numOfclc() {
  var clicksString = localStorage.getItem('Clicks');
  var data=JSON.parse(clicksString);

  if (data) {
    totalClick=data;
  }
}

console.log(totalClick);

numOfclc();


var view=[];
var numofClick=[];


function renderChart(){
  for(var i=0;i<Mall.all.length;i++){
    view.push(Mall.all[i].views);
  }
  for(var i=0;i<Mall.all.length;i++){
    numofClick.push(Mall.all[i].clicks);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar', //pie, line
    data: {
      labels: ['bag',
        'banana',
        'bathroom',
        'boots',
        'breakfast',
        'bubblegum',
        'chair',
        'cthulhu',
        'dog-duck',
        'dragon',
        'pen',
        'pet-sweep',
        'scissors',
        'shark',
        'tauntaun',
        'unicorn',
        'water-can',
        'sweep',
        'usb'],
      datasets: [{
        label: '# of clicks',
        data: numofClick,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      },
      {
        label: '# of Views',
        data: view,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });}
