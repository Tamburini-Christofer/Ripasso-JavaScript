/*************************************************************************************************************/
//OPERATORI RELAZIONALI
/*************************************************************************************************************/
// Come confrontiamo due valori?
// == uguaglianza Se v = 3, allora v == 4 è falso
let v = 3;
console.log(v == 4); // false
console.log(v == 3); // true


// > maggiore di Se w = 3, allora w > 4 è falso
let w = 3;
console.log(w > 4); // false
console.log(w > 2); // true


// < minore di Se y = 3, allora y < 4 è vero
let y = 3;
console.log(y < 4); // true
console.log(y < 2); // false


// >= maggiore o uguale Se z = 3, allora z >= 4 è falso
let z = 3;
console.log(z >= 4); // false
console.log(z >= 3); // true


// <= minore o uguale Se a1 = 3, allora a1 <= 4 è vero
let a1 = 3;
console.log(a1 <= 4); // true
console.log(a1 <= 2); // false

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

let b1 = 5;
console.log(b1 > 3 && b1 < 10); // true, perché 5 è maggiore di 3 E minore di 10
console.log(b1 > 3 && b1 > 10); // false, perché la seconda condizione è falsa


// || or, “o logico”
// restituisce vero se almeno uno degli operandi è vero

let b2 = 2;
console.log(b2 < 3 || b2 > 10); // true, perché la prima condizione è vera
console.log(b2 > 5 || b2 < 1);  // false, perché entrambe le condizioni sono false


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



