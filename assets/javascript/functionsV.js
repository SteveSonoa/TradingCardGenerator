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