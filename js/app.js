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



var leftImage =document.getElementById('leftImage');
var rightImage = document.getElementById('rightImage');
var middleImage = document.getElementById('middleImage');

Mall.all=[];
function Mall(mName, src) {
  this.mallNmae = mName;
  this.src= src ;
  this.views=0;
  this.clicks=0;
  Mall.all.push(this);
}

// var names =[];
// for (var i=0;i<names.length;i++){
//   new Mall(names[i]);
// }
console.log(Mall.all);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

var rounds=[];
var ifexisits;

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

render();

var imageSection = document.getElementById('imageSection');
imageSection.addEventListener('click' , handleClickonMall);
var totalClick=0;

function handleClickonMall (event) {
  console.log(event.target.id);

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

      render();
    }
    if(totalClick === 25) {
      // renderSummary();
      document.getElementById('button').addEventListener('click',renderSummary);
      console.log(totalClick);
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
  }
}
