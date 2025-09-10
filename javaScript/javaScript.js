// QUESTO FOGLIO SERVE A RIPASSARE DEI CONCETTI BASE DELLA PROGRAMMAZIONE. 
// IN QUANTO TALE SARA' AGGIORNATO COSTANTEMENTE E SCARICABILE GRATUITAMENTE DA TUTTE LE PERSONE INTERESSATE

/*************************************************************************************************************/
//PARTIAMO DAL PRINCIPIO
/*************************************************************************************************************/
 
//Cos'è JavaScript?

//JavaScript nasce per dare dinamicità alle pagine web. 

// Consente quindi di: 
// Accedere e modificare elementi della pagina HTML 
// Reagire ad eventi generati dall'utente 
// Validare i dati inseriti dall'utente 
// Interagire con il browser: 
// - determinare il browser utilizzato 
// - la dimensione del viewport 
// - lavorare con i cookie

// //JavaScript è «case sensitive», cioè fa distinzione tra lettere maiuscole e minuscole. 
// Molte keyword sono costituite da parole composte unite senza alcuno spazio o trattino ad esempio: getElementById() 
// Questo metodo di scrittura è detto camelCase, le lettere maiuscole all’interno della keyword servono per individuare facilmente l’inizio di una parola. 

/*************************************************************************************************************/
//TIPIZZAZIONE DI JAVASCRIPT
/*************************************************************************************************************/

// JavaScript è un linguaggio "dinamicamente tipizzato" o "debolmente tipizzato". 
// il che significa che il tipo di una variabile viene determinato e può cambiare in fase di esecuzione
// Questa flessibilità può portare a maggiore velocità di sviluppo ma anche a errori di tipo difficili da individuare. 

// Le variabili non sono legate a un tipo specifico. 
// Una variabile può contenere un numero, poi una stringa e successivamente un booleano, cambiando tipo durante l'esecuzione. 

// Conversione implicita:

// JavaScript cerca di convertire i tipi automaticamente quando si eseguono operazioni, il che può portare a risultati inaspettati se non si presta attenzione 
// ad esempio un'operazione potrebbe restituire la stringa "5" invece del numero 5. 

/*************************************************************************************************************/
//VARIABILI
/*************************************************************************************************************/

// La variabile è un contenitore!!

//Che cosa possiamo fare con una variabile? 
// Gli utilizzi sono infiniti!!!

// esempio:
//  - Conservare l'input dell'utente in un form 
//  - Salvare l’output di comandi di sistema (ad. es il giorno corrente) 
//  - Contare eventi 

//Come faccio a dire a JS che voglio creare una variabile? 

//Le variabili in JavaScript sono definite attraverso una specifica parola chiave seguita dal nome della variabile. 

// Queste parole chiave sono tre:

// VAR  
// - È la dichiarazione più vecchia. 
// -Le variabili dichiarate con var hanno uno scope di funzione (e globale), ma questo può portare a comportamenti imprevisti e sono soggette a "hoisting", 
//      che le solleva all'inizio del loro scope. 

var nomeVariabile = valoreVariabile;

function esempioVar() {
  if (true) {
    var x = 10; // Dichiarata con var, è disponibile anche fuori dal blocco if
  }
  console.log(x); // 10
}

// LET
// - È la dichiarazione più moderna e raccomandata per variabili che possono essere riassegnate. 
// - Le variabili dichiarate con let hanno uno scope di blocco, il che significa che sono visibili solo all'interno del blocco ({}) in cui sono definite. 
// - Permette di riassegnare il valore della variabile, ma non consente di ri-dichiararla nello stesso scope. 

let nomeVariabile = valoreVariabile;

function esempioLet() {
  let y = 20; // Dichiarata con let, disponibile all'interno della funzione
  if (true) {
    let y = 30; // Questo è un'altra variabile y, nello scope del blocco if
    console.log(y); // 30
  }
  console.log(y); // 20
}

// CONST
// - Viene utilizzata per dichiarare variabili il cui valore non deve cambiare dopo l'assegnazione iniziale.
// - Simile a let, ha uno scope di blocco e non può essere riassegnata.
// - Attenzione: Se il valore assegnato è un oggetto, le proprietà dell'oggetto possono essere modificate, 
//      ma non si può riassegnare un nuovo oggetto alla variabile stessa.

const nomeVariabile = valoreVariabile;

const PI = 3.14; // Valore costante
// PI = 3.14159; // Errore: Non si può riassegnare una const

const persona = { nome: "Mario", eta: 30 };
// persona = { nome: "Luigi", eta: 25 }; // Errore: non si può riassegnare l'oggetto
persona.eta = 31; // Questo è permesso, si sta modificando una proprietà dell'oggetto
console.log(persona.eta); // 31


// Come devono essere i nomi delle variabili? 

// I nomi delle variabili devono rispettare precisi criteri:

// - Devono cominciare sempre con una lettera, mai con un numero 
// - In generale non devono essere presenti caratteri diversi da lettere, numeri o underscore (_) 
// - I nomi devono essere diversi dalle keyword riservate di JavaScript 


