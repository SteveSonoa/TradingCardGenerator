// Creates the layout of the Main Page when a user first accesses the site
function drawMainPage(introDiv) {
	var myLocation = "#" + introDiv;
	$(myLocation).html(
	+	'<div col="row">'
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
function displayFinishedCards(libraryDiv) {
	var myLocation = "#" + libraryDiv;
	$(myLocation).html(
	+	'<div col="row">'
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

// Load news stories about the player & his team
function displayStories(storyDiv) {
	var myLocation = "#" + storyDiv;
	$(myLocation).append(
	+	'<div col="row">'
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

function storeData(){ 
// Firebase watcher + initial loader  .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().characterSearch);
      console.log(snapshot.val().characterImageUrl);
      console.log(snapshot.val().cardTemplate);
      console.log(snapshot.val().characterStatsA);
      console.log(snapshot.val().characterStatsB);
      console.log(snapshot.val().characterStatsC);
      console.log(snapshot.val().characterStatsD);
      console.log(snapshot.val().characterStatsE);

      // Change the HTML to reflect
      $("#characterSearch-display").text(snapshot.val().characterSearch);
      $("#characterImageUrl-display").text(snapshot.val().characterImageUrl);
      $("#cardTemplate-display").text(snapshot.val().cardTemplate);
      $("#cardStatsA-display").text(snapshot.val().characterStatsA);
      $("#cardStatsB-display").text(snapshot.val().characterStatsB);
      $("#cardStatsC-display").text(snapshot.val().characterStatsC);
      $("#cardStatsD-display").text(snapshot.val().characterStatsD);
      $("#cardStatsE-display").text(snapshot.val().characterStatsE);
      

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });




}


    
