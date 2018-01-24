/*

setInterval
setTimeout
clearInterval
document.querySelector
document.querySelectorAll
this keyword


 */
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');

var listOfImage = [
  "images/raffalo.jpg",
  "images/zuck.jpg",
  "images/wahl.jpg",
  "images/tuan.jpg",
];

var index = 0;
var image = document.querySelector('img');

function nextFn () {
  index++;
  index = index > listOfImage.length - 1 ? 0 : index;
  image.setAttribute('src', listOfImage[index]);
}
// next.onclick = nextFn;
next.addEventListener('click', nextFn)

function prevFn () {
  index--;
  index = index < 0 ? listOfImage.length - 1 : index;
  image.setAttribute('src', listOfImage[index]);
}
// next.onclick = nextFn;
prev.addEventListener('click', prevFn)


var slideshow = setInterval(nextFn, 500);


setTimeout(function () {
  clearInterval(slideshow);
}, 10000);

