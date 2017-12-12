// Creates the layout of the Main Page when a user first accesses the site
function drawMainPage() {
	$("#mainDiv").html(
		'<div col="row">'
	+		'<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" id="mainText">'
	+			'<div><h1 class="text-center">Create your own</h1></div>'
	+			'<div><h1 class="text-center">CUSTOMIZED</h1></div>'
	+			'<div><h1 class="text-center">Basketball Cards!</h1></div>'
	+			'<div class="container-float">'
	+				'<div class="row">'
	+					'<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="playerSearch"></div>'
	+					'<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">'
	+						'<p>Login</p>'
	+					'</div>'
	+				'</div>'
	+			'</div>'
	+		'</div>' // headerText
	+		'<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" id="bodyLogo"></div>'
	+	'</div>'
	);
	drawLogo("bodyLogo");
	searchForPlayer("playerSearch");
}

// Draws the company logo in any div on the site, automatically scaling to the available space
function drawLogo(logoDiv) {
	var myLocation = "#" + logoDiv;
	$(myLocation).html('<img src="assets/images/logo.png" alt="Artificial Rag Gnomes" class="img img-responsive" />');
}

function searchForPlayer(searchDiv) {
	var myLocation = "#" + searchDiv;
	$(myLocation).html(
		'<form class="form-inline">'
	+		'<div>'	
	+			'<label for="playerSearch">Search for an NBA player</label>'
	+		'</div>'
	+		'<div class="input-group">'
	+			'<input type="text" class="form-control longWidth" id="playerSearch" placeholder="Player Name">'
	+			'<span class="input-group-btn"><button type="submit" class="btn btn-default">Submit</button></span>'
	+		'</div>'
	+	'</form>'
	);
}

// Draw the card collections available to the player, including the ability to flip it over from front to back
function displayFinishedCards() {
	// col-12 Click to flip over
	// col-12 Front of image (flip)
	// on click...
		// flip to close front of image
		// flip to open back of image
	// Save Front button // Save Back button
	// if user is logged in
		// while more images remain in user's search history
			// col-12 My Collection
			// col-3 thumbnail of next image
			// click to put thumbnail in main image spot
			// ALL images will be displayed in the thumbnail images - including the main images, even if just 1
}

// Load news stories about the player & his team
function displayStories() {
	// load stories (limit 10)
		// images(float: left)
		// headline
		// summary
		// Read on ESPN.com...
		// Divider
}