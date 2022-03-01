// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



let sceltaUtente = prompt('scegli pari o dispari');

while (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {

    sceltaUtente = prompt('No, scegli pari o dispari');
}


let numeroUser = parseInt(prompt('scrivi un numero da 1 a 5'));

while (numeroUser < 1 || numeroUser > 5) {
    numeroUser = parseInt(prompt('No, scrivi un numero da 1 a 5'));
}

let somma = 0;

let numeroComputer = Math.floor(Math.random() * 5 + 1);

console.log(numeroUser);
console.log(numeroComputer);


somma = numeroUser + numeroComputer;
console.log(somma);


if (somma % 2 == 0 && sceltaUtente == 'pari' || somma % 2 == 1 && sceltaUtente == 'dispari') {
    console.log('hai vinto');

} else {
    console.log('hai perso');
}









