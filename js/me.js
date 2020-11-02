/* eslint-disable no-empty */
'use strict';

var leftImage=document.getElementById('leftImage');
var rightImage=document.getElementById('rightImage');
var middleImage=document.getElementById('middleImage');

console.log(leftImage);
console.log(rightImage);
console.log(middleImage);

Mall.all=[];
function Mall(mName,src){
  this.name=mName;
  this.src=src;
  this.views=0;
  this.clicks=0;
  Mall.all.push(this);
}
console.log(Mall.all);

new Mall('bag','assets/bag.jpg');
new Mall('breakfast','assets/breakfast.jpg');
new Mall('boots','assets/boots.jpg');
new Mall('bathroom','assets/bathroom.jpg');
new Mall('chair','assets/chair.jpg');
new Mall('dog-duck','assets/dog-duck.jpg');
new Mall('pen','assets/pen.jpg');
new Mall('scissors','assets/scissors.jpg');
new Mall('shark','assets/shark.jpg');
new Mall('unicorn','assets/unicorn.jpg');

var totalClick=0;

// Mall.leftMall.totalClick;
// Mall.rightMall.totalClick;
// Mall.middleMall.totalClick;

var leftMall,rightMall,middleMall;

function render(){
  var leftMall=Mall.all[randomNumber(0,Mall.all.length-1)];
  var rightMall=Mall.all[randomNumber(0,Mall.all.length-1)];
  var middleMall=Mall.all[randomNumber(0,Mall.all.length-1)];


  leftImage.setAttribute('src',leftMall.src);
  leftImage.setAttribute('title',leftMall.mName);
  leftImage.setAttribute('alt',leftMall.mName);

  middleImage.setAttribute('src',middleMall.src);
  middleImage.setAttribute('title',middleMall.mName);
  middleImage.setAttribute('alt',middleMall.mName);

  rightImage.setAttribute('src',rightMall.src);
  rightImage.setAttribute('title',rightMall.mName);
  rightImage.setAttribute('alt',rightMall.mName);

}
render();
function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

var imagesSection=document.getElementById('imageSection');
imagesSection.addEventListener('click',handleClickonMall);




function handleClickonMall(event){
  if(totalClick<5){
    if(event.target.id !== 'imagesSection'){
      totalClick++;

      console.log(rightMall);
      console.log(middleMall);
      console.log(leftMall);

      rightMall.views++;
      middleMall.views++;
      leftMall.views++;

    }if (event.target.id === 'leftImage'){
      leftMall.clicks++;
    }if (event.target.id ===' middleImage'){
      middleMall.clicks++;
    }if (event.target.id ===' rightImage'){
      rightMall.clicks++;
    }
    render();
  }
  else if (totalClick===5){
    renderSummary();
    console.log(totalClick);
  }

}

function renderSummary(){
  imagesSection.removeEventListener('click',handleClickonMall);
  var summary=document.getElementById('finalresults');
  var ulE1=document.createElement('ul');
  summary.appendChild(ulE1);

  for (var i=0;i<Mall.all.length;i++){
    var liE1=document.createElement('li');
    ulE1.appendChild(liE1);
    liE1.textContent=`${Mall.all[i].name} has ${Mall.all[i].views} number of views and ${Mall.all[i].clicks}number of clicks`;
  }
}
