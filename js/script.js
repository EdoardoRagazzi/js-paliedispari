// Esercizio di oggi: nome repo: js - paliedispari
// Palidroma Chiedere all’utente di inserire una parola.Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri.Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

// DICHIARIAMO UNA VARIABILE CON LA SCELTA PARI || DISPARI
var scommessa = prompt('Scegli Pari o Dispari');
console.log(scommessa);
// INSERIMENTO NUMERO DA 1 A 5
var numero = parseInt(prompt('Inserisci un numero da 1 a 5 🗼'));
console.log(numero);

// OTTENIAMO IL RISULTATO DALLA FUNZIONE 
var risultato = pariDispari(scommessa, numero);
document.getElementById('risultato').innerHTML = risultato;


// ----- FUNCTIONS ----- //

function pariDispari(scommessa, numero) {
    /**
     * Function pari || dispari
     * scommessa = stringa "pari" || "dispari"
     * numero = numero compreso tra 1 & 5
     * Somma un numero con un numero random del pc e 
     * se la parità della somma è uguale alla scommessa 
     * il giocatore ha vinto
     * return = risultato scommessa
     */

    var numeroPc = random(1, 5);
    console.log(numeroPc);
    var somma = numero + numeroPc;

    if (somma % 2 == 0 && scommessa == 'pari') {
        return 'win';
    } else if (somma % 2 != 0 && scommessa == 'dispari') {
        return 'win';
    } else {
        return 'lose';
    }
}

function random(min, max) {
    /**
     * Function Random:
     * min = numero più piccolo accettabile 
     * max = numero più grande accettabile
     * return numero random compreso tra min e max
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma
// Inserisci una parola
var parola = prompt('inserisci la parola');
var risultato = palindromo(parola);
document.getElementById('palindromo').innerHTML = risultato;




// Condizione per verificare se la parola è palindroma 
//-----FUNCTIONS-----
function palindromo(parola) {
    var parolaInversa = invertiParola(parola);
    if (parola == parolaInversa) {
        return 'la parola è palindroma';
    } else {
        return 'la parola non è palindroma';
    }
};



// funzione per l'inversione dei caratteri
function invertiParola(parola) {
    var strInversa = parola.split('').reverse().join('');
    return strInversa;
}