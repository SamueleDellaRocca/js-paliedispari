// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



let sceltaUtente = prompt('scegli pari o dispari');
if (sceltaUtente == 'pari' || sceltaUtente == 'dispari') {
    console.log('devi scrivere pari o dispari');
}


// let numeroUser = parseInt(prompt('scrivi un numero da 1 a 5'));
// if (numeroUser < 1 || numeroUser > 5) {
//     console.log('hai sbagliato numero, deve essere tra 1 o 5');
// }


// if (sceltaUtente == 'pari' || sceltaUtente == 'dispari' && numeroUser >= 1 || numeroUser <= 5) {


//     let somma = 0;

//     let numeroComputer = Math.floor(Math.random() * 5 + 1);

//     console.log(numeroUser);
//     console.log(numeroComputer);


//     somma = numeroUser + numeroComputer;
//     console.log(somma);


//     if (somma % 2 == 0 && sceltaUtente == 'pari' || somma % 2 == 1 && sceltaUtente == 'dispari') {
//         console.log('hai vinto');

//     } else {
//         console.log('hai perso');
//     }


// } else {
//     console.log('hai sbagliato ad inserire i dati');
// }