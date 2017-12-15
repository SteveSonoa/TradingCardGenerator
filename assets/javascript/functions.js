

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
	+			'<input type="text" class="form-control longWidth" id="playerSearch" name="merp" placeholder="Player Name">'
	+			'<span class="input-group-btn"><button type="submit" class="btn btn-default" id="submitBtn">Submit</button></span>'
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
$(document).ready(function() {	
	// ajax call to starwars api
	$("#submitBtn").on("click", function(e) {
		// e.preventDefault(); //stops it from reloading the page
		var starPlayer = $("input[name='merp']").val().trim();
		// console.log(starPlayer);
		// console.log(e);

		console.log('this is the one I want => if I am blank kill me', starPlayer);
	});

})


// Function for new user login - steps
 // Button for adding login info
 // Grab user input
 // Creates local "temporary" object for holding login data
 // Upload login data to the database
 // Logs everything to console
 // Somehow let user know they have been added
 // Clear all of the text-boxes


  // Create Firebase event for adding user info to the database 
  // Store everything into a variable.
  // Create a new account with email and pasword
  //   Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  


  // when an existing user signs in - pass data to firebase
 // Button for adding login info
 // Grab user input
 // Creates local "temporary" object for holding login data
 // Upload login data to the database
 // Logs everything to console
 // Somehow let user know they have access
 // Clear all of the text-boxes

// Create Firebase event for checking existing user info in the database 
  // Store everything into a variable.
  // Create a new account with email and pasword
  //   Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   });
  
  
  // Have a user sign out
  //   firebase.auth().signOut().then(function() {
  //   Sign-out successful.
  //   }).catch(function(error) {
  //    An error happened.
  //   });

  //JP
	//based on user validation
	//input in search bar (use charSearch varibale)
	//pull data, name, affiliation and short bio
	//
	