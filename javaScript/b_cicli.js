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

