// We gaan een spelletje maken waar je 2 getallen moet raden.
// Wat je moet doen:
//
//     1. Maak een functie die 2 random getallen genereert tussen 0 en maxInput.
//     2. Maak een functie die controleert of de ingevoerde getallen tussen 10 en 20 zijn.
//     3. Maak een functie die controleert of de ingevoerde getallen overeenkomen met de random getallen.
//     4. Maak een functie die een hint geeft over de random getallen.
//     7. Maak een functie die de lijst met hints laat zien.
//     8. Maak een functie die de lijst met hints leegmaakt.
//     9. Maak een functie die de lijst met hints maakt.




document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("start");
    let guessButton = document.getElementById("Guess");
    let puntenMessage = document.getElementById("Punten");
    let hintList = document.getElementById("hints");

// Maak een functie die zorgt dat het spel start als je op start drukt

//  Deze functie zorgt er voor dat je een bericht kan toevoegen aan de lijst met hints.
    function makeList(hintMessage) {
        let hintListItem = document.createElement("li"); // Maakt een <li> element
        hintListItem.textContent = hintMessage; // Hier wordt de hint message toegevoegd aan de <li> element
        hintList.appendChild(hintListItem); // Hier wordt de hint message toegevoegd aan de hint list
    }

    //Maak een functie die de punten controleerd en als de punten 0 zijn dan wordt er een bericht getoond dat je hebt verloren. Als de punten veranderen komt er een nieuwe hint.


});