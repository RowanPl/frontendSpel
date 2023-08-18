document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("start");
    let guessButton = document.getElementById("Guess");
    let puntenMessage = document.getElementById("Punten");
    let hintList = document.getElementById("hints");

    let punten;
    let randomNumber1;
    let randomNumber2
    let guessNumber1;
    let guessNumber2;
// Maak een functie die zorgt dat het spel start als je op start drukt
    startButton.addEventListener("click", function (){
        punten = 6
        hintList.innerText= ''
        let max = document.getElementById("max")

        if ( max >= 10 && max <= 20) {
           randomNumber1 = Math.floor(Math.random() * max) + 1;
           randomNumber2 = Math.floor(Math.random() * max) + 1;


        document.getElementById("message").innerText = "Welkom bij de game raad het getal, raad de 2 getallen, Als je het goed hebt win je je punten, maar heb je het fout dan krijg je een hint en een puntaftrek. je begint met 6 punten. Succes!";
        puntenMessage.innerText = "6 punten"
        makeList("Het eerste getal + het tweede getal is: " + (randomNumber1 + randomNumber2))
        guessButton.disabled = false;
        startButton.disabled = true;
        }
        else {
            console.log("Invalid number")
        }
        console.log(randomNumber2, randomNumber1)
    })

    guessButton.addEventListener("click", function (){
        guessNumber1 = parseInt(document.getElementById("guessNumber1").value);
        guessNumber2 = parseInt(document.getElementById("guessNumber2").value);
        console.log(guessNumber1)
        if (randomNumber1 === guessNumber1 && randomNumber2 === guessNumber2){
            document.getElementById("message").innerText = "Gefeliciteerd je hebt het getal geraden!"
            guessButton.disabled = true;
            startButton.disabled = false;
        }
        else{
            document.getElementById("message").innerText = "Aah wat jammer, probeer het nog een keer!!"
            console.log(punten)
            punten = punten -1
            hint()
            console.log("probeer het opnieuw")
        }
    })


//  Deze functie zorgt er voor dat je een bericht kan toevoegen aan de lijst met hints.
    function makeList(hintMessage) {
        let hintListItem = document.createElement("li"); // Maakt een <li> element
        hintListItem.textContent = hintMessage; // Hier wordt de hint message toegevoegd aan de <li> element
        hintList.appendChild(hintListItem); // Hier wordt de hint message toegevoegd aan de hint list
    }

    //Maak een functie die de punten controleerd en als de punten 0 zijn dan wordt er een bericht getoond dat je hebt verloren. Als de punten veranderen komt er een nieuwe hint.
    function hint(){
        puntenMessage.innerText = `${punten} punten`
        if (punten === 5){
            makeList("Het eerste getal * het tweede getal is " + (randomNumber1 * randomNumber2));
        }
        if (punten === 4){
            makeList("Het eerste getal - het tweede getal is " + (randomNumber1 - randomNumber2));
        }
        if (punten === 3){
            makeList("Het eerste getal / het tweede getal is " + (randomNumber1 / randomNumber2));
        }
        if (punten === 2){
            makeList("Het eerste getal % het tweede getal is " + (randomNumber1 % randomNumber2));
        }
        if (punten === 1){
            makeList("Het eerste getal = " + (randomNumber1));
        }
        if (punten === 0){
            makeList("Het tweede getal = " + (randomNumber2));
            document.getElementById("message").innerText = "Je hebt het getal niet geraden."
            guessButton.disabled = true;
            startButton.disabled = false;

        }
    }

});