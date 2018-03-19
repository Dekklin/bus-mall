'use strict'
Picture.allPics = [];
Picture.threePics = [];
// constructor
function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath
  this.views = 0
  this.votes = 0
  Picture.allPics.push(this)
}
new Picture('bag' , 'img/bag.jpg');
new Picture('banana' , 'img/banana.jpg');
new Picture('bathroom' , 'img/bathroom.jpg');
new Picture('boots' , 'img/boots.jpg');
new Picture('breakfast' , 'img/breakfast.jpg')
new Picture('bubblegum' , 'img/bubblegum.jpg');
new Picture('chair' , 'img/chair.jpg');
new Picture('cthulu' , 'img/cthulu.jpg');
new Picture('dog-duck' , 'img/dog-duck.jpg');
new Picture('dragon' , 'img/dragon.jpg');
new Picture('pen' , 'img/pen.jpg');
new Picture('pet-sweep' , 'img/pet-sweep.jpg');
new Picture('scissors' , 'img/scissors.jpg');
new Picture('shark' , 'img/shark.jpg');
new Picture('sweep' , 'img/sweep.png');
new Picture('tauntaun' , 'img/tauntaun.jpg');
new Picture('unicorn' , 'img/unicorn.jpg');
new Picture('usb' , 'img/usb.gif');
new Picture('water-can' , 'img/water-can.jpg');
new Picture('wine-glass' , 'img/wine-glass.jpg');


// access the element from the DOM
var imgElement1 = document.getElementById('pic1');
var imgElement2 = document.getElementById('pic2');
var imgElement3 = document.getElementById('pic3');
imgElement1.addEventListener('click', randomPicture);
imgElement2.addEventListener('click', randomPicture);
imgElement3.addEventListener('click', randomPicture);


// random picture generator
function randomPicture() {
  var randomIndex = Math.floor(Math.random() * Picture.allPics.length);
  imgElement1.src = Picture.allPics[randomIndex].filepath;
  imgElement1.alt = Picture.allPics[randomIndex].name;
  Picture.threePics.push(Picture.allPics[randomIndex]);
  console.log(randomIndex);
  console.log(imgElement1);
};

//randomPicture();

// render

//