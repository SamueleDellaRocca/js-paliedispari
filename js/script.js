// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const btnSelezionato = document.querySelector('.btn');
const inputTestoSlezionato = document.querySelector('#name');







let parolaUser = prompt('scrivi una parola')
let reverseParolaUser = '';



for (let index = parolaUser.length - 1; index >= 0; index--) {
    reverseParolaUser += parolaUser[index];
}

console.log(reverseParolaUser);


if (reverseParolaUser == parolaUser) {
    console.log(parolaUser + ' ' + 'La parola è palindroma')
} else {
    console.log(parolaUser + ' ' + 'non è palindroma')
}


