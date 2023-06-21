console.clear();
/*
OBJECT - duomenu tipas {}
key1: value1,
key2: value2,
....,
*/

// const empty = {};
// console.log(empty);

// const person1Name = 'Petras';
// const person1Age = 98;
// const person1isMarried = true;

// const person2Name = 'Maryte';
// const person2Age = 88;
// const person2isMarried = false;

const person1 = {
    vardas: 'Petras',
    age: 98,
    isMaried: true,
}
const person2 = {
    vardas: 'Maryte',
    age: 88,
    isMaried: false,
}
console.log(person1);
console.log(person2);

// Sveiki, mano vardas yra VARDAS ir man xx metu.
const p1Name = person1 ['vardas'];
const p1Age = person1 ['age'];
const petras = `Sveiki, mano vardas yra ${p1Name} ir man ${p1Age} metu.`;
console.log(petras);

console.log('~~~~~~ Antras variantas~~~~~');
const maryte = `Sveiki, mano vardas yra ${person2['vardas']} ir man ${person2['age']} metu.`;
console.log (maryte);

console.log('~~~~~~ Trecias variantas~~~~~');
const car = {
    brand: 'Volvo',
    model: 'S40',
    color: 'black',
    price: 10000,
    currency: 'LTL',
    'kaip tau sekasi': 'super duper',
}
const kasManeDomina = 'kaip tau sekasi';
const info = car[kasManeDomina];
console.log(info);

const carsInfo = `Parduodu ${car.brand} ${car.model} (${car.color}) uz ${car.price} ${car.currency}.`;
console.log(carsInfo);
//const kaipTauSekasi = 'kaip tau sekasi';
console.log(car['kaip tau sekasi']);