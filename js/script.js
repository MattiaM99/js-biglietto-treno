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

let prezzoMinorenni = prezzo - scontoMinorenni;

let prezzoAnziani = prezzo - scontoAnziani;

// const eta = parseInt(prompt('quanti anni hai?'));

function eta(num, min, max){
  const MIN = min || 1;
  const MAX = max || 100;
  const parsed = parseInt(num)
  return Math.min(Math.max(parsed, MIN), MAX)
}

alert(
  eta(prompt("quanti anni hai?"))
)

if (eta <= 18) {
  document.getElementById('prezzo').innerHTML = '' + 'il tuo biglietto costa =' + '' + prezzoMinorenni + '€';
 } else if (eta >= 65) {
  document.getElementById('prezzo').innerHTML = '' + 'il tuo biglietto costa =' + '' + prezzoAnziani + '€';
 } else {
  document.getElementById('prezzo').innerHTML = '' +  'il tuo biglietto costa='  + '' + prezzo + '€';
 }

