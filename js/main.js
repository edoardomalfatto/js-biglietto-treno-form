//variabili
console.log("inizio");
var nome = document.getElementById("nome");
var km = document.getElementById("km");
var eta = document.getElementById("eta");
var prezzo
var genera = document.getElementById("genera");
var row2 = document.getElementById("row2");
var annulla = document.getElementById("annulla");

//costanti
const PrezzoAlKm = 0.21;
const ScontoMinorenni = 0.8;
const ScontoAnziani = 0.4;

//modifica input in active
nome.addEventListener("click",
    function () {
        nome.className = "active_color";       
    }
);
km.addEventListener("click",
    function () {
        km.className = "active_color";       
    }
);
eta.addEventListener("click",
    function () {
        eta.className = "active_color";       
    }
);
genera.addEventListener("click",
    function () {
        genera.className = "active_color";       
    }
);

//bottone "annulla"
annulla.addEventListener("click",
    function () {
        location.reload()
   
    }
);

//bottone "genera"
genera.addEventListener("click",
    function () {
        console.log("inizio+");
        row2.className = "display_block";
        document.getElementById('nome_row').innerHTML = (nome.value);
        if (eta.value == "Minorenne") {
            document.getElementById('offerta').innerHTML = ("Offerta Minorenne");
        } else if (eta.value == "Over65") {
            document.getElementById('offerta').innerHTML = ("Offerta Silver");
        } else if (eta.value == "Maggiorenne") {
            document.getElementById('offerta').innerHTML = ("Offerta Standard");
        }
        
        
        //numeri casuali di carrozza e codice
        document.getElementById('carrozza').innerHTML =Math.floor(Math.random() * 15) + 1;
        document.getElementById('codice').innerHTML =Math.floor(Math.random() * 10000) + 99999;;
        

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