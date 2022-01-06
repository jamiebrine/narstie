//changes image in box on click
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/narstie.jpg') {
      myImage.setAttribute('src','images/narstie2.jpg');
   }
	else {
      myImage.setAttribute('src','images/narstie.jpg');
   }
}

//button that changes user's selected name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
	if (!myName) {
		setUserName()
	}
	else {
   	localStorage.setItem('name', myName);
      myHeading.textContent = 'Big Narstie is cool, ' + myName + '!';
	}
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Big Narstie is cool, ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}