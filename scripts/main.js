var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = () => {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Logo.png') {
    myImage.setAttribute('src', 'images/Logo2.png');
  } else {
    myImage.setAttribute('src', 'images/Logo.png');
  }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (!myName) {
    return;
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = `Все о Firefox, ${myName}`;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = `Все о Firefox, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};