// when "submit" button is pressed
    // read the input text
    // search the swapi api for a matching name
    // if no results
        // "Enter a valid Star Wars character's name"
    // else



$(document).ready(function() {
  // ajax call to starwars api
  $("#submitBtn").on("click", function(e) {
    e.preventDefault(); //stops it from reloading the page
    var starPlayer = $("input")
      .val()
      .trim();
    $("input").val("");
    console.log("Star Player:", starPlayer);
    // console.log(e);
    var swApi = "https://swapi.co/api/people/?search=" + starPlayer;
    console.log("SwAPI URL:", swApi);
    $.ajax({
      url: swApi,
      method: "GET"
    }).done(function(response) {
      console.log(response);
       //getting the characters name and storing it globally
       characterName = results[0].name;

      var results = response.results;

      var firstCharacter = results[0];
      console.log(firstCharacter);
      imageLogic(firstCharacter);
          });
        console.log('this is the one I want => if I am blank kill me', starPlayer);
    });
    console.log("this is the one I want => if I am blank kill me", starPlayer);
  });

});
