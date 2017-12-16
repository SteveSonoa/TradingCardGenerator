function storeData(){
// firebase.initializeApp(config);

 
//  var database = firebase.database();

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
   
     // Log everything that's coming out of snapshot
     console.log(character.characterName);
           
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
        // When image is clicked, we use the "characterName" attribute to find our character
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