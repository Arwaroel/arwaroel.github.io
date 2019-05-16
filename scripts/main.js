var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/stairs.jpg') {
      myImage.setAttribute ('src','bilder/pigeons.jpg');
      myImage.setAttribute ('alt','Britain is coming back')
    } else {
      myImage.setAttribute ('src','bilder/stairs.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Bitte geben Sie ihren Namen ein.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome ' + storedName + ' on IDRSworld';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName + ' on IDRSworld';
}

myButton.onclick = function(){
    setUserName();
}