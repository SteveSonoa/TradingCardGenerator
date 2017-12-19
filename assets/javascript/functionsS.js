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
	// +	'<div col="row">'
	// +		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="saveOptions">Save Card Front // Save Card Back</div>'
	// +	'</div>'
	);
	displayFocusCard("focusCard");
}

// Draw the main focus card & program the flip
function displayFocusCard(mainCardDiv) {
	var myLocation = "#" + mainCardDiv;
	// Front of image (flip)
	// on click...
		// flip to close front of image
		// flip to open back of image
}

// Loads the firebase with sample content for testing purposes
function test() {
	var object1 = {
		characterName: "Han Solo",
		ImageUrl: "https://www.themarysue.com/wp-content/uploads/2017/07/han-solo-return-of-the-jedi_612x380.jpg",
		cardTemplateURL: "Future",
		swapistatsURL: ""
	};

	var object2 = {
		characterName: "Nien Nunb",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/databank_niennunb_01_169_31eccf40.jpeg?region=0%2C49%2C1560%2C780",
		cardTemplateURL: "Simple",
		swapistatsURL: ""
	};
	var object3 = {
		characterName: "Leia Organa",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/leia_6d2292da.jpeg?region=295%2C124%2C1434%2C806&width=320",
		cardTemplateURL: "College",
		swapistatsURL: ""
	};

	var object4 = {
		characterName: "Jabba The Hutt",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675&width=768",
		cardTemplateURL: "Future",
		swapistatsURL: ""
	};
	var object5 = {
		characterName: "Han Solo",
		ImageUrl: "https://www.themarysue.com/wp-content/uploads/2017/07/han-solo-return-of-the-jedi_612x380.jpg",
		cardTemplateURL: "Future",
		swapistatsURL: ""
	};

	var object6 = {
		characterName: "Nien Nunb",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/databank_niennunb_01_169_31eccf40.jpeg?region=0%2C49%2C1560%2C780",
		cardTemplateURL: "Simple",
		swapistatsURL: ""
	};
	var object7 = {
		characterName: "Leia Organa",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/leia_6d2292da.jpeg?region=295%2C124%2C1434%2C806&width=320",
		cardTemplateURL: "College",
		swapistatsURL: ""
	};

	var object8 = {
		characterName: "Jabba The Hutt",
		ImageUrl: "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675&width=768",
		cardTemplateURL: "Future",
		swapistatsURL: ""
	};

	database.ref().push(object1);
	database.ref().push(object2);
	database.ref().push(object3);
	database.ref().push(object4);
	database.ref().push(object5);
	database.ref().push(object6);
	database.ref().push(object7);
	database.ref().push(object8);
}

function displayThTable(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html('<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h1 class="text-center">View A Previously Made Card</h1></div></div>');
	$(myLocation).append('<div class="row cardTh" id="thGallery">');

	var i = 1;

	database.ref().on("child_added", function(snapshot) {
		var divID = Math.floor(Math.random() * 99999999999);

		charName = snapshot.val().characterName;
		ImageUrl = snapshot.val().ImageUrl;
		cardTemplateURL = snapshot.val().cardTemplateURL;
		swapistatsURL = snapshot.val().swapistatsURL;
		$("#thGallery").append(
			'<div class="col-lg-2 col-md-2 col-sm-6 col-xs-6"><div class="innerThDiv" id="' + divID + '"><img src="' + ImageUrl + '" class="img img-responsive" /></div></div>'
		);
		// $("#" + divID).css('background-image', 'url(' + ImageUrl + ')');
		$("#" + divID).attr('data-charactername', charName);
		$("#" + divID).attr('data-imageurl', ImageUrl);
		$("#" + divID).attr('data-cardtemplateurl', cardTemplateURL);
		$("#" + divID).attr('data-swapistatsurl', swapistatsURL);

		if(i === 6) {
			$("#thGallery").append('</div><div class="row cardTh">');
			i = 1;
		}
		else {
			i++;
		}
	});

	$(myLocation).append('</div>');
	thListener();
	thFlipListener();
}

function thListener() {
	$(document).on("click", ".innerThDiv", function(event) {
		// console.log($(this).attr("data-charactername"));
		// console.log($(this).attr("data-imageurl"));

		// Set global variables to the clicked item
		ImageUrl = $(this).attr("data-imageurl");
		cardTemplateURL = $(this).attr("data-cardtemplateurl");
		characterName = $(this).attr("data-charactername");
		swapistatsURL = $(this).attr("data-swapistatsurl");

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

function thFlipListener() {
	$(document).on("click", "#templateArea", function(event) {
		$("#templateImage").toggle("drop");
		$("#templateImageBack").toggle("drop", {direction: 'right'});
	});
}

function drawGiphy(charName) {
	var apiKey = "QP0RDd09AJuZmtlXVZRgQXxN6tdNG0ZL";
	var searchInfo = charName;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInfo + "&api_key=" + apiKey + "&limit=3";

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

			var innerGifDiv = $("<div>", {
				class: "giphyDiv",
				"data-imageurl": response.data[i].images.original.url
			});

			// innerGifDiv.css('background-image', 'url(' + response.data[i].images.original.url + ')');

			var gifImg = $("<img>", {
				"class": "img img-responsive gifImg",
				"src": response.data[i].images.original.url,
				"height": 400
			});

	      innerGifDiv.append(gifImg);
	      gifDiv.append(innerGifDiv);
	      $("#imageSelectDiv").append(gifDiv);
	    }
	});
}