//variabili
console.log("inizio");
var nome = document.getElementById("nome");
var km = document.getElementById("km");
var eta = document.getElementById("eta");
var prezzo
var genera = document.getElementById("genera");

//costanti
const PrezzoAlKm = 0.21;
const ScontoMinorenni = 0.8;
const ScontoAnziani = 0.4;

//bottone "genera"

//copia nome in row2
genera.addEventListener("click",
    function () {
        console.log("inizio+");
        document.getElementById('nome_row').innerHTML = (nome.value);
        if (eta.value == "Minorenne") {
            document.getElementById('offerta').innerHTML = ("Offerta Minorenne");
        } else if (eta.value == "Over65") {
            document.getElementById('offerta').innerHTML = ("Offerta Over65");
        } else if (eta.value == "Maggiorenne") {
            document.getElementById('offerta').innerHTML = ("Offerta standard");
        }
        //Calcolo prezzo per età
        if (eta.value == "Minorenne") {
            prezzo = (km.value * PrezzoAlKm * ScontoMinorenni);
        } else if (eta.value == "Over65") {
            prezzo = (km.value * PrezzoAlKm * ScontoAnziani)
        } else if (eta.value == "Maggiorenne") {
            prezzo = (km.value * PrezzoAlKm);
        }

        //Calcolo prezzo finale-approssimato
        var PrezzoFinale = Math.round((prezzo + Number.EPSILON) * 100) / 100;
        document.getElementById('prezzo').innerHTML = ((PrezzoFinale) + " €");
        console.log("fine+");
    }
);

console.log("fine");