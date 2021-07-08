/*
1 legare variante ad id della sezione del form
2 legare variante ad id della sezione di stampa del biglietto
3 evento al click del button "genera"
4 salvataggio dati utente con stampa in console
5 calcolare prezzo del biglietto con messagio di tariffa standard
6 creazione if con mess e prezzo in caso di minorenni
7 creazione else if con mess e prezzo in caso di over65
8 stampo i dati con arrotondamento del prezzo a 2 decimali
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



});