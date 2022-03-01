// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const btnSelezionato = document.querySelector('#btn');
const inputTestoSelezionato = document.querySelector('#name').value;
const parolaContrarioSelezionata = document.querySelector('.parola_reverse').innerHTML;
const risultatoSelezionato = document.querySelector('.risultato');



let parolaUser = prompt('inserisci parola');
let reverseParolaUser = '';




btnSelezionato.addEventListener('click', funzioneControllo);


function funzioneControllo() {

    for (let index = parolaUser.length - 1; index >= 0; index--) {
        reverseParolaUser += parolaUser[index];
    }

    console.log(reverseParolaUser);


    if (reverseParolaUser == parolaUser) {
        console.log(parolaUser + ' ' + 'La parola è palindroma')
    } else {
        console.log(parolaUser + ' ' + 'non è palindroma')
    }

}

// parolaContrarioSelezionata.append(reverseParolaUser);

