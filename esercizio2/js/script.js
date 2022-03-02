// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// selezione elementi html 
const btnGioca = document.querySelector('#gioca');
const sceltaUser = document.querySelector('#scelta');
const numeroSelezionato = document.querySelector('#numero');
const h3risulato = document.querySelector('#risultato');





let sceltaUtente = sceltaUser.value;

// while (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {

//     sceltaUtente = prompt('No, scegli pari o dispari');
// }


let numeroUser = numeroSelezionato.value;

// while (numeroUser < 1 || numeroUser > 5) {
//     numeroUser = parseInt(prompt('No, scrivi un numero da 1 a 5'));
// }

btnGioca.addEventListener('click', gioca);


function gioca() {


    let somma = 0;

    let numeroComputer = Math.floor(Math.random() * 5 + 1);

    console.log(numeroUser);
    console.log(numeroComputer);


    somma = numeroUser + numeroComputer;
    console.log(somma);


    if (somma % 2 == 0 && sceltaUtente == 'pari' || somma % 2 == 1 && sceltaUtente == 'dispari') {
        h3risulato.innerHTML = 'hai vinto';

    } else {
        h3risulato.innerHTML = 'hai perso';
    }


}








