function drawCollegeFront(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateCollegeFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="CollegeFrontName">' + characterName + '</div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}

function drawCollegeBack(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateCollegeBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="CollegeBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="CollegeBackBio">' + swapistatsURL + '</div>'
	+				'<div class="templateElements text-uppercase" id="CollegeBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="98" width="70" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}

function drawSimpleFront(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateSimpleFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="SimpleFrontName">' + characterName + '</div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}

function drawSimpleBack(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateSimpleBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="SimpleBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="SimpleBackBio">' + swapistatsURL + '</div>'
	+				'<div class="templateElements text-uppercase" id="SimpleBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="165" width="118" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}

function drawFutureFront(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateFutureFront.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="FutureFrontName">' + characterName + '</div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}

function drawFutureBack(divName) {
	var myLocation = "#" + divName;
	$(myLocation).html(
		'<div class="container-float cardTemplateURL" id="templateArea">'
	+		'<div class="row">'
	+			'<div class="col-lg-12" id="templateImage"><img src="TradingCardGenerator/assets/images/templateFutureBack.png" height="400" width="285" />'
	+				'<div class="templateElements text-uppercase" id="FutureBackName">' + characterName + '</div>'
	+				'<div class="templateElements" id="FutureBackBio">' + swapistatsURL + '</div>'
	+				'<div class="templateElements text-uppercase" id="FutureBackImage"><img src="' + ImageUrl + '" class="img img-responsive" height="162" width="116" /></div>'
	+			'</div>'
	+		'</div>'
	+	'</div>'
	);
}