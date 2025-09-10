// ========================================
// DOM
// ========================================
// <!DOCTYPE html>
// <html lang="it">
// <head>
//   <meta charset="UTF-8">
//   <title>Acquisire file dal DOM</title>
// </head>
// <body>

//   <!-- INPUT FILE BASE -->
//   <!-- L'attributo "multiple" permette di caricare più file -->
//   <input type="file" id="fileInput" multiple>

//   <!-- Dove stampiamo le info -->
//   <div id="output"></div>

//   <!-- Collego il mio script -->
//   <script src="script.js"></script>
// </body>
// </html>

// 1) RECUPERO l'input dal DOM
const inputFile = document.getElementById("fileInput");
const output = document.getElementById("output");

// 2) AGGIUNGO un event listener
// L'evento "change" scatta quando l'utente sceglie un file
inputFile.addEventListener("change", function(event) {

    // "event.target.files" è una FileList (simile ad un array)
    const files = event.target.files;

    // Svuoto il contenuto precedente
    output.innerHTML = "";

    // 3) CICLO SU OGNI FILE SCELTO
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Mostro nome e dimensione
        const info = document.createElement("p");
        info.textContent = `Nome: ${file.name} | Dimensione: ${file.size} byte`;
        output.appendChild(info);
    }
});

// L'input file si recupera con querySelector o getElementById
const fileInput = document.querySelector("#fileInput");

// .files → proprietà dell'input file
// Restituisce un oggetto FileList con i file scelti
console.log(fileInput.files); // FileList {0: File, 1: File, ...}

// Ogni elemento di .files è un oggetto File con proprietà utili:
const file = fileInput.files[0];

console.log(file.name);      // Nome del file
console.log(file.size);      // Dimensione in byte
console.log(file.type);      // Tipo MIME (es. "image/png")
console.log(file.lastModified); // Timestamp ultima modifica

// Per leggere il contenuto di un file, si usa FileReader:
const reader = new FileReader();

// Leggo come testo
reader.onload = function(e) {
    console.log("Contenuto del file:", e.target.result);
};

// Avvio la lettura
reader.readAsText(fileInput.files[0]); // Funziona con .txt, .json ecc.

// Altri metodi di FileReader:

// .readAsText(file) → legge testo

// .readAsDataURL(file) → utile per immagini (base64)

// .readAsArrayBuffer(file) → utile per dati binari

// VISUALIZZARE UN’IMMAGINE
const img = document.createElement("img");
const reader = new FileReader();

reader.onload = function(e) {
    img.src = e.target.result; // Base64
    document.body.appendChild(img);
};

reader.readAsDataURL(fileInput.files[0]);
