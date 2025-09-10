/*************************************************************************************************************/
//FUNZIONI
/*************************************************************************************************************/
// È buona norma riutilizzare il codice ogni volta che ve ne sia la possibilità,
// così da evitare di scrivere codice identico.
// Si rende più pulito il codice stesso e si riducono le possibilità
// di fare errori.

// Per fare ciò si ricorre alle funzioni.

// Le funzioni, quindi, sono dei pezzi di codice che possono essere
// // richiamati più e più volte nel nostro programma principale.

// Come si scrive una funzione?

// keyword:
// function

// Nome funzione:
// si imposta il nome della funzione con la quale potremo poi
// richiamarla.

// Codice da eseguire:
// Tra le parentesi graffe inseriamo il codice che vogliamo eseguire.

// keyword nomefunzione (valore) {
//     //blocco di codice da lanciare
// }

// Cosa può essere scritto all’interno delle funzioni?

// Qualunque istruzione che può essere scritta nel codice
// generale, può essere inserita in una funzione.

// Qual è la vera potenza di una funzione?
// Può accettare dei dati in ingresso!

// Questi dati, detti parametri, possono essere elaborati per
// restituire un risultato...

// Come facciamo restituire un valore?

// La funzione sommaNumeri() esegue delle operazioni e
// mostra un alert().

// In generale una funzione JavaScript esegue delle istruzioni e
// restituisce un valore con il risultato.

// Per restituire un valore si usa la
// keyword return

// Creo una funzione che somma due numeri
function somma(a, b) {
    // Uso return per restituire il risultato
    return a + b;
}

// Ora chiamo la funzione
const risultato = somma(5, 3);

// Qui non stampa, ma salva in "risultato" il valore ritornato
console.log(risultato); // 8

// Quando si esegue un return, la funzione termina!
// Tutto il codice inserito dopo il return non viene eseguito.

// Come invocarla?

// Invocare una funzione

// Invocare una funzione consiste nel:
// scriverne il nome seguito dalle parentesi tonde,
// nel punto di codice in cui vogliamo usarla.

// Nota:
// - quando definiamo la funzione, i dati in ingresso
// vengono detti parametri.
// - quando invochiamo la funzione, i dati che
// inseriamo prendono il nome di argomenti.

// Che differenza c'è tra paremetri e argomenti?

// I parametri rappresentano genericamente il tipo
// di dati che la funzione si aspetta in ingresso.

// Gli argomenti sono i valori effettivi che stiamo
// passando alla funzione.

// Spesso il nome dei parametri e degli argomenti
// // può coincidere, ma non è sempre così!

// Visibilità

// Se la funzione restituisce un valore dobbiamo conservarlo in una variabile, poiché il contenuto
// interno alla funzione non è visibile al di fuori della funzione stessa.

/*************************************************************************************************************/
//SCOPE DI UNA FUNZIONE
/*************************************************************************************************************/

// RIASSUNTO SULLO SCOPE DI FUNZIONE (pronto da copiare)

// -----------------------------
// 1) SCOPE GLOBALE
// -----------------------------
var globalVar = "varGlobale";   // (evita var per il codice moderno, mostra comportamento storico)
let globalLet = "letGlobale";   // (let è globale in uno script, ma non crea proprietà su window in alcuni contesti)

// Una funzione può leggere variabili globali (scope chain: cerca nella funzione, poi esterno, poi globale)
function mostraGlobali() {
    console.log("globalVar (var):", globalVar);  // accede alla variabile globale
    console.log("globalLet (let):", globalLet);  // accede alla variabile globale
}
mostraGlobali();


// -----------------------------
// 2) SCOPE DI FUNZIONE (var storico)
// -----------------------------
// Prima dell'introduzione di let/const, 'var' è FUNCTION-SCOPED:
// significa: la variabile è visibile in tutta la funzione, anche fuori di eventuali blocchi if/for.
function esempioVar() {
    var a = 1; // visibile in tutta la funzione esempioVar
    if (true) {
        var b = 2; // b è ancora visibile qui e sotto nello stesso corpo di funzione
    }
    console.log("a:", a);           // 1
    console.log("b (var dentro if):", b); // 2 -> 'b' non è limitata al blocco if
}
esempioVar();

// 'b' non esiste al di fuori della funzione, quindi nel global è undefined se proviamo typeof:
console.log("b nel global (typeof):", typeof b); // "undefined"  (safe: typeof su non-definita non lancia errore)


// -----------------------------
// 3) BLOCK SCOPE (let / const)
// -----------------------------
// let e const sono BLOCK-SCOPED: esistono solo dentro il blocco {...}.
function esempioBlock() {
    if (true) {
        let x = 10;
        const y = 20;
        console.log("dentro if: x, y =>", x, y); // accessibili qui
    }
    // Fuori dal blocco, x e y NON sono visibili: tenterne l'accesso causa ReferenceError.
    try {
        console.log(x);
    } catch (e) {
        console.log("Errore: x non accessibile fuori dal blocco ->", e.message);
    }
    try {
        console.log(y);
    } catch (e) {
        console.log("Errore: y non accessibile fuori dal blocco ->", e.message);
    }
}
esempioBlock();


// -----------------------------
// 4) HOISTING (comportamento storico)
// -----------------------------
// "Hoisting" = il motore JS sposta mentalmente le dichiarazioni (non le assegnazioni) in alto.
// - var: la dichiarazione è "hoisted" -> letta come esistente ma inizializzata a undefined
// - function declarations: sono completamente hoisted (puoi chiamarle prima della loro definizione)
// - let/const: non sono accessibili prima della dichiarazione (TDZ: Temporal Dead Zone)
console.log("hoisting var (prima della init):", hoistedVar); // undefined (dichiarazione hoisted)
var hoistedVar = "ora inizializzata";

console.log("chiamata a funzione dichiarata prima della sua posizione:", funzioneDichiarata()); 
function funzioneDichiarata() { return "funzione dichiarata OK"; }

try {
    // funzione-espressione con var: prima della riga è undefined -> chiamata fallisce
    console.log("funzione espressione (prima):", funzioneEspressione());
} catch (e) {
    console.log("Errore chiamando funzione espressione prima di assegnarla ->", e.message); // TypeError
}
var funzioneEspressione = function() { return "sono funzione espressione"; };

// let/const in TDZ:
try {
    console.log("TDZ let (prima della dichiarazione):", tdz);
} catch (e) {
    console.log("TDZ error (let):", e.message); // ReferenceError: cannot access before initialization
}
let tdz = "ora fuori dalla TDZ";


// -----------------------------
// 5) PARAMETRI DI FUNZIONE E SCOPE
// -----------------------------
function somma(a, b) {
    // I parametri sono variabili locali alla funzione (scope locale)
    return a + b;
}
console.log("somma(2,3) =>", somma(2, 3));

// 'arguments' è un oggetto (non usare se preferisci rest operator)
function mostraArguments(a, b) {
    console.log("parametri:", a, b);
    console.log("arguments[0], arguments[1]:", arguments[0], arguments[1]);
}
mostraArguments(7, 8);

// rest parameters: rappresentano variabili locali sotto forma di array
function raccogli(...items) {
    return items; // items è locale alla funzione
}
console.log("raccogli(1,2,3):", raccogli(1,2,3));


// -----------------------------
// 6) LEXICAL SCOPE E CLOSURES (fondamentale)
// -----------------------------
// Le funzioni "chiudono" (closure) sulle variabili visibili al momento della creazione.
// Questo permette a funzioni interne di mantenere accesso a variabili della funzione esterna.
function creaContatore() {
    let count = 0; // variabile nel scope esterno di inner
    return function() { // funzione interna (closure)
        count += 1;
        return count;
    };
}
const c1 = creaContatore();
console.log(c1()); // 1
console.log(c1()); // 2

const c2 = creaContatore(); // nuova istanza con proprio 'count'
console.log(c2()); // 1

// Le closure mantengono riferimento alla variabile (non solo al valore) -> aggiornamenti persistono


// -----------------------------
// 7) IIFE (pattern storico per creare scope privato) - opzionale/superfluo ma utile da sapere
// -----------------------------
const moduloSegreto = (function() {
    const privato = "segreto"; // non accessibile dall'esterno
    return {
        leggi: function() { return privato; }
    };
})(); // IIFE: Immediately Invoked Function Expression

console.log("moduloSegreto.leggi():", moduloSegreto.leggi());
// console.log(privato); // undefined -> 'privato' non esiste nel global (superficie privata)



// -----------------------------
// 8) SHADOWING (mascheramento di variabili esterne)
// -----------------------------
let z = 100;
function maschera() {
    let z = 200; // 'z' locale maschera 'z' esterno solo all'interno della funzione
    console.log("z dentro funzione:", z); // 200
}
maschera();
console.log("z globale:", z); // 100  (quello esterno non è cambiato)


// -----------------------------
// 9) MODULI (ES Modules) - nota (non eseguire in un .js non-module)
// -----------------------------
// In codice moderno con ES Modules (file import/export) lo scope top-level è *module scope*.
// Le variabili top-level non diventano proprietà globali e rimangono private al modulo.
// Esempio (solo commento, non eseguire qui):
// export function foo() { /* ... */ }  // 'foo' è esportata, tutto il resto rimane privato al modulo


// -----------------------------
// 10) BUONE PRATICHE (sintesi finale)
// -----------------------------
// - Preferisci 'const' e 'let' (block scope) al posto di 'var'.
// - Evita di inquinare lo scope globale: mantieni variabili dentro funzioni o moduli.
// - Usa closure con attenzione (comode ma possono tenere in memoria variabili). 
// - Usa moduli (import/export) per isolamento del codice in progetti grandi.
// - Nomina variabili in modo chiaro per ridurre shadowing accidentale.

/*************************************************************************************************************/
//FUNZIONI ARROW
/*************************************************************************************************************/

// ========================================
//      ARROW FUNCTIONS in JavaScript
// ========================================

// -----------------------------
// 1) SINTASSI BASE
// -----------------------------

// Funzione tradizionale
function sommaTradizionale(a, b) {
    return a + b;
}

// Arrow function equivalente
const sommaArrow = (a, b) => {
    return a + b;
};

console.log("Somma tradizionale:", sommaTradizionale(2, 3)); // 5
console.log("Somma arrow:", sommaArrow(2, 3)); // 5


// -----------------------------
// 2) SINTASSI COMPATTE
// -----------------------------

// Se il corpo ha una sola espressione, si può omettere return e le {}
const sommaCompatta = (a, b) => a + b;
console.log("Somma compatta:", sommaCompatta(4, 6)); // 10

// Se c'è un solo parametro, si possono omettere le parentesi ()
const quadrato = x => x * x;
console.log("Quadrato:", quadrato(5)); // 25

// Nessun parametro -> serve ()
const saluto = () => "Ciao mondo!";
console.log(saluto()); // "Ciao mondo!"


// -----------------------------
// 3) ARROW FUNCTION vs FUNZIONE NORMALE
// -----------------------------

// DIFFERENZA CHIAVE: le arrow function NON hanno il proprio "this"
// Usano il "this" del contesto in cui sono state create (lexical this).

const oggetto = {
    valore: 42,
    normale: function() {
        console.log("Normale this.valore:", this.valore);
    },
    arrow: () => {
        // Qui "this" NON si riferisce all'oggetto, ma all'ambiente esterno (window/undefined in strict)
        console.log("Arrow this.valore:", this.valore);
    }
};

oggetto.normale(); // 42
oggetto.arrow();   // undefined (NON usa l'oggetto come this)


// -----------------------------
// 4) USO COMUNE: CALLBACK
// -----------------------------

const numeri = [1, 2, 3, 4, 5];

// Funzione tradizionale
const doppiTrad = numeri.map(function(n) {
    return n * 2;
});
console.log("Doppi (funzione trad):", doppiTrad); // [2, 4, 6, 8, 10]

// Arrow function
const doppiArrow = numeri.map(n => n * 2);
console.log("Doppi (arrow):", doppiArrow); // [2, 4, 6, 8, 10]


// -----------------------------
// 5) LIMITI IMPORTANTI
// -----------------------------

// 1. Non hanno il proprio "this" (già visto).
// 2. Non hanno "arguments" -> bisogna usare rest parameters (...args).
const esempioArgs = (...args) => {
    console.log("Args:", args);
};
esempioArgs(1, 2, 3); // [1, 2, 3]

// 3. Non possono essere usate come costruttori (new).
try {
    const Persona = (nome) => { this.nome = nome; };
    const p = new Persona("Luca"); // Errore
} catch (e) {
    console.log("Errore con new + arrow:", e.message);
}


// -----------------------------
// 6) ARROW FUNCTION E CLOSURE
// -----------------------------
// Si comportano come funzioni normali con le variabili esterne,
// mantenendo lo scope (closure).
function creaContatoreArrow() {
    let count = 0;
    return () => {
        count++;
        return count;
    };
}

const cont = creaContatoreArrow();
console.log("Contatore arrow:", cont()); // 1
console.log("Contatore arrow:", cont()); // 2


// -----------------------------
// 7) BUONE PRATICHE
// -----------------------------
// ✅ Usa arrow function per callback brevi, map/filter/reduce, funzioni anonime.
// ✅ Usa function normale quando ti serve il tuo "this" o il costruttore.
// ✅ Preferisci la sintassi compatta quando il corpo è una sola espressione.
// ❌ Non abusare: per funzioni lunghe, meglio una funzione tradizionale per leggibilità.

