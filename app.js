'use strict';
Picture.allPics = [];
Picture.threePics = [];
var picNames = [];
var picVotes = [];
var voteCounter = 0;
var picList = document.getElementById('piclist');
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
function resultsRender() {
  var arrayOfColors = ['red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue'];
  for(var i in Picture.allPics) {
    picNames.push(Picture.allPics[i].name)
    picVotes.push(Picture.allPics[i].votes);
    var listElement = document.createElement('li');
    listElement.textContent = (Picture.allPics[i].name + ' has ' + Picture.allPics[i].views + ' views and ' + Picture.allPics[i].votes + ' votes.');
    picList.appendChild(listElement);
  }
  var context = document.getElementById('picChart').getContext('2d');
  var picChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: picNames,
      datasets: [{
        label: 'Votes Per Picture',
        data: picVotes,
        backgroundColor: arrayOfColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            //integer intervals
            beginAtZero: true
          }
        }]
      }
    }
  })
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
  if (voteCounter > 24) {
    xfer();
    resultsRender();
    imgElement1.removeEventListener('click', randomPicture);
    imgElement2.removeEventListener('click', randomPicture);
    imgElement3.removeEventListener('click', randomPicture);
  }
  else {
  voteCounter ++
  for(var i in Picture.threePics)
    if(event.target.alt === Picture.threePics[i].name){
      Picture.threePics[i].votes ++
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
};
};