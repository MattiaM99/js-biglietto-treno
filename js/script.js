/*
1.chiedere all'utente quanti chilometri deve percorrere
2. chiedere l'età all'utente
3.sconto 20% under 18
4.sconto 40% over 65
*/

const chilometri = parseInt(prompt('quanti chilometri devi percorrere?'));

let prezzo = chilometri * 0.21;

const scontoMinorenni = (prezzo / 100) * 20;

const scontoAnziani = (prezzo / 100) * 40;

const prezzoMinorenni = prezzo - scontoMinorenni;

const prezzoAnziani = prezzo - scontoAnziani;

let validData = true;
let errorMsg = '';

if (age < 1 || age > 120) {
  validData = false;
  errorMsg = 'Inserire una età valida';
}
if (isNan(age)) {
  validData = false;
  errorMsg = 'Inserire una età valida';
}

// function eta(num, min, max){
//   const MIN = min || 1;
//   const MAX = max || 100;
//   const parsed = parseInt(num)
//   return Math.min(Math.max(parsed, MIN), MAX)
// }

// alert(
//   eta(prompt("quanti anni hai?"))
// );

const eta = parseInt(prompt('quanti anni hai?'));


if (eta <= 18) {
  document.getElementById('prezzo').innerHTML = '' + 'il tuo biglietto costa =' + '' +prezzoMinorenni.toFixed(2)+ '€';
 } else if (eta >= 65) {
  document.getElementById('prezzo').innerHTML = '' + 'il tuo biglietto costa =' + '' +prezzoAnziani.toFixed(2) + '€';
 } else {
  document.getElementById('prezzo').innerHTML = '' +  'il tuo biglietto costa='  + '' + prezzo.toFixed(2) + '€';
 }

