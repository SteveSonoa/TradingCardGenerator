function storeData(){
// firebase.initializeApp(config);

 
//  var database = firebase.database();

function storeData() {
    //Get user input

    $(".templateImg").on("click", function(event) {
            // Don't refresh the page!
             event.preventDefault();

            //create an object to hold data
            var character = {
                characterName: characterName,
                ImageUrl: ImageUrl,
                cardTemplateURL: cardTemplateURL,
                swapistatsURL: swapistatsURL
            };

            database.ref().push(character);

     });
 }
}