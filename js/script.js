/*
1 legare variante ad id della sezione del form
2 legare variante ad id della sezione di stampa del biglietto
3 evento al click del button "genera"
4 salvataggio dati utente con stampa in console
5 calcolare prezzo del biglietto x kms con messagio di tariffa standard
6 creazione if con mess e prezzo in caso di minorenni
7 creazione else if con mess e prezzo in caso di over65
8 inserire codice treno
9 inserire numero carrozza random
10 stampare prezzo con due decimali
11 stampo i dati in HTML
12 far comparire la sezione emissione biglietto solo al click del button
13 reset campi al click del button
*/

// AGGANCIO ALLA SEZIONE DATI UTENTE
var userName = document.getElementById("name");
var userKms = document.getElementById("kms");
var userAge = document.getElementById("age");
var button = document.getElementById("generate");

// AGGANCIO ALLA SEZIONE DI EMISSIONE BIGLIETTO
var passengerName = document.getElementById("passenger-name");
var passengerPromo = document.getElementById("promo");
var passengerCar = document.getElementById("car");
var passengerTrainNumber = document.getElementById("train-number");
var passengerPrice = document.getElementById("price");

// REAZIONE AL CLICK SUL BUTTON "GENERA"
button.addEventListener("click", function () {

    //SALVATAGGIO INFORMAZIONI UTENTE TRASFORMANDOLE IN VARIABILI
    var nameValue = userName.value;
    var kmsValue = userKms.value;
    var ageValue = userAge.value;
     // STAMPA RISULTATO IN CONSOLE
    console.log(nameValue);
    console.log(kmsValue);
    console.log(ageValue);

    //CALCOLO PREZZO TARIFFA STANDARD
    var price = kmsValue * 0.21;
    var discountMessage = "Tariffa ordinaria";

    //CONDIZIONE PER MINORENNI O OVER65
     if (ageValue === "minor") {
         price = price - (price * 20) / 100;
         discountMessage = "Tariffa minori";
     } else if (ageValue === "over65") {
        price = price - (price * 40) / 100;
        discountMessage = "Tariffa over 65";
        console.log(price + discountMessage);
     }

     // NUMERO TRENO E CARROZZA
     var trainNumber = Math.floor(Math.random() * 2000) +100;
     var carNumber = Math.floor(Math.random() * 12) +1;

     //PREZZO
     price = "€ " + price.toFixed(2);

     //STAMPA IN HTML
     passengerName.innerHTML = " " + nameValue;
     passengerPromo.innerHTML = " " + discountMessage;
     passengerCar.innerHTML = " " + carNumber;
     passengerTrainNumber.innerHTML = " " + trainNumber.toFixed(0);
     passengerPrice.innerHTML = " " + price;

        //Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.
     userName.value = " ";
     userKms.value = "10";
     userAge.value = "minor";
});


