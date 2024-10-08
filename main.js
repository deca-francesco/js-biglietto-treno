console.log("js is linked");

// Chiedere all'utente km ed età
// Prezzo = 0.21€ al km e max 2 decimali
// Sconto = 20% minorenni
//          40% over 65
// Output

// 0) Strumenti conosciuti
/*
- let, const
- prompt
- console.log
- operatori aritmetici, di comparazione e logici
- stringhe
- numeri
- condizionali if/else if/else
*/

// 1) Preparazione e dichiarazione variabili
let km;
let age;
const cost_per_km = 0.21;
let discount;
let discount_msg;
let ticket_cost;
let final_price;

// 2) Raccolta dati attraverso prompt
km = prompt("Inserisci il numero di kilometri del tuo viaggio");    // si può fare anche così : km = parseInt(prompt("kilometri"));
age = prompt("Inserisci la tua età");
// Faccio tornare i valori ottenuti da stinga a numeri interi
km = parseInt(km);
age = parseInt(age);
// assegno il valore ottenuto alla variabile
ticket_cost = km * cost_per_km;
// rendo il prezzo un numero con massimo 2 decimali
ticket_cost = ticket_cost.toFixed(2);
// controllo in console
console.log(`km: ${km}  age: ${age}`);

// 3) Elaborazione dati
// verifico l'età per lo sconto
if (age < 18) {
    discount = ticket_cost * 0.2;
    discount = discount.toFixed(2);
    discount_msg = "20%";
} else if (age > 65) {
    discount = ticket_cost * 0.4;
    discount = discount.toFixed(2);
    discount_msg = "40%";
} else if (age >= 18 && age <= 65) {
    discount = 0;
    discount_msg = "0%";
}

// calcolo il prezzo finale
final_price = ticket_cost - discount;
// rendo il risultato un numero con massimo 2 decimali
final_price = final_price.toFixed(2);

// 4) Mostrare output
// controllo in console
console.log(`Biglietto: ${ticket_cost}€  Sconto: ${discount_msg}  Prezzo Finale: ${final_price}€`);
// faccio vedere anche all'utente
alert(`Il tuo biglietto costa: ${ticket_cost}€.
Hai diritto ad uno sconto del: ${discount_msg}.
Il costo finale del tuo biglietto è di: ${final_price}€`);
