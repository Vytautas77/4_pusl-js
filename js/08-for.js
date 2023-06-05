console.clear();
/*
FOR (ciklas)
for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}
*/

const marks = [10, 2, 8, 4, 6];
let suma = 0;
let index = 0;
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
console.log( suma/marks.length);
console.log('~~~~~~~~~~');

const pazymiai = [10, 2, 8, 4, 6, 4, 10, 34];
let sma = 0;
for (let i=0; i<pazymiai.length; i++) {
    console.log(i, '-->', pazymiai[i])}

/* for (let i=0; i < 5; i++) {
    console.log(i)
}*/
console.log('~~~~~~~~~~');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=0; i <numbers.length; i+=3)  {
    console.log (i, '-->', numbers[i]);
}
console.log('~~~~~~~~~~');
// Sveiki, mano vardas yra [Vardas]!
const studens = ['Petras', 'Maryte', 'Jonas', 'Ona'];
for (let i=0; i<studens.length; i++) {
    const name = studens[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log (hi);
}