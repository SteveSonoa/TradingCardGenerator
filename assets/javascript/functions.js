// Creates the layout of the Main Page when a user first accesses the site
function drawMainPage(introDiv) {
	var myLocation = "#" + introDiv;
	$(myLocation).html(
	+	'<div col="row">'
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

// Load news stories about the character & his team
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
firebase.initializeApp(config);

  
  var database = firebase.database();

    // Capture Button Click and create new user with the name in the database
    $(".btn").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();
      //Get user input
      var characterName = $("#characterSearch").val().trim();
      
      //create local "temporary" object for holding user input data
      var character = {
        characterName: characterName,
        ImageUrl: "",
        cardTemplateURL: "",
        swapistatsURL: "",

      };

      database.ref().push(character);
       

      //    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(character.characterName);
      // console.log(newUser.characterImageUrl);
      // console.log(newUser.cardTemplate);
      // console.log(newUser.characterStatsA);
      // console.log(newUser.characterStatsB);
      // console.log(newUser.characterStatsC);
      // console.log(newUser.characterStatsD);
      // console.log(newUser.characterStatsE);
      
      // clear all of the input boxes
      $("#characterSearch").val("");
    });
    
    // When new user selects giphy image - update the image URL in database
    // Assume we have images with an attribute of the character name - characterName
    // assume we have an attribute of the URL on the image - imageURL

    $("body").on("click",".imgURL", function(event) {
	      // Don't refresh the page!
	      event.preventDefault();
	      //Get user input
	     // Assumed that we have image with "characterName" and "imageURL" attributes
		// When image is clicked, we use the "charaterName" attribute to find our character
		// Use the "imageURL" attribute to update our found character

		var characterName = $(this).attr("characterName");
		var imageURL = $(this).attr("imageURL")

		database.ref("charaters/" + characterName).on("value", function(snapshot){
			snapshot.ref.update({imageURL: imageURL});
		})
 	});
 // When new user selects card template - update the cardtemplate in database
    // Assume we have images with an attribute of the character name - characterName
    // assume we have an attribute of the URL on the image - cardTemplateURL
 	 $("body").on("click",".cardTemplateURL", function(event) {
	      // Don't refresh the page!
	      event.preventDefault();
		// Assumed that we have image with "characterName" and "cardTemplateURL" attributes
		// When image is clicked, we use the "charaterName" attribute to find our character
		// Use the "cardTemplateURL" attribute to update our found character

		var characterName = $(this).attr("characterName");
		var cardTemplateURL = $(this).attr("cardTemplateURL")

		database.ref("charaters/" + characterName).on("value", function(snapshot){
			snapshot.ref.update({cardTemplateURL: cardTemplateURL});
		})

	
    });

 	 // When new user selects SWAPIstats - update the swapistats in database
    // Assume we have images with an attribute of the character name - characterName
    // assume we have an attribute of the URL on the image - swapistatsURL
 	 $("body").on("click",".swapistatsURL", function(event) {
	      // Don't refresh the page!
	      event.preventDefault();
		// Assumed that we have image with "characterName" and "swapiStateURL" attributes
		// When image is clicked, we use the "charaterName" attribute to find our character
		// Use the "swapiStateURL" attribute to update our found character

		var characterName = $(this).attr("characterName");
		var swapiStatsURL = $(this).attr("swapiStatsURL");

		database.ref("charaters/" + characterName).on("value", function(snapshot){
			snapshot.ref.update({swapiStatsURL: swapiStatsURL});
		})

	
    });
    
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    	console.log(childSnapshot.val());

	  	// Store everything into a variable.
	  	var characterName = childSnapshot.val().characterName;
	      
		// user input info - get their function for how they are calling it
		//getGiphyImages(characterName);
		//createImagesTempages (characterName);

		//Use characterName to get giphy images assume already done


		
		

});
  
}
  
function displayThTable(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html('<div class="row">');
	for (var i = 1; i < 8; i++) {
		$(myLocation).append(
			'<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12" id="' + i + '">#' + i + '</div>'
		);
	}
	$(myLocation).append('</div>');
}

