console.clear();
/*
FOR (ciklas)
for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}
*/

const marks = [10, 2, 8, 4, 6];
let sum = 0;
let index =0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];
console.log ('vidurkis', sum / marks.length);

// Isspaisdinti nuo 0 iki 5.
for (let i=0; i<=5; i++){
    console.log(i);
}
// antras pvz
console.log ('Antras pvz ~~~~~~~~~~~')

const pazymiai = [2, 4, 6, 8, 10, 8, 6, 9, 7];
let sums =0;
    for (let i=1; i<pazymiai.length; i++) {
        console.log(i, '-->', pazymiai[i]);
    }
// trecias pvz
console.log ('trecias pvz ~~~~~~~~~~~')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i+=3) {
    console.log (numbers[i]);
}
// ketvirtas pvz
console.log ('su String pvz ~~~~~~~~~~~')
const abc = 'abcdefgh';
let text = '';
for (let i = 0; i< abc.length; i++){
    text += abc[i];
    console.log (i, abc [i], text);
}
// ketvirtas pvz
console.log ('ketvirtas pvz ~~~~~~~~~~~')
const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];
// Sveiki, mano vardas yra [vardas]
for (i=0; i< students.length; i++){
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log (hi);
}
