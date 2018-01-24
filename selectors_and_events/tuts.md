# javascript selector    

###  element selector 

~~~js
document.getElementById('some id')
document.querySelector('.hello');
~~~

###  array of elements selector 

~~~js
// id 
// class 
// tag 
// attribute selector 
document.getElementsByTagName('h1')
document.querySelectorAll('css selector');
~~~

# event listener

* onclick
* onmouseover

But we will use `addEventListener` in most of the case.    

~~~js
var h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
  alert('hello world')
});



~~~





