/*************************************************************************************************************/
//OPERATORI RELAZIONALI
/*************************************************************************************************************/
// Come confrontiamo due valori?

// == uguaglianza Se x = 3, allora x == 4 è falso

let x = 3;
let risultatox = (x == 4); // Questo confronterà 3 e 4

console.log(risultato); // Stampa: false

// != diversità Se x = 3, allora x != 4 è vero

let a = 3;
let risultatoa = (a != 4); // Viene valutato come true
console.log(risultato);

// > maggiore di Se x = 3, allora x > 4 è falso

let b = 3;
let isGreaterThan4 = (b > 4); // Questo è falso

console.log("b è " + b);
console.log("b > 4 è " + isGreaterThan4); // Output: x > 4 è false

// < minore di Se x = 3, allora x < 4 è vero

let c = 3; // Definisci la variabile x
let d = 4; // Definisci la variabile y

if (x < y) { // Controlla se x è minore di y
  console.log(`${c} è minore di ${d}. Condizione vera.`); // Questo messaggio verrà stampato
} else {
  console.log(`${c} non è minore di ${d}. Condizione falsa.`);
}

// >= maggiore o uguale Se x = 3, allora x >= 4 è falso

let e = 3;

if (e >= 4) {
  console.log("e è maggiore o uguale a 4");
} else {
  console.log("e è falso perché è minore di 4");
}

// <= minore o uguale Se x = 3, allora x <= 4 è vero

let f = 3; // Definiamo la variabile x con valore 3

if (f <= 4) { // Controlliamo se x è minore o uguale a 4
  console.log("f è minore o uguale a 4"); // Questo messaggio verrà visualizzato
} else {
  console.log(" non è minore o uguale a 4");
}

// ATTENZIONE!!!

// == uguaglianza 
// Se g = 3, allora g == 4 è falso
let g = 3;
console.log(g == 4); // false

// g == "3" è vero
console.log(g == "3"); // true


// != diversità 
// Se h = 3, allora h != 4 è vero
let h = 3;
console.log(h != 4); // true

// h != "3" è falso
console.log(h != "3"); // false


// === identità
// uguaglianza di valore e tipo
// Se i = 3, allora i === 3 è vero
let i = 3;
console.log(i === 3); // true

// i === "3" è falso
console.log(i === "3"); // false


// !== non identità
// disuguaglianza di valore e tipo
// Se j = 3, allora j !== 3 è falso
let j = 3;
console.log(j !== 3); // false

// j !== "3" è vero
console.log(j !== "3"); // true

/*************************************************************************************************************/
//OPERATORI LOGICI E RELAZIONALI
// /*************************************************************************************************************/
// Possiamo unire più condizioni?

// Gli operatori logici consentono la combinazione di espressioni booleane.

// JavaScript prevede;

// due operatori binari (che richiedono due operandi)

// un operatore unario (che richiede un operando)

// Operatori Binari

// && and, “e logico”
// restituisce vero se e soltanto se entrambi gli operandi sono veri

// Se x = 3, y = 4 allora (x < 4 && y > 5) è falso

// || or, “o logico”
// restituisce vero se almeno uno degli operandi è vero

// Se x = 3, y = 4 allora (x < 4 || y > 5) è vero

// Una condizione può essere formata da uno o più confronti con la combinazione degli:

// - operatori relazionali 
// - operatori logici

// Gli operatori relazionali vengono utilizzati per verificare una relazione tra due operandi. 
// Restituiscono true (vero) se la relazione è soddisfatta, altrimenti false (falso).

// Esempio: 

    let eta = 20;
    if (eta > 18) { // Operatore ">" (maggiore di)
      console.log("L'utente è maggiorenne");
    }

// In questo caso, l'operatore > verifica se la variabile eta (che è 20) è maggiore di 18. Poiché è vero, il messaggio "
// L'utente è maggiorenne" verrà stampato. 

// Gli operatori logici combinano due o più espressioni booleane. 
// && (AND logico) verifica se entrambe le espressioni a sinistra e a destra dell'operatore sono vere.

// Esempio: 

    let temperatura = 25;
    let umidita = 60;

    if (temperatura > 20 && umidita < 70) { // Operatore "&&" (AND logico)
      console.log("Il tempo è piacevole");
    }

// In questo esempio, l'operatore && viene utilizzato per verificare se temperatura è maggiore di 20 e se umidita è minore di 70. 
// Solo se entrambe le condizioni sono vere, il messaggio "Il tempo è piacevole" verrà stampato. 

/*************************************************************************************************************/
//OPERATORI LOGICI: NOT
// /*************************************************************************************************************/
// Ma quando mai vorrò sapere il contrario di qualcosa?

// La negazione ci da uno strumento per rendere più espressivo il nostro codice, e quindi non essere
// vincolati ad un singolo modo di porre un concetto.
// Come in qualsiasi lingua parlata, è necessario anche in JS in quanto linguaggio di programmazione.

// esempio:
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Devi effettuare l'accesso."); 
} else {
  console.log("Benvenuto nella tua area personale!");
}



