console.clear();
const abc = 'abcdefghiklmnoprstuvxyz';
console.log (abc.at(2), abc[2]);
console.log (abc.at(-2), abc[abc.length -2]);
console.log (abc.charAt(2));
console.log (abc.charCodeAt(0));
console.log ('a', 'A', 'a'>'A');
console.log ('a'.charCodeAt(0), 'A'.charCodeAt(0));
console.log (abc.indexOf('F'));
console.log (abc.indexOf('de'));
console.log ('abc'.repeat(5));

console.log ('Labas rytas'.replace('rytas', 'vakaras'));
console.log ('Lalalalalalala'.replaceAll ('la', 'ma')); //pakeicia

const abcArray = abc.split('h');
console.log(abcArray);  // skelia masyva

console.log ('Labas rytas'.toUpperCase()); //pavercia didziosiomis
console.log ('LABAS RYTAS'.toLowerCase()); //paavercia mazosomis
// vardas --> Vardas
// vARDAS --> Vardas
// Vardas --> Vardas

function formatName (name) {
    const pirma = name [0];
    const kitos = name.slice(1);
    return pirma.toUpperCase() + kitos.toLowerCase();
}
console.log ('vardas', formatName('vardas'), '-->', 'Vardas');
console.log ('Vardas',formatName('Vardas'), '-->', 'Vardas');
console.log ('vARDAS',formatName('vARDAS'), '-->', 'Vardas');
console.log ('VARDAS',formatName('VARDAS'), '-->', 'Vardas');