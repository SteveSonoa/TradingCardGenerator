
function storeData() {
    //Get user input

    $(".templateImg").on("click", function(event) {
            // Don't refresh the page!
             event.preventDefault();


            var character = {
                characterName: characterName,
                ImageUrl: ImageUrl,
                cardTemplateURL: cardTemplateURL,
                swapistatsURL: swapistatsURL
            };

            database.ref().push(character);

     });
 }