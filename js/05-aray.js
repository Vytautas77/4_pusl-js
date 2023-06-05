console.clear();
/*
array (sarasas, listas, masyvas, matriaca)
- rekomanduotina to pacio tipo informacija
- galima ir skirtingu tipu informacija laikyti sarase
*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas'];

console.log(marks);
console.log('~~~~~~~~~~~~~~~~~~~~~~');
//    index  0,  1, 2, 3, 4, ......
const ona = [10, 2, 8, 4, 6, 10];

const onosSuma = ona[0] + ona[1] + ona[2] + ona[3] + ona[4] + ona[5];
console.log (onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosvidurkis = onosSuma / onosKiekis;
console.log('Onos pazimiu vidurkis yra: ', onosvidurkis);

console.log ('~~~~~~~~~~~~~~~~~~~~~');
const vegs = ['pomidoras', 'agurkas','svogunas', 'bulve'];
//Reikia nupirkti: pomidoras, agurkas, svogunas, bulve.
let sakinys = 'Reikia nupirkti: ';
let index = 0;
sakinys +=vegs[index];
index +=1;
sakinys += ', ';

sakinys +=vegs[index];
index +=1;
sakinys += ', ';

sakinys +=vegs[index];
index +=1;
sakinys += ', ';

sakinys +=vegs[index];
index +=1;
sakinys += '.';
console.log (sakinys);

let sakinys2 = 'Reikia nupirkti: ' + vegs.join(', ')+ '.'; 
console.log (sakinys2);

let sakinys3= `Reikia nupirkti: ${vegs.join(', ')} .`; 
console.log (sakinys2);

console.log('~~~~~~~~~~~~~~~~~~')

const jonas =[];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);
