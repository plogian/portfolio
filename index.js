// Table of Contents
// ** 1 Page Piling
// ** 2 Color Changing
// ** 3 Fade-Ins
// ** 4 Masonry Effect
// ** 5 Portfolio Functionality

// ** 1 Page Piling

// sets up page piling effect
$(document).ready(function() {
	$('#pagepiling').pagepiling({
		menu: "#menu",
		anchors: ['section1', 'section2', 'section3']
	});
});

// ** 2 Color Changing

// Dark, Light, and Medium Backgrounds
var dark = document.querySelectorAll(".dark");
var medium = document.querySelectorAll(".medium");
var light = document.querySelectorAll(".light");

for(var i=0; i<dark.length; i++) {
	dark[i].style.backgroundColor= "rgb(87, 93, 98)";
}

for(var i=0; i<light.length; i++) {
	light[i].style.backgroundColor= "rgb(152, 162, 171)";
}

for(var i=0; i<medium.length; i++) {
	medium[i].style.backgroundColor= "rgb(120, 125, 135)";
}

// Dark, Light, and Medium Texts
var darkText = document.querySelectorAll(".dark-text");
var mediumText = document.querySelectorAll(".medium-text");
var lightText = document.querySelectorAll(".light-text");

for(var i=0; i<darkText.length; i++) {
	darkText[i].style.color= "rgb(87, 93, 98)";
}

for(var i=0; i<lightText.length; i++) {
	lightText[i].style.color= "rgb(152, 162, 171)";
}

for(var i=0; i<mediumText.length; i++) {
	mediumText[i].style.color= "rgb(120, 125, 135)";
}

// Creates random color palette
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
	
	//create a lighter color by multiplying base rgb by 2
	var redLight = Math.floor(red*2);
	var blueLight = Math.floor(blue*2);
	var greenLight = Math.floor(green*2);
	
	colorPalette[0]  = "rgb(" + red + ", " + green + ", " + blue + ")";
	colorPalette[1] = "rgb(" + redDark + ", " + greenDark + ", " + blueDark + ")";
	colorPalette[2] = "rgb(" + redLight + ", " + greenLight + ", " + blueLight + ")";
	return colorPalette
}

// after press space, change colors based on randomColorPalette
function changeColor(e){
	var keyCode = e.keyCode;
	if(keyCode === 32){
		var newRand = randomColorPalette()
		for(var i = 0; i<dark.length; i++) {
			dark[i].style.backgroundColor = newRand[1]; 
		}; 
		for(var i = 0; i<medium.length; i++) {
			medium[i].style.backgroundColor = newRand[0]; 
		}; 
		for(var i = 0; i<light.length; i++) {
			light[i].style.backgroundColor = newRand[2]; 
		}; 
		for(var i = 0; i<darkText.length; i++) {
			darkText[i].style.color = newRand[1]; 
		}; 
		for(var i = 0; i<mediumText.length; i++) {
			mediumText[i].style.color = newRand[0]; 
		}; 
		for(var i = 0; i<lightText.length; i++) {
			lightText[i].style.color = newRand[2]; 
		}; 
	}
}

window.addEventListener("keypress", changeColor, false);

// Change color of stripe on hover
var stripe = document.querySelector(".stripe");

function changeStripeColor() {
	stripe.style.backgroundColor = light[0].style.backgroundColor;
}

function changeStripeColorBack() {
	stripe.style.backgroundColor = mediumText[0].style.color;
}

stripe.addEventListener("mouseover", changeStripeColor, false);
stripe.addEventListener("mouseleave", changeStripeColorBack, false);

// ** 3 Fade-Ins
var $mainHeading = $("#main-heading");
$mainHeading.css('opacity', 0);

var $stripe = $(".stripe");
$stripe.css('opacity', 0);

var $subHeading = $("#sub-heading");
$subHeading.css('opacity', 0);

var $footer = $(".footer");
$footer.css('opacity', 0);

function fadesHome () {
	$mainHeading.fadeTo(500, 1);
	$stripe.fadeTo(1500, 1);
	$subHeading.fadeTo(2500, 1);
	$footer.fadeTo(3500, 1);
}

fadesHome();

// ** See More
// $('.see-more').bind("click", $.fn.pagepiling.moveSectionDown());
$('.see-more').bind("click", function() {
	$.fn.pagepiling.moveSectionDown();
});




// ** 4 Masonry
// masonry effect for thumbnails
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// ** 5 Portfolio Functionality
// query selectors for portfolio pieces
var tags = document.querySelectorAll(".tags li a");
var portfolioItems = document.querySelectorAll(".grid div")
var portfolioDisplay = document.querySelector("#portfolio-display")

function highlightTags (j){
	return function() {
		if(tags[j].classList.contains("selected-button")) {
			for(var i = 0; i<portfolioItems.length; i++) {
				portfolioItems[i].style.display = "";
			}
			tags[j].classList.remove("selected-button");
		} else {
			for(var i = 0; i<portfolioItems.length; i++) {
				if(!portfolioItems[i].classList.contains(tags[j].textContent.replace(/\s+/g, '').toLowerCase())) {
					portfolioItems[i].style.display = "none";

				} else {
					portfolioItems[i].style.display = "";
				}
			}
			for(var k =0; k<tags.length; k++) {
			tags[k].classList.remove("selected-button");
			}
			tags[j].classList.add("selected-button");
		}
		$('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
	}
}
	

// tags[i].addEventListener("click", highlightTags(i));

for (var i = 0; i<tags.length; i++) {
	tags[i].addEventListener("click", highlightTags(i));
}


// Event listener to blow up portfolio pieces when thumbnail clicked
portfolioItemsArray = ['omdb', 'wholeLife', 'snatcherBot', 'fracking', 'industryByZip', 'dullBot', 'worstCommutes'];

function changeDisplayImage (j) {
	return function (){
		portfolioDisplay.classList.remove(portfolioDisplay.classList[0])

		for(var i=0; i<portfolioItemsArray.length; i++) {
			if(portfolioItems[j].classList.contains(portfolioItemsArray[i])) {
				portfolioDisplay.classList.add(portfolioItemsArray[i])
				break;
			}
		}		
	}
}

for (var i = 0; i<portfolioItems.length; i++) {
	portfolioItems[i].addEventListener("click", changeDisplayImage(i));
}

// Display project details when hover over portfolio item.
var $displayText = $(".portfolio-text")
$displayText.css('opacity', 0);


function displayDetails () {
	function changeDisplay (project, description, link) {
		if(project === "none") {
			var newHTML = "";
		} else {
			var newHTML = description.concat('<hr><button onclick="window.open(\'', link, '\')" class="btn">See Project</button>');
		}
		$displayText.html(newHTML);
	}
	
	var project = ""
	var description = ""
	var link = ""	

	// test the class
	if(portfolioDisplay.classList.contains("omdb")) {
		project = "omdb"
		description = "Application to update and search 3.5 million item movie database"
		link = "https://plogian.github.io/omdb_search_copy/home.html"
		
	} else if (portfolioDisplay.classList.contains("wholeLife")) {
		project = "Whole Life"
		description = "Website for local non-profit, which uses Wordpress for content management"
		link = "https://plogian.github.io/wholelife/index.html"
		
	} else if (portfolioDisplay.classList.contains("snatcherBot")) {
		project = "Snatcher Bot"
		description = "Tweets rhymed-variations on classical novels every two hours"
		link = "twhttps://twitter.com/SnatcherInThePi"
		
	} else if (portfolioDisplay.classList.contains("fracking")) {
		project = "Fracking in Florida Map"
		description = "Interactive map of the counties and cities in Florida that have fracking ordinances"
		link = "https://public.tableau.com/profile/lillian.podlog#!/vizhome/Fracking-Florida/FrackingMapFlorida"
		
	} else if (portfolioDisplay.classList.contains("industryByZip")) {
		project = "Houston-Area Industry Mapping"
		description = "Interactive map of top industries by zip code"
		link = "https://public.tableau.com/profile/lillian.podlog6498#!/vizhome/OccupationUsingGIS/TopIndustryByZipCode"
		
	} else if (portfolioDisplay.classList.contains("dullBot")) {
		project = "Dull Bot"
		description = "Bot that tweets things Jack (the dull boy) or Rihanna might say."
		link = "https://twitter.com/theDullestJack"
		
	} else if (portfolioDisplay.classList.contains("worstCommutes")) {
		project = "Cities with the worst commutes in America"
		description = "Cities with the worst commutes in America. Covered by MSN Money."
		link = "https://www.msn.com/en-us/money/realestate/cities-with-the-worst-commutes-in-america/ss-AAtKHVl?ocid=ob-fb-enus-894"
		
	} else {
		project= "none"
		description = ""
		link = ""
	}
	changeDisplay(project, description, link);
	$displayText.fadeTo(200, 1);
}

function hideDetails () {
	$displayText.fadeTo(200, 0);
}


portfolioDisplay.addEventListener("mouseenter", displayDetails);

portfolioDisplay.addEventListener("mouseleave", hideDetails);
