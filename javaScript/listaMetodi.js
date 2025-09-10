
/*************************************************************************************************************/
//LISTA DI TUTTI I METODI PIU' USATI
/*************************************************************************************************************/
//Tutti i metodi per una stringa

"ciao".length        // Restituisce la lunghezza della stringa
"ciao".toUpperCase() // Converte in maiuscolo
"CIAO".toLowerCase() // Converte in minuscolo
" ciao ".trim()      // Rimuove spazi all’inizio e alla fine
"ciao".includes("a") // Verifica se contiene "a"
"ciao".startsWith("c") // Controlla se inizia con "c"
"ciao".endsWith("o")   // Controlla se finisce con "o"
"ciao".indexOf("a") // Restituisce l’indice della prima "a"
"ciao".lastIndexOf("a") // Restituisce l’indice dell’ultima "a"
"ciao".slice(1,3)   // Estrae sottostringa (da indice 1 a 3 escluso)
"ciao".substring(1,3) // Simile a slice, ma non accetta indici negativi
"ciao".replace("a","o") // Sostituisce la prima occorrenza
"ciao".split("i")   // Divide la stringa in array ["c","ao"]

//Tutti i metodi per un Array
let arr = [1,2,3];
arr.length        // Restituisce la lunghezza dell’array
arr.push(4)       // Aggiunge elemento alla fine
arr.pop()         // Rimuove l’ultimo elemento
arr.unshift(0)    // Aggiunge elemento all’inizio
arr.shift()       // Rimuove il primo elemento
arr.includes(2)   // Controlla se contiene il valore
arr.indexOf(2)    // Restituisce indice della prima occorrenza
arr.lastIndexOf(2) // Restituisce indice dell’ultima occorrenza
arr.join("-")     // Unisce elementi in stringa "1-2-3"
arr.concat([4,5]) // Unisce array
arr.slice(1,3)    // Estrae parte di array (senza modificarlo)
arr.splice(1,2)   // Rimuove/sostituisce elementi dall’array
arr.reverse()     // Inverte ordine
arr.sort()        // Ordina elementi
arr.map(x => x*2) // Crea nuovo array trasformato
arr.filter(x => x>1) // Restituisce solo elementi >1
arr.reduce((a,b)=>a+b,0) // Accumula valori (somma in questo caso)
arr.forEach(x => console.log(x)) // Esegue funzione su ogni elemento

// Tutti i metodi di Math 
Math.round(4.6)   // Arrotonda a intero più vicino
Math.floor(4.9)   // Arrotonda per difetto (4)
Math.ceil(4.1)    // Arrotonda per eccesso (5)
Math.abs(-5)      // Valore assoluto (5)
Math.max(1,5,3)   // Restituisce il maggiore
Math.min(1,5,3)   // Restituisce il minore
Math.random()     // Numero casuale tra 0 e 1
Math.pow(2,3)     // Potenza (2^3 = 8)
Math.sqrt(9)      // Radice quadrata (3)

// Tutti i metodi di Object
let obj = {a:1, b:2};

Object.keys(obj)    // Restituisce ["a","b"]
Object.values(obj)  // Restituisce [1,2]
Object.entries(obj) // Restituisce [["a",1],["b",2]]
Object.assign({}, obj, {c:3}) // Crea nuovo oggetto unendo altri
Object.freeze(obj)  // Rende oggetto immutabile
Object.seal(obj)    // Impedisce aggiunta/eliminazione proprietà

//Tutti i metodi JSON
JSON.stringify({a:1}) // Converte oggetto in stringa JSON
JSON.parse('{"a":1}') // Converte stringa JSON in oggetto

//Tutti i metodi Date 
let d = new Date();
d.getFullYear()   // Anno (es. 2025)
d.getMonth()      // Mese (0-11, gennaio=0)
d.getDate()       // Giorno del mese
d.getDay()        // Giorno della settimana (0=dom)
d.getHours()      // Ore
d.getMinutes()    // Minuti
d.getSeconds()    // Secondi
d.getTime()       // Millisecondi dal 1970
d.toISOString()   // Data in formato ISO
