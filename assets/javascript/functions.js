// Draw the card collections available to the character, including the ability to flip it over from front to back
function displayFinishedCards(libraryDiv) {
	var myLocation = "#" + libraryDiv;
	$(myLocation).html(
		'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="focusCardHeader"><h1 class="text-center">Click To Flip This Card Over</h1></div>'
	+	'</div>'
	+	'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="focusCard"></div>'
	+	'</div>'
	);
}

// Draws the Thumbnail Display at the bottom
function displayThTable(divName) {
	var myLocation = "#" + divName;
	// Create a header
	$(myLocation).html('<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h1 class="text-center">View A Previously Made Card</h1></div></div>');
	$(myLocation).append('<div class="row cardTh" id="thGallery">');

	// Keep count of the number of images shown; we will redraw the row after 6 images.
	var i = 1;

	// Access the database on initial page load and whenever a new entry is added
	database.ref().on("child_added", function(snapshot) {
		// Create a unique ID for each div (this should suffice)
		var divID = Math.floor(Math.random() * 99999999999);

		// Reset the global variables based on the pulled database info of the clicked image
		charName = snapshot.val().characterName;
		ImageUrl = snapshot.val().ImageUrl;
		cardTemplateURL = snapshot.val().cardTemplateURL;
		swapiWeight = snapshot.val().swapiWeight;
		swapiHeight = snapshot.val().swapiHeight;
		swapiYear = snapshot.val().swapiYear;
		swapiHairColor = snapshot.val().swapiHairColor;
		swapiEyeColor = snapshot.val().swapiEyeColor;

		if(swapiWeight === "unknown") {
			swapiWeight = "???";
		}
		else {
			swapiWeight = Math.floor(parseInt(swapiWeight) * 2.2);
		}
		if(swapiHeight === "unknown") {
			swapiHeight = "???";
		}

		// Add the newest thumbnail to the beginning of the list
		$("#thGallery").prepend(
			'<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6"><div class="innerThDiv" id="' + divID + '"><img src="' + ImageUrl + '" class="img img-responsive" /></div></div>'
		);
		// Add the relevant data to the div so it can be referenced when clicked to draw the main card
		$("#" + divID).attr('data-charactername', charName);
		$("#" + divID).attr('data-imageurl', ImageUrl);
		$("#" + divID).attr('data-cardtemplateurl', cardTemplateURL);
		$("#" + divID).attr('data-swapiweight', swapiWeight);
		$("#" + divID).attr('data-swapiheight', swapiHeight);
		$("#" + divID).attr('data-swapiyear', swapiYear);
		$("#" + divID).attr('data-swapihaircolor', swapiHairColor);
		$("#" + divID).attr('data-swapieyecolor', swapiEyeColor);

		// Reset the row after 6 entries. This helps with spacing on larger screens.
		if(i === 6) {
			$("#thGallery").append('</div><div class="row cardTh">');
			i = 1;
		}
		else {
			i++;
		}
	});

	// Close the row div
	$(myLocation).append('</div>');
	// Listen for clicks on the thumbnail images and on the large image itself
	thListener();
	thFlipListener();
}

// Listen for a click on a thumbnail image. Clicking a thumbnail overwrites anything else the user is in the middle of doing.
function thListener() {
	$(document).on("click", ".innerThDiv", function(event) {
		// console.log($(this).attr("data-charactername"));
		// console.log($(this).attr("data-imageurl"));

		// Set global variables to the clicked item
		ImageUrl = $(this).attr("data-imageurl");
		cardTemplateURL = $(this).attr("data-cardtemplateurl");
		characterName = $(this).attr("data-charactername");
		swapiWeight = $(this).attr("data-swapiweight");
		swapiHeight = $(this).attr("data-swapiheight");
		swapiYear = $(this).attr("data-swapiyear");
		swapiHairColor = $(this).attr("data-swapihaircolor");
		swapiEyeColor = $(this).attr("data-swapieyecolor");


		// console.log(ImageUrl);

		// Delete a card creation in progress
		$("#imageSelectDiv").html(" ");
		$("#templateSelectDiv").html(" ");

		// Draw the clicked card in the main area
		if($(this).attr("data-cardtemplateurl") === "Future") {
			drawFutureFront("mainCardDisplayDiv");
			$("#templateImageBack").toggle("drop");
		}
		else if($(this).attr("data-cardtemplateurl") === "College") {
			drawCollegeFront("mainCardDisplayDiv");
			$("#templateImageBack").toggle("drop");
		}
		else {
			drawSimpleFront("mainCardDisplayDiv");
			$("#templateImageBack").toggle("drop");
		}
		
	});
}

// When the main card is clicked, swap the front & back images with a custom animation
function thFlipListener() {
	$(document).on("click", "#templateArea", function(event) {
		$("#templateImage").toggle("drop");
		$("#templateImageBack").toggle("drop", {direction: 'right'});
	});
}

// Draws the Giphy animated images to pick from
function drawGiphy(charName) {
	// Giphy initialization
	var apiKey = "QP0RDd09AJuZmtlXVZRgQXxN6tdNG0ZL";
	// Search for the Charcter's Name, which has already been pulled from Swapi - NOT the user's direct input. We shouldn't be searching Giphy for "Ben"
	var searchInfo = charName;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInfo + "&api_key=" + apiKey + "&limit=3";

	// Header for the section
	$("#imageSelectDiv").html('<h1 class="text-center">Select Your Favorite Image</h1>');

	// Creates AJAX call for the specific movie button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		// console.log(response.data);

		// Loop for each of the returned images
		for (var i = 0; i < response.data.length; i++) {        
			// Create a var to hold the jQuery data
			var gifDiv = $("<div>", {
				class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
			});

			// Creates the correctly sized div inside the 33% div above - force the exact pixel dimensions, if possible
			var innerGifDiv = $("<div>", {
				class: "giphyDiv",
				"data-imageurl": response.data[i].images.original.url
			});

			// Create the Giphy image and force it to be 400 pixels tall.
			var gifImg = $("<img>", {
				"class": "img img-responsive gifImg",
				"id": "myChosenGif",
				"src": response.data[i].images.original.url,
				"height": 400
			});

			// Add the image to the correctly sized Div
	    	innerGifDiv.append(gifImg);
	    	// Add the correctly sized div to the "col" div inside the container/row.
	    	gifDiv.append(innerGifDiv);
	    	// Draw it to the main page.
	    	$("#imageSelectDiv").append(gifDiv);
	    }
	});
}

// Loads when the Giphy is clicked. Select your template next.
function giphyClicked() {
	// Draws the 3 templates
	$("#templateSelectDiv").html(
		'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
	+			'<h1 class="text-center">Select Your Card Template</h1>'
	+		'</div>'
	+	'</div>'			

	+	'<div col="row">'
	+		'<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 templateSelector" id="College">'
	+			'<img src="assets/images/templateCollegeFront.png" alt="College Template" class="img img-responsive" />'
	+		'</div>'
	+		'<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 templateSelector" id="Future">'
	+			'<img src="assets/images/templateFutureFront.png" alt="Future Template" class="img img-responsive" />'
	+		'</div>'
	+		'<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 templateSelector" id="Simple">'
	+			'<img src="assets/images/templateSimpleFront.png" alt="Simple Template" class="img img-responsive" />'
	+		'</div>'
	+	'</div>'
	);

	// Empty the image selection; users shouldn't be able to click a new image once they've made a selection
	$("#imageSelectDiv").html(" ");
}

// Activataes after one of the 3 templates is selected.
function templateClicked() {
	// Now that all the global variables have been set, push everything to the database with a single call
	database.ref().push({
		ImageUrl: ImageUrl,
		cardTemplateURL: cardTemplateURL,
		characterName: characterName,
		swapiWeight: swapiWeight,
		swapiHeight: swapiHeight,
		swapiYear: swapiYear,
		swapiHairColor: swapiHairColor,
		swapiEyeColor: swapiEyeColor
	});

	// Empty the template div once a template has been selected
	$("#templateSelectDiv").html(" ");

	// Draw the newly created card in the main area
	if(cardTemplateURL === "Future") {
		drawFutureFront("mainCardDisplayDiv");
		$("#templateImageBack").toggle("drop");
	}
	else if(cardTemplateURL === "College") {
		drawCollegeFront("mainCardDisplayDiv");
		$("#templateImageBack").toggle("drop");
	}
	else {
		drawSimpleFront("mainCardDisplayDiv");
		$("#templateImageBack").toggle("drop");
	}
}

// When the Submit button is pressed, let's start the fun!
function clickSubmitButton() {
	// Collect the user's input
	var starPlayer = $("input").val().trim();
	// Reset the input field
	$("input").val("");
	// Clear any previous divs - if the user is in the middle of doing something, creating a new character should override it
	$("#templateSelectDiv").html(" ");
	$("#mainCardDisplayDiv").html(" ");

	// SWAPI initialization
	var swApi = "https://swapi.co/api/people/?search=" + starPlayer;
	$.ajax({
		url: swApi,
		method: "GET"
	}).done(function(response) {
		var results = response.results;

		// User authentication - if SWAPI can't find a character, provide an error and let the user try again
		if(results[0] === undefined) {
			$("#imageSelectDiv").html('<h1 class="text-center errorText">I couldn\'t find that character.</h1>');
		}
		// If SWAPI found a character, let's move forward and set as many globals as possible
		else {
			var firstCharacter = results[0];
			// console.log(firstCharacter);
			// We will set the global characterName by the SWAPI returned reference, not the user's input
			characterName = response.results[0].name;
			swapiWeight = response.results[0].mass;
			swapiHeight = response.results[0].height;
			swapiYear = response.results[0].birth_year;
			swapiHairColor = response.results[0].hair_color;
			swapiEyeColor = response.results[0].eye_color;

			// Draw the Giphy images based on the SWAPI name provided
			drawGiphy(characterName);
		}
	});
}