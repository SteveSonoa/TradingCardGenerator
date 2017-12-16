// Giphy API Key = hY1tCHo6ucNmcuoFAIdPXtpdjujP16Ud

// Make a list of your own theme/topic
var topicArray = ["jar jar binks", "yoda", "vader", "r2d2"];

for (var i1 = 0; i1 < topicArray.length; i1++) {
	// Used template literals to set unique id for each button
	var buttonTag = $(`<button id='topic-${i1}' class='topic-item'>`);
	buttonTag.attr("topic-item", topicArray[i1]);
	buttonTag.text(topicArray[i1]);
	$("#button-area").append(buttonTag);
};

// Adding click event listen listener to all buttons
$(".topic-item").on("click", function() {

	var findMe = $(this).attr("topic-item");

	// var findMe = "hamster";
	//12/14/2017 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hY1tCHo6ucNmcuoFAIdPXtpdjujP16Ud&q=" + findMe + "&limit=3";

console.log(findMe);
console.log("==============================");

$("#giphy-area").empty();
for (var i = 0; i < 3; i++) {
	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hY1tCHo6ucNmcuoFAIdPXtpdjujP16Ud&tag=" + findMe;

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		console.log(response);

		//12/14/2017 var results = response.data;

		//12/14/2017 for (var i = 0; i < results.length; i++) {
		//if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

				//var rating = results[i].rating;
				//var p = $("<p>").text(i + ") Rating: " + rating);

				// fixed_height_small_still (still)
				// fixed_height_small (animation)
				// imgTag.attr("src", results[i].images.original_still.url);
				//12/14/2017 imgTag.attr("src", results[i].images.downsized_still.url);


			//}
				var imgTag = $("<img>");

				imgTag.attr("src", response.data.fixed_height_small_still_url
);

				var gifDiv = $("<div class='item'>")

				//gifDiv.append(p);
				gifDiv.append(imgTag);
		$("#giphy-area").prepend(gifDiv);
	});

};
});
