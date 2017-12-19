// Draws the College Template cards
function drawCollegeFront(divName) {
	var myLocation = "#" + divName;
	
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImage"><img src="assets/images/templateCollegeFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="CollegeFrontName">' + characterName + '</div>'
	+			'</div>'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImageBack"><img src="assets/images/templateCollegeBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="CollegeBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="CollegeBackBio">'
	+					'<b>HEIGHT:</b> ' + swapiHeight + ' meters<br>'
	+					'<b>WEIGHT:</b> ' + swapiWeight + ' lbs<br>'
	+					'<b>EYE COLOR:</b> ' + swapiEyeColor + '<br>'
	+					'<b>HAIR COLOR:</b> ' + swapiHairColor + '<br>'
	+					'<b>BORN:</b> ' + swapiYear
	+				'</div>'
	+				'<div class="templateElements text-uppercase" id="CollegeBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="98px" width="70px" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
	$("#templateImage").append('<img src="' + ImageUrl + '" class="myGiphyImg" height="400" width="285" />');
}

// Draws the Simple Template cards
function drawSimpleFront(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImage"><img src="assets/images/templateSimpleFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="SimpleFrontName">' + characterName + '</div>'
	+			'</div>'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImageBack"><img src="assets/images/templateSimpleBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="SimpleBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="SimpleBackBio">'
	+					'<b>HEIGHT:</b> ' + swapiHeight + ' meters<br>'
	+					'<b>WEIGHT:</b> ' + swapiWeight + ' lbs<br>'
	+					'<b>EYE COLOR:</b> ' + swapiEyeColor + '<br>'
	+					'<b>HAIR COLOR:</b> ' + swapiHairColor + '<br>'
	+					'<b>BORN:</b> ' + swapiYear
	+				'</div>'
	+				'<div class="templateElements text-uppercase" id="SimpleBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="165px" width="118px" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
	$("#templateImage").append('<img src="' + ImageUrl + '" class="myGiphyImg" height="400" width="285" />');
}

// Draws the Future Template cards
function drawFutureFront(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImage"><img src="assets/images/templateFutureFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="FutureFrontName">' + characterName + '</div>'
	+			'</div>'
	+			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="templateImageBack"><img src="assets/images/templateFutureBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="FutureBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="FutureBackBio">'
	+					'<b>HEIGHT:</b> ' + swapiHeight + ' meters<br>'
	+					'<b>WEIGHT:</b> ' + swapiWeight + ' lbs<br>'
	+					'<b>EYE COLOR:</b> ' + swapiEyeColor + '<br>'
	+					'<b>HAIR COLOR:</b> ' + swapiHairColor + '<br>'
	+					'<b>BORN:</b> ' + swapiYear
	+				'</div>'
	+				'<div class="templateElements text-uppercase" id="FutureBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="162" width="116" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
	$("#templateImage").append('<img src="' + ImageUrl + '" class="myGiphyImg" height="400" width="285" />');
}