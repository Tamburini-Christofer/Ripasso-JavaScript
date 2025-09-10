/*************************************************************************************************************/
//CICLI: CICLO IF
/*************************************************************************************************************/

// Istruzioni Condizionali

// Se vogliamo far “accadere una cosa” solo in un caso specifico?

// Le istruzioni condizionali eseguono un certo blocco di codice se si verifica una ben precisa condizione.

// Se si verifica la ( condizione ) {
// // allora viene eseguito questo blocco di istruzioni (notare le graffe)
// }

    if (2 < 3) {
        //Blocco di istruzioni
    }

// Se vogliamo far accadere una cosa solo in un caso specifico "altrimenti un'altra?"

// Ci sono situazioni in cui vogliamo eseguire un certo blocco di codice oppure un altro.

// Se si verifica la ( condizione ) {
// // allora viene eseguito questo blocco di istruzioni 1 (notare le graffe)
// } altrimenti {
// // viene eseguito questo blocco di istruzioni 2 (notare le graffe)
// }

    if (2 < 3) {

        //Blocco di istruzione

    } else {

        //Blocco alternativo

    }

// E se... Aggiungiamo condizioni?

// Possiamo aggiungere altre condizioni esclusive con else if.
// La parte “else” non è obbligatoria.

// Se si verifica la ( condizione ) {
// // allora viene eseguito questo blocco di istruzioni 1
// } altrimenti se (altra condizione) {
// // viene eseguito questo blocco di istruzioni 2
// } altrimenti { // se entrambe le precedenti sono false
// // viene eseguito questo blocco di istruzioni 3
// }

    if (2 < 3) {

        //Blocco di istruzione

    } else if ( 2 === 0) {
    
        //Blocco alternativo

    } else {
        //Ultimo blocco
    }

// Cosa è una condizione?

// Una condizione è la verifica che un valore corrisponda a:

// true o false
// (vero = condizione verificata)
// o
// (falso = condizione non verificata).

/*************************************************************************************************************/
//CICLI: CICLO FOR
/*************************************************************************************************************/

// Ciclo for
// Come si scrive un ciclo for?

// keyword:
// for

// contatore:
// per prima cosa si imposta una variabile (in questo esempio i come index)
// e le si assegna un valore iniziale
// (qui 0, ma potrebbe essere 1, 5, 20...)

// condizione:
// poi si imposta la condizione da verificare per poter eseguire il codice;
// se la condizione è falsa si esce dal ciclo
// (in questo esempio la condizione è vera se il contatore è minore di 10)

// incremento/decremento:
// infine si incrementa/decrementa il valore del contatore che dovrà
// nuovamente essere testato nella condizione al giro successivo.

// keyword (contatore, condizione, incremento e decremento) {
//     //Struzioni da eseguire
// }

// Esempio ciclo for 
// 1 Creo il contatore, una variabile che chiamo i, a cui do valore 0
// Condizione: i è minore di 3?
// Sì, allora eseguo le istruzioni

// 2 Incremento il valore di i di 1 quindi ora i vale 1
// Condizione: i è minore di 3?
// Sì, allora eseguo le istruzioni

// 3 Incremento il valore di i di 1 quindi ora i vale 2
// Condizione: i è minore di 3?
// Sì, allora eseguo le istruzioni

// 4 Incremento il valore di i di 1 quindi ora i vale 3
// Condizione: i è minore di 3?
// No, allora esco dal ciclo

for (let i = 0; i < 3; i++) {
    console.log("Il valore di i è:", i);
}

// --- FORMA ESPANSA ---
// Incremento
let a = 2;
a = a + 1; // a vale 3
console.log("Forma espansa incremento:", a);

// Decremento
a = a - 1; // a vale 2 di nuovo
console.log("Forma espansa decremento:", a);


// --- FORMA CONTRATTA PRE-POSIZIONE ---
// Qui il valore viene PRIMA incrementato/decrementato, POI restituito
let b = 2;
let y1 = ++b; // b diventa 3 e restituisce 3
console.log("Pre-incremento:", b, y1); // b = 3, y1 = 3

let c = 2;
let y2 = --c; // c diventa 1 e restituisce 1
console.log("Pre-decremento:", c, y2); // c = 1, y2 = 1


// --- FORMA CONTRATTA POST-POSIZIONE ---
// Qui il valore viene restituito PRIMA, POI incrementato/decrementato
let d = 2;
let z1 = d++; // restituisce 2, poi d diventa 3
console.log("Post-incremento:", d, z1); // d = 3, z1 = 2

let e = 2;
let z2 = e--; // restituisce 2, poi e diventa 1
console.log("Post-decremento:", e, z2); // e = 1, z2 = 2

/*************************************************************************************************************/
//CICLI: CICLO forEach
/*************************************************************************************************************/

//Come funziona il ForEach?
array.forEach(function(elemento, indice, array) {
    // istruzioni da eseguire
});

// elemento → il valore corrente dell’array

// indice → la posizione (0, 1, 2, …)

// array → l’array stesso

//Un esempio di forEach

// Creo un array con 3 nomi
let nomi = ["Alice", "Bob", "Carlo"];

// Uso forEach sull'array "nomi"
nomi.forEach(function(elemento, indice, array) {
    // "elemento" è il valore attuale dell'array
    // "indice" è la posizione (parte da 0)
    // "array" è l'intero array

    console.log("Elemento:", elemento);   // stampa il nome
    console.log("Indice:", indice);       // stampa la posizione
    console.log("Array intero:", array);  // stampa ["Alice","Bob","Carlo"]
    console.log("----");                  // separatore
});

//Cosa succede passo per passo?

// Primo giro → elemento = "Alice", indice = 0
// → stampa "Alice", 0, e l’intero array.

// Secondo giro → elemento = "Bob", indice = 1
// → stampa "Bob", 1, e l’intero array.

// Terzo giro → elemento = "Carlo", indice = 2
// → stampa "Carlo", 2, e l’intero array.

// Versione con funzione freccia (più compatta)

nomi.forEach((elemento, indice) => {
    console.log(`${indice}: ${elemento}`);
});

//Quali sono le differenze con il for classico?

// Con for gestisci tu il contatore (i = 0; i < length; i++).

// Con forEach non hai bisogno di contatore → scorre automaticamente tutto l’array, elemento per elemento.

/*************************************************************************************************************/
//CICLI: CICLO ForIn
/*************************************************************************************************************/

// Come funziona il for...in:

// Oggetto di partenza: dobbiamo avere un oggetto (può essere un array, ma più comune con oggetti) con proprietà.

// Variabile chiave: chiave prende il nome di ogni proprietà dell’oggetto ad ogni ciclo.

// Accesso al valore: con membriTeam[chiave] otteniamo il valore associato a quella proprietà.

// Iterazione: il ciclo continua fino a quando non ha passato tutte le proprietà dell’oggetto.

// ⚠️ Nota importante: for...in scorre le chiavi dell’oggetto, mentre forEach scorre i valori di un array. 
// Quindi non sono esattamente intercambiabili, ma spesso si usano entrambi per iterare.

// Creo un oggetto che rappresenta alcune persone del team
const membriTeam = {
    alice: { nome: "Alice", ruolo: "Designer", email: "alice@email.com" },
    bob: { nome: "Bob", ruolo: "Sviluppatore", email: "bob@email.com" },
    carlo: { nome: "Carlo", ruolo: "Project Manager", email: "carlo@email.com" }
};

// Inizio un ciclo for...in per scorrere tutte le proprietà dell'oggetto membriTeam
for (let chiave in membriTeam) {
    // 'chiave' rappresenta il nome della proprietà corrente dell'oggetto
    // Ad esempio, nella prima iterazione sarà "alice", poi "bob", poi "carlo"

    const persona = membriTeam[chiave]; 
    // Con questo accedo al valore associato alla chiave nell'oggetto
    // persona sarà ad esempio { nome: "Alice", ruolo: "Designer", email: "alice@email.com" }

    // Creo il contenuto della "card" per ogni persona
    const card = `
    <div class="card">
        <div class="immagineProfilo">
            <img src="https://via.placeholder.com/150" alt="${persona.nome}">
        </div>
        <div class="testoCard">
            <h4>${persona.nome}</h4>
            <span>${persona.ruolo}</span>
            <span>${persona.email}</span>
        </div>
    </div>
    `;

    // Stampiamo la card sulla console (o potremmo aggiungerla al DOM)
    console.log(card);
}

/*************************************************************************************************************/
//CICLI: CICLO While
/*************************************************************************************************************/

// Come funziona il while:

// Condizione: il ciclo continua finché la condizione (i < membriTeam.length) è vera.

// Indice: usiamo i per sapere a quale elemento dell’array siamo arrivati.

// Accesso al valore: membriTeam[i] ci dà la persona corrente.

// Incremento: alla fine di ogni iterazione incrementiamo i++ per passare all’elemento successivo.

// Fine ciclo: quando i raggiunge membriTeam.length, la condizione diventa falsa e il ciclo si interrompe.

// Creo un array di persone del team
const membriTeams = [
    { nome: "Alice", ruolo: "Designer", email: "alice@email.com" },
    { nome: "Bob", ruolo: "Sviluppatore", email: "bob@email.com" },
    { nome: "Carlo", ruolo: "Project Manager", email: "carlo@email.com" }
];

// Inizializzo un contatore
let i = 0;

// Inizio il ciclo while
while (i < membriTeams.length) {
    // Accedo alla persona corrente usando l'indice i
    const persona = membriTeams[i];

    // Creo il contenuto della "card" per ogni persona
    const card = `
    <div class="card">
        <div class="immagineProfilo">
            <img src="https://via.placeholder.com/150" alt="${persona.nome}">
        </div>
        <div class="testoCard">
            <h4>${persona.nome}</h4>
            <span>${persona.ruolo}</span>
            <span>${persona.email}</span>
        </div>
    </div>
    `;

    // Stampiamo la card sulla console (o potremmo aggiungerla al DOM)
    console.log(card);

    // Incremento il contatore per passare all'elemento successivo
    i++;
}

/*************************************************************************************************************/
//CICLI: CICLO do...while
/*************************************************************************************************************/
// Simile al while, ma esegue sempre almeno una volta il blocco di codice, perché la condizione si controlla alla fine.

let ai = 0;
do {
    console.log(i);
    ai++;
} while (ai < 3);
// Stampa 0, 1, 2

/*************************************************************************************************************/
//CICLI: CICLO For...of
/*************************************************************************************************************/
// Scorre i valori di un array (oppure di qualsiasi oggetto iterabile, come stringhe, map, set).
const nome = ["Alice", "Bob", "Carlo"];

for (const nome of nome) {
    console.log(nome); // stampa Alice, poi Bob, poi Carlo
}

// ✅ Più leggibile di for quando ti servono solo i valori.
