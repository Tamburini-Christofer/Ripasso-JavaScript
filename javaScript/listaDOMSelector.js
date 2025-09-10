// LISTA DI METODI PER PRENDERE FILE DAL DOM

// ===============================
// METODO 1: INPUT FILE SINGOLO
// ===============================
// Recupero l'elemento <input type="file">
// L'utente seleziona UN file
const input1 = document.querySelector("#fileInput1");
input1.addEventListener("change", e => {
  const file = e.target.files[0]; // primo file selezionato
  console.log("Metodo 1 - File singolo:", file.name);
});


// ===============================
// METODO 2: INPUT FILE MULTIPLO
// ===============================
// Attributo "multiple" permette più file
const input2 = document.querySelector("#fileInput2");
input2.addEventListener("change", e => {
  const files = e.target.files; // FileList con più file
  for (const file of files) {
    console.log("Metodo 2 - File multiplo:", file.name);
  }
});


// ===============================
// METODO 3: INPUT CON FILTRO
// ===============================
// Attributo accept="image/*,.pdf"
// L'utente può scegliere SOLO immagini o PDF
const input3 = document.querySelector("#fileInput3");
input3.addEventListener("change", e => {
  const file = e.target.files[0];
  console.log("Metodo 3 - File filtrato:", file.name, "| Tipo:", file.type);
});


// ===============================
// METODO 4: DRAG & DROP
// ===============================
// L'utente trascina un file dentro un'area
const dropZone = document.querySelector("#dropZone");

dropZone.addEventListener("dragover", e => e.preventDefault());

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  const files = e.dataTransfer.files; // FileList dai file trascinati
  for (const file of files) {
    console.log("Metodo 4 - Drag & Drop:", file.name);
  }
});


// ===============================
// METODO 5: CLIPBOARD (CTRL+V)
// ===============================
// L'utente copia un file (es. immagine) e lo incolla nella pagina
document.addEventListener("paste", e => {
  const files = e.clipboardData.files; // FileList dai file incollati
  if (files.length > 0) {
    console.log("Metodo 5 - File incollato:", files[0].name);
  }
});


// ===============================
// METODO 6: FILE SYSTEM ACCESS API
// ===============================
// API moderna per aprire il selettore file SENZA input
// ⚠️ Funziona solo su alcuni browser (Chrome/Edge)
async function apriFile() {
  const [handle] = await window.showOpenFilePicker(); // apre il selettore
  const file = await handle.getFile(); // ottieni file scelto
  console.log("Metodo 6 - File Picker API:", file.name);
}
// Da chiamare su click di un bottone
// es: document.querySelector("#btn").addEventListener("click", apriFile);


// ===============================
// SUPPORTO ALLA LETTURA DEI FILE
// ===============================
// Una volta ottenuto un file, posso leggerne il contenuto con FileReader
function leggiTesto(file) {
  const reader = new FileReader();
  reader.onload = e => {
    console.log("Contenuto del file:", e.target.result);
  };
  reader.readAsText(file); // legge il contenuto come testo
}

// 📌 Riepilogo dei metodi per acquisire file

// Input file singolo → input.files[0]

// Input multiplo → input.files (più file)

// Input filtrato → accept="..." per limitare i tipi

// Drag & Drop → e.dataTransfer.files

// Clipboard (incolla) → e.clipboardData.files

// File System Access API → showOpenFilePicker() (moderna)