

let myButton = document.querySelector('button');
let myImage = document.querySelector('img');

myButton.onclick = function() {
	let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/blank-icon.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
