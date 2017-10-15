var body = document.querySelector("body");
var dark = document.querySelectorAll(".dark");
var head = document.querySelectorAll(".light");
var envelope = document.querySelector('.glyphicon-envelope');
var email = document.querySelector('#email');
var btn	= document.querySelectorAll(".btn")

body.style.backgroundColor = "rgb(87, 93, 98)";

function randomColorPalette(){
	var colorPalette= {}
	//pick random colors within a neutral range
	var red = Math.floor(Math.random()*(100-60+1)+60);
	var green = Math.floor(Math.random()*(100-60+1)+60);
	var blue = Math.floor(Math.random()*(100-60+1)+60);
	
	//create a darker color by multiplying base rgb by 90%
	var redDark = Math.floor(red*0.8);
	var blueDark = Math.floor(blue*0.8);
	var greenDark = Math.floor(green*0.8);
	
	//create a lighter color by multiplying base rgb by 1.5
	var redLight = Math.floor(red*1.75);
	var blueLight = Math.floor(blue*1.75);
	var greenLight = Math.floor(green*1.75);
	
	colorPalette[0]  = "rgb(" + red + ", " + green + ", " + blue + ")";
	colorPalette[1] = "rgb(" + redDark + ", " + greenDark + ", " + blueDark + ")";
	colorPalette[2] = "rgb(" + redLight + ", " + greenLight + ", " + blueLight + ")";
	return colorPalette
}
function changeColor(e){
	var keyCode = e.keyCode;
	if(keyCode === 32){
		var newRand = randomColorPalette()
		body.style.backgroundColor = newRand[0]; 
		for(var i = 0; i<head.length; i++) {
			head[i].style.color = newRand[2]; 
		}; 
		for(var i = 0; i<dark.length; i++) {
			dark[i].style.color = newRand[1]; 
		}; 
	}
}

window.addEventListener("keypress", changeColor, false);
