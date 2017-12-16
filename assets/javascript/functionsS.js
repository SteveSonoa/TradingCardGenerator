// Creates the layout of the Main Page when a user first accesses the site
function drawMainPage(introDiv) {
	var myLocation = "#" + introDiv;
	$(myLocation).html(
		'<div col="row">'
	+		'<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12" id="mainText">'
	+			'<div><h1 class="text-center">Create your own</h1></div>'
	+			'<div><h1 class="text-center">STAR WARS</h1></div>'
	+			'<div><h1 class="text-center">Trading Cards!</h1></div>'
	+			'<div class="container-float">'
	+				'<div class="row">'
	+					'<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="characterSearch"></div>'
	+					'<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">'
	+						'<p>Login</p>'
	+					'</div>'
	+				'</div>'
	+			'</div>'
	+		'</div>' // headerText
	+		'<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12" id="bodyLogo"></div>'
	+	'</div>'
	);
	drawLogo("bodyLogo");
	searchForCharacter("characterSearch");
}

// Draws the company logo in any div on the site, automatically scaling to the available space
function drawLogo(logoDiv) {
	var myLocation = "#" + logoDiv;
	$(myLocation).html('<img src="assets/images/logo.png" alt="Artificial Rag Gnomes" class="img img-responsive" />');
}

function searchForCharacter(searchDiv) {
	var myLocation = "#" + searchDiv;
	$(myLocation).html(
		'<form class="form-inline">'
	+		'<div>'	
	+			'<label for="characterSearch">Search for an Star Wars character</label>'
	+		'</div>'
	+		'<div class="input-group">'
	+			'<input type="text" class="form-control longWidth" id="characterSearch" placeholder="Character Name">'
	+			'<span class="input-group-btn"><button type="submit" class="btn btn-default">Submit</button></span>'
	+		'</div>'
	+	'</form>'
	);
}

// Draw the card collections available to the character, including the ability to flip it over from front to back
function displayFinishedCards(libraryDiv) {
	var myLocation = "#" + libraryDiv;
	$(myLocation).html(
		'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="focusCardHeader"><h1>Click To Flip This Card Over</h1></div>'
	+	'</div>'
	+	'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="focusCard"></div>'
	+	'</div>'
	+	'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="saveOptions">Save Card Front // Save Card Back</div>'
	+	'</div>'
	);
	displayFocusCard("focusCard");
	// if user is logged in
		// while more images remain in user's search history
			// col-12 My Collection
			// col-3 thumbnail of next image
			// click to put thumbnail in main image spot
			// ALL images will be displayed in the thumbnail images - including the main images, even if just 1
}

// Draw the main focus card & program the flip
function displayFocusCard(mainCardDiv) {
	var myLocation = "#" + mainCardDiv;
	// Front of image (flip)
	// on click...
		// flip to close front of image
		// flip to open back of image
}

// Load news stories about the character & his team
function displayStories(storyDiv) {
	var myLocation = "#" + storyDiv;
	$(myLocation).append(
		'<div col="row">'
	+		'<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12" id="storyImage"></div>'
	+		'<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12" id="storyContent">'
	+			'<div class="container-float">'
	+				'<div class="row">'
	+					'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="storyHeadline></div>'
	+					'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="storyDate></div>'
	+					'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="storyBlurb></div>'
	+				'</div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	+	'<div col="row">'
	+		'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="storyDivider></div>'
	+	'</div>'
	);
}

function testing(){
	
}

function displayThTable(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html('<div class="row" id="thGallery">');

	database.ref().on("child_added", function(snapshot) {
		var divID = Math.floor(Math.random() * 99999999999);

		var charName = snapshot.val().characterName;
		var ImageUrl = snapshot.val().ImageUrl;
		var cardTemplateURL = snapshot.val().cardTemplateURL;
		var swapistatsURL = snapshot.val().swapistatsURL;
		$("#thGallery").html(
			'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12 cardTh" id="' + divID + '"><img src="assets/images/template' + cardTemplateURL + 'Front.png" class="img img-responsive" /></div>'
		);
		$("#" + divID).css('background-image', 'url(' + ImageUrl + ')');
		$("#" + divID).attr("data-characterName", charName);
		$("#" + divID).attr("data-ImageUrl", ImageUrl);
		$("#" + divID).attr("data-cardTemplateURL", cardTemplateURL);
		$("#" + divID).attr("data-swapistatsURL", swapistatsURL);
	});

	$(myLocation).append('</div>');
}

function drawGiphy(charName) {
	var apiKey = "QP0RDd09AJuZmtlXVZRgQXxN6tdNG0ZL";
	var searchInfo = charName;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchInfo + "&api_key=" + apiKey + "&limit=3";

	// Creates AJAX call for the specific movie button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response.data);

	// Loop for each of the returned images
    for (var i = 0; i < response.data.length; i++) {        
      // Create a var to hold the jQuery data
      var gifDiv = $("<div>", {
        class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
      });

      var gifImg = $("<img>", {
        "class": "img img-responsive gifImg",
        "src": response.data[i].images.original.url,
        "height": 400        
      });

      gifDiv.append(gifImg);
      $("#imageSelectDiv").append(gifDiv);
    }
	});
}