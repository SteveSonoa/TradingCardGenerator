/** 12/16/2017 function imageLogic removed here as Steve built a new function drawGiphy in functionsS.js

function imageLogic (findThis) {

	console.log("=========================");
	console.log(findThis);

	var gifArea = $("<div id='giphy-area'>");

	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hY1tCHo6ucNmcuoFAIdPXtpdjujP16Ud&tag=" + "yoda";
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		console.log(response);

		var imgTag = $("<img>");

		imgTag.attr("src", response.data.fixed_height_small_still_url);

		var gifDiv = $("<div class='imageURL'>")

		//gifDiv.append(p);
		gifDiv.append(imgTag);
		$("#giphy-area").prepend(gifDiv);
	});
}
**/

function giphyClicked() {

console.log("This is function giphyClicked...");


$(document).ready(function () {
$('body').on('click', '.gifImg', function() {
	var giphyUrl = $(this).attr("src");
	console.log(giphyUrl);


	displayTemplates();
});

});


};

function displayTemplates () {
	console.log("function displayTemplates called!");

	$("#templateSelectDiv").empty();
	$("#templateSelectDiv").append('<h1 class="text-center">Select Your Template!</h1>');

	var templateDivF = $("<div>", {
        class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
      });

    var templateDivsFF = $("<img>", {
    	"class": "img img-responsive templateImg ",
        "src": "assets/images/templateFutureFront.png"
        //"height": 400
    });
    templateDivF.append(templateDivsFF);

    var templateDivsFB = $("<img>", {
    	"class": "img img-responsive templateImg",
        "src": "assets/images/templateFutureBack.png"
        //"height": 400
    });
    templateDivF.append(templateDivsFB);

    $("#templateSelectDiv").append(templateDivF);


	var templateDivS = $("<div>", {
        class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
      });

    var templateDivsSF = $("<img>", {
    	"class": "img img-responsive templateImg",
        "src": "assets/images/templateSimpleFront.png"
        //"height": 400
    });
    templateDivS.append(templateDivsSF);

    var templateDivsSB = $("<img>", {
    	"class": "img img-responsive templateImg",
        "src": "assets/images/templateSimpleBack.png"
        //"height": 400
    });
    templateDivS.append(templateDivsSB);

    $("#templateSelectDiv").append(templateDivS);


	var templateDivC = $("<div>", {
        class: "col-lg-4 col-md-4 col-sm-12 col-xs-12"
      });

    var templateDivsCF = $("<img>", {
    	"class": "img img-responsive templateImg",
        "src": "assets/images/templateCollegeFront.png"
        //"height": 400
    });
    templateDivC.append(templateDivsCF);

    var templateDivsCB = $("<img>", {
    	"class": "img img-responsive templateImg",
        "src": "assets/images/templateCollegeBack.png"
        //"height": 400
    });
    templateDivC.append(templateDivsCB);

    $("#templateSelectDiv").append(templateDivC);
    
    
};
