'use strict'
Picture.allPics = [];
Picture.threePics = [];
var voteCounter = 0;
var picList = document.getElementById('picList');
// constructor
function Picture(name, filepath) {
  this.name = name;
  this.filepath = filepath
  this.views = 0
  this.votes = 0
  Picture.allPics.push(this)
}
function xfer(){
  Picture.allPics.push(Picture.threePics[0]);
  Picture.allPics.push(Picture.threePics[1]);
  Picture.allPics.push(Picture.threePics[2]);
  Picture.threePics.splice(0, 3);
}

new Picture('bag' , 'img/bag.jpg');
new Picture('banana' , 'img/banana.jpg');
new Picture('bathroom' , 'img/bathroom.jpg');
new Picture('boots' , 'img/boots.jpg');
new Picture('breakfast' , 'img/breakfast.jpg')
new Picture('bubblegum' , 'img/bubblegum.jpg');
new Picture('chair' , 'img/chair.jpg');
new Picture('cthulhu' , 'img/cthulhu.jpg');
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



//On Load
function load() {



  //  else...
  
  
  
  
  var randomIndex1 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement1.src = Picture.allPics[randomIndex1].filepath;
  imgElement1.alt = Picture.allPics[randomIndex1].name;
  Picture.allPics[randomIndex1].views ++;
  Picture.threePics.push(Picture.allPics[randomIndex1]);
  Picture.allPics.splice(randomIndex1, 1);
  
  var randomIndex2 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement2.src = Picture.allPics[randomIndex2].filepath;
  imgElement2.alt = Picture.allPics[randomIndex2].name;
  Picture.allPics[randomIndex2].views ++;
  Picture.threePics.push(Picture.allPics[randomIndex2]);
  Picture.allPics.splice(randomIndex2, 1);
  
  var randomIndex3 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement3.src = Picture.allPics[randomIndex3].filepath;
  imgElement3.alt = Picture.allPics[randomIndex3].name;
  Picture.allPics[randomIndex3].views ++;
  Picture.threePics.push(Picture.allPics[randomIndex3]);
  Picture.allPics.splice(randomIndex3, 1);
  
};

load();

// random picture generator
function randomPicture() {
  if (voteCounter > 4){
    xfer()
      for (var i = 0 ; i < Picture.allPics.length ; i++)
      var liElement = document.createElement('li');
      liElement.textContent = (Picture.allPics[i].votes + ' votes for ' + Picture.allPics[i].name);
      picList.appendChild(liElement);
  }
    else {
  voteCounter ++
  //event.target.votes ++
  //Picture.threePics[event.target].votes ++
  //event.target.votes.value ++
  for(var i = 0; i < Picture.threePics.length; i++)
    if(event.target.alt === Picture.threePics[i].name){
      Picture.threePics[i].votes ++

     // console.log();
    }

  var randomIndex1 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement1.src = Picture.allPics[randomIndex1].filepath;
  imgElement1.alt = Picture.allPics[randomIndex1].name;
  Picture.allPics[randomIndex1].views ++;
  Picture.threePics.push(Picture.allPics[randomIndex1]);
  Picture.allPics.splice(randomIndex1, 1);
  
  var randomIndex2 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement2.src = Picture.allPics[randomIndex2].filepath;
  imgElement2.alt = Picture.allPics[randomIndex2].name;
  Picture.allPics[randomIndex2].views ++;
  Picture.threePics.push(Picture.allPics[randomIndex2]);
  Picture.allPics.splice(randomIndex2, 1);
  
  var randomIndex3 = Math.floor(Math.random() * Picture.allPics.length);
  imgElement3.src = Picture.allPics[randomIndex3].filepath;
  imgElement3.alt = Picture.allPics[randomIndex3].name;
  Picture.allPics[randomIndex3].views ++
  Picture.threePics.push(Picture.allPics[randomIndex3]);
  Picture.allPics.splice(randomIndex3, 1);
  

  Picture.allPics.push(Picture.threePics[0]);
  Picture.allPics.push(Picture.threePics[1]);
  Picture.allPics.push(Picture.threePics[2]);
  Picture.threePics.splice(0, 3);
  //cycle
  console.log(randomIndex1,randomIndex2, randomIndex3);
  console.log(Picture.allPics);
  console.log(Picture.threePics);
  console.log(voteCounter);
//  if (voteCounter > 4){
 //   var li = document.('storeList')
};

//randomPicture();

// render

//
}

//function cycle() {

