$(document).ready(function() {    
    // ajax call to starwars api
    $("#submitBtn").on("click", function(e) {
         e.preventDefault(); //stops it from reloading the page
        var starPlayer = $("input[name='merp']").val().trim();
        $("input").val("");
        console.log("Star Player:",starPlayer);
        // console.log(e);
        var swApi = "https://swapi.co/api/people/?search=" + starPlayer;
        console.log("SwAPI URL:", swApi);
        $.ajax({
            url: swApi,
            method: 'GET'
          }).done(function(response) {
            console.log(response);

            var results = response.results;

            var firstCharacter = results[0];


          });
        console.log('this is the one I want => if I am blank kill me', starPlayer);
    });

});