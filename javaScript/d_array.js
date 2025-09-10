/*************************************************************************************************************/
//ARRAY
/*************************************************************************************************************/
// Cos’è un array

// Un array è una struttura dati che serve a conservare più valori in un’unica variabile.

// I valori in un array possono essere di qualsiasi tipo: numeri, stringhe, booleani, oggetti, persino altri array.

// Ogni elemento ha un indice, che parte da 0.

// Gli array sono molto utili quando vuoi lavorare con liste di dati o fare iterazioni.

// Salviamo più dati assieme

// Come si accede agli elementi di un array?

// nomeArray[IndiceElemento]

// .length è una proprietà degli array,
// che ci dà la sua lunghezza,
// quindi il numero di elementi contenuti

// Creo un array di frutti
const frutti = ["Mela", "Banana", "Arancia", "Kiwi"];

// Uso la proprietà .length per sapere quanti elementi ci sono
console.log(frutti.length); 
// Stampa 4, perché ci sono 4 elementi nell'array

// Posso usare .length anche per iterare con un ciclo
for (let i = 0; i < frutti.length; i++) {
    console.log(`Frutto in posizione ${i}: ${frutti[i]}`);
}
// Stampa:
// Frutto in posizione 0: Mela
// Frutto in posizione 1: Banana
// Frutto in posizione 2: Arancia
// Frutto in posizione 3: Kiwi

// .length può anche aiutare a trovare l'ultimo elemento
console.log(`Ultimo frutto: ${frutti[frutti.length - 1]}`);
// Stampa: Ultimo frutto: Kiwi

// i, come abbiamo visto, avrà un valore
// diverso ad ogni ciclo,
// permettendoci di attraversare tutto l’array

// Un esempio completo

// 1 Creo il contatore, una variabile che chiamo i, a cui do valore 0
// Condizione: i è minore di 3?
// Sì, allora stampo nomi[0] //Luca

// 2 Incremento il valore di i di 1 quindi ora i vale 1
// Condizione: i è minore di 3?
// Sì, allora stampo nomi[1] //Marco

// 3 Incremento il valore di i di 1 quindi ora i vale 2
// Condizione: i è minore di 3?
// Sì, allora stampo nomi[2] //Paolo

// 4 Incremento il valore di i di 2 quindi ora i vale 3
// Condizione: i è minore di 3?
// No, allora esco dal ciclo

// Creo un array di nomi
const nomi1 = ["Luca", "Marco", "Paolo"];

// 1. Creo il contatore i e gli do valore 0
let i = 0;

// Inizio il ciclo while
while (i < 3) { // Condizione: i è minore di 3?

    // Se la condizione è vera, stampo il valore corrente dell'array
    console.log(nomi1[i]); 
    // 1° ciclo: stampa nomi[0] -> "Luca"
    // 2° ciclo: stampa nomi[1] -> "Marco"
    // 3° ciclo: stampa nomi[2] -> "Paolo"

    // Incremento il contatore
    i++; 
    // 1° ciclo: i diventa 1
    // 2° ciclo: i diventa 2
    // 3° ciclo: i diventa 3
}

// Quando i = 3, la condizione i < 3 non è più vera
// Il ciclo termina


//Esempio di Array
// Creo un array di nomi
const nomi = ["Alice", "Bob", "Carlo"];

// nomi[0] -> "Alice"
// nomi[1] -> "Bob"
// nomi[2] -> "Carlo"

// Operazioni comuni sugli array

// ========================================
//        ESEMPIO COMPLETO SUGLI ARRAY
// ========================================

// 1. CREARE UN ARRAY
const nomit = ["Alice", "Bob", "Carlo"]; 
// Array di stringhe, indice parte da 0
// nomi[0] -> "Alice", nomi[1] -> "Bob", nomi[2] -> "Carlo"

// 2. ACCEDERE AGLI ELEMENTI
console.log(nomi[1]); // "Bob"

// 3. MODIFICARE UN ELEMENTO
nomi[2] = "Carolina";
console.log(nomi); // ["Alice", "Bob", "Carolina"]

// 4. AGGIUNGERE ELEMENTI ALLA FINE
nomi.push("Davide"); // push aggiunge alla fine
console.log(nomi); // ["Alice", "Bob", "Carolina", "Davide"]

// 5. RIMUOVERE L'ULTIMO ELEMENTO
nomi.pop(); // pop rimuove l'ultimo
console.log(nomi); // ["Alice", "Bob", "Carolina"]

// 6. AGGIUNGERE ELEMENTI ALL'INIZIO
nomi.unshift("Elena"); // unshift aggiunge all'inizio
console.log(nomi); // ["Elena", "Alice", "Bob", "Carolina"]

// 7. RIMUOVERE IL PRIMO ELEMENTO
nomi.shift(); // shift rimuove il primo
console.log(nomi); // ["Alice", "Bob", "Carolina"]

// 8. LUNGHEZZA DELL'ARRAY
console.log(nomi.length); // 3

// 9. ITERARE UN ARRAY CON for
for (let i = 0; i < nomi.length; i++) {
    console.log(`Posizione ${i}: ${nomi[i]}`);
}

// 10. ITERARE UN ARRAY CON forEach
nomi.forEach((nome, indice) => {
    console.log(`Posizione ${indice}: ${nome}`);
});

// 11. ARRAY CON TIPI DIVERSI
const misc = ["Alice", 25, true, { città: "Roma" }, [1,2,3]];
console.log(misc);
// Può contenere stringhe, numeri, booleani, oggetti, altri array

// 12. METODI UTILI PER ARRAY
const numeri = [1, 2, 3, 4, 5];

// map -> trasforma ogni elemento
const raddoppio = numeri.map(n => n * 2);
console.log(raddoppio); // [2, 4, 6, 8, 10]

// filter -> filtra gli elementi
const pari = numeri.filter(n => n % 2 === 0);
console.log(pari); // [2, 4]

// find -> trova il primo elemento che soddisfa la condizione
const tre = numeri.find(n => n === 3);
console.log(tre); // 3

// includes -> controlla se esiste un elemento
console.log(numeri.includes(4)); // true
console.log(numeri.includes(10)); // false