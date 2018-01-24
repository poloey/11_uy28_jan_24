var images = [
  "images/raffalo.jpg",
  "images/tuan.jpg",
  "images/wahl.jpg",
  "images/zuck.jpg",
];
var index = 0;
var image = document.querySelector('img');
// following code for prev 
var prev = document.querySelector('#prev');

function prevFn () {
  index--
  index = index < 0 ? images.length - 1 : index;
  console.log(index);
  image.setAttribute('src', images[index])
}
prev.addEventListener('click', prevFn);

// following code for next 
var next = document.querySelector('#next');

function nextFn () {
  index++
  index = index > images.length - 1 ? 0 : index;
  console.log(index)
  image.setAttribute('src', images[index])
}
next.addEventListener('click', nextFn);


setInterval(nextFn, 3000);