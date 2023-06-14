console.clear();
/*
function sudetis(a, b) {
    return a+b;
}*/

function sudetis (a, b) {
    return a+b;
}
const s1 = sudetis (7, 5);
console.log (`7 + 5 = ${s1}`);

console.log ('~~~~~~~ Ar lyginis ~~~~~~~~~~~~');

function arLyginis (skaicius){
    if (skaicius % 2 == 0){
        return 'lyginis'
    }
    return 'ne lyginis';
}
const l1 = arLyginis(7);
console.log (`7 yra ${l1} `);

const l2 = arLyginis(88);
console.log (`88 yra ${l2} `);

console.log ('~~~~~~~ su pazymiai ~~~~~~~~~~~~');

const petras = [10, 2, 8, 4, 6];
const maryte = [10, 9, 8, 7];
const jonas = [2, 3, 4, 5];
const ona = [5, 5, 5, 5, 5, 5];

function average (marks) {
    let sum = 0;
    for (i=0; i< marks.length; i++)
    sum += marks[i];
          return sum/marks.length;
        }
console.log('Petras:', average(petras), petras);
console.log('Maryte:', average(maryte), maryte);
console.log('Jonas:', average(jonas), jonas);
console.log('Ona:', average(ona), ona);

console.log ('~~~~~~~ TypeOf ~~~~~~~~~~~~');

        function skirtumas (a, b){
            //jei a yra ne skaicius
            if (typeof a !== "number"){
                  // grazinti klaida
                    return 'Klaida: pirmas parametras ne skaicius';
            }
            // jeigu b yra neskaicius
            if (typeof b !== 'number'){
            // grazinti klaida
                return 'Klaida: antras narys ne skaicius!';
            }
            return a-b;
        }
    console.log (skirtumas (7, 5));
    console.log (skirtumas (17, 5));
    console.log (skirtumas (-17, 5));
    console.log (skirtumas (true, 5));
    console.log (skirtumas (7, false));
    console.log (skirtumas (7, 'labas'));
    console.log (skirtumas ('ezys', 5));