

function storeData() {
    //Get user input

    //$(".templateImg").on("click", function(event) {
            // Don't refresh the page!
            // event.preventDefault();

            //create an object to hold data
            var character = {
                characterName: characterName,
                ImageUrl: ImageUrl,
                cardTemplateURL: cardTemplateURL,
                swapiHeight: swapiHeight,
                swapiWeight: swapiWeight,
                swapiYear: swapiYear,
                swapiHairColor: swapiHairColor,
                swapiEyeColor: swapiEyeColor
            };

            database.ref().push(character);

     };
 //}
