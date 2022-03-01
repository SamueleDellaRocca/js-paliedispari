// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const btnSelezionato = document.querySelector('#btn');
const inputTestoSelezionato = document.querySelector('#name');
const parolaContrarioSelezionata = document.querySelector('#parola_reverse');
const risultatoSelezionato = document.querySelector('#risultato');


/*
let parolaUser = prompt('inserisci parola');
*/

let parolaUser = "";

let reverseParolaUser;




btnSelezionato.addEventListener('click', funzioneControllo);


function funzioneControllo() {

    parolaUser = inputTestoSelezionato.value;
    reverseParolaUser = "";

    for (let index = parolaUser.length - 1; index >= 0; index--) {
        reverseParolaUser += parolaUser[index];
    }

    console.log(reverseParolaUser);


    if (reverseParolaUser == parolaUser) {
        risultatoSelezionato.innerHTML = "La parola " + parolaUser + " è palindroma";


    } else {
        risultatoSelezionato.innerHTML = "La parola " + parolaUser + " non è palindroma";

    }

    parolaContrarioSelezionata.innerHTML = reverseParolaUser;

}


